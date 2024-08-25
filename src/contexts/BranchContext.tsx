import { createContext, ReactNode, useContext, useMemo, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Landing from '../assets/text/landing';

// 타입 정의
type BranchContextType = [number, Dispatch<SetStateAction<number>>];

// Context 생성 및 초기 값 설정
const BranchContext = createContext<BranchContextType | undefined>(undefined);

interface BranchProviderProps {
    children: ReactNode; // ReactNode를 사용하여 children의 타입을 지정
}

function BranchProvider({ children }: BranchProviderProps) {
    const location = useLocation().pathname.replace("/branch/", "");
    const [branch, setBranch] = useState<number>(() => {
        let branchInfo = Landing.branches.findIndex(({ path }) => path === location);
        return branchInfo < 0 ? branchInfo : branchInfo - 1;
    });

    useEffect(() => {
        let branchInfo = Landing.branches.findIndex(({ path }) => path === location);
        branchInfo = branchInfo < 0 ? branchInfo : branchInfo - 1;

        // branch가 실제로 변경될 필요가 있을 때만 상태를 업데이트합니다.
        if (branch !== branchInfo) {
            setBranch(branchInfo);
        }
    }, [location]);

    const value = useMemo<BranchContextType>(() => [branch, setBranch], [branch, setBranch]);

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