import { createContext, ReactNode, useContext, useMemo, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// 타입 정의
type BranchContextType = [string, (newBranch: string) => void];

// Context 생성 및 초기 값 설정
const BranchContext = createContext<BranchContextType | undefined>(undefined);

interface BranchProviderProps {
    children: ReactNode; // ReactNode를 사용하여 children의 타입을 지정
}

function BranchProvider({ children }: BranchProviderProps) {
    const location = useLocation().pathname.replace("/branch/", "") || '/';
    const [branch, changeBranch] = useState<string>(location);
    const router = useNavigate();
    // location이 변경될 때만 branch를 업데이트하고, 
    // Router.tsx의 useEffect는 제거하거나 수정해야 합니다
    useEffect(() => {
        try {
            if (branch !== location) {
                setBranch(location);
            }
        } catch (e) {
            console.log(e);
        }
    }, [location]);

    const setBranch = (newBranch: string) => {
        changeBranch(newBranch);
        if (newBranch != location) {
            if (newBranch === '/') {
                router('/');
            } else {
                router(`/branch/${newBranch}`);
            }
        }
    }

    const value = useMemo<BranchContextType>(() => [branch, setBranch], [branch]);

    return (
        <BranchContext.Provider value={value}>
            {children}
        </BranchContext.Provider>
    );
}

// Context 사용 예시
function useBranch() {
    const context = useContext(BranchContext);
    if (context === undefined) {
        throw new Error('useBranch must be used within a BranchProvider');
    }
    return context;
}

export { BranchProvider, useBranch };