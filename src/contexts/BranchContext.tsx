// @ts-nocheck
import { createContext, ReactNode, useContext, useMemo, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// 타입 정의
type BranchContextType = [string, (newBranch: string) => void];

// Context 생성 및 초기 값 설정
const BranchContext = createContext<BranchContextType | undefined>(undefined);

interface BranchProviderProps {
    children: ReactNode; // ReactNode를 사용하여 children의 타입을 지정
}

function BranchProvider({ children }: BranchProviderProps) {
    const pathname = useLocation().pathname;
    const location = pathname === '/' ? '/' : pathname.replace("/branch/", "");
    const [branch, changeBranch] = useState<string>(location);
    const router = useNavigate();

    useEffect(() => {
        try {
            if (branch !== location) {
                setBranch(location);
            }
        } catch (e) {
            console.error('Branch update error:', e);
        }
    }, [location, branch]);

    const setBranch = (newBranch: string) => {
        changeBranch(newBranch);
        if (newBranch !== location) {
            router(newBranch === '/' ? '/' : `/branch/${newBranch}`);
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