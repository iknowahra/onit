import { createContext, ReactNode, useContext, useMemo, useState, Dispatch, SetStateAction } from 'react';

// 타입 정의
type BranchContextType = [number, Dispatch<SetStateAction<number>>];

// Context 생성 및 초기 값 설정
const BranchContext = createContext<BranchContextType | undefined>(undefined);

interface BranchProviderProps {
    children: ReactNode; // ReactNode를 사용하여 children의 타입을 지정
}

function BranchProvider({ children }: BranchProviderProps) {

    const [branch, setBranch] = useState<number>(-1);

    // useMemo 결과의 타입을 명시적으로 지정
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