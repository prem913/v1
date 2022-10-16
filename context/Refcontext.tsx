import { createContext, ReactNode, useContext } from "react";


export type RefContextType ={
    ref:HTMLElement | null;
}

const refContextDefault:RefContextType={
    ref:null
}

const RefContext = createContext<RefContextType>(refContextDefault);

export function useRefContext() {
    return useContext(RefContext);
}

type Props = {
    children: ReactNode;
};

// export function AuthProvider({ children }: Props) {
//     const value = {

//     }
//     return (
//         <>
//             <RefContext.Provider value={value}>
//                 {children}
//             </RefContext.Provider>
//         </>
//     );