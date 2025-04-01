import { createContext, ReactNode, useContext } from "react";
import { useAppwrite } from "./useAppwrite";
import { getCurrentUser } from './appwrite'
import { loadPartialConfig } from "@babel/core";

interface User{
    $id: string;
    name: string;
    email: string;
    avatar: string;
}

interface GlobalContextType {
    isLoggedIn: boolean;
    user: User| null;
    loading: boolean;
    refetch: (newParams?: Record<string, string | number>) => Promise<void>;
}

const GlobalContext = createContext<GlobalContextType | undefined >(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode}) =>{
    
       const {
        data: user, 
        loading, 
        refetch

       } = useAppwrite( { fn:getCurrentUser })


const isLoggedIn = !!user;
// !null = true => !true = false;
// !{name: 'ajikya'}=> false => true;


// console.log("user",JSON.stringify(user));

    return (
        <GlobalContext.Provider value={{
            isLoggedIn,
            user,
            loading,
            refetch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}



export const useGlobalContext = () : GlobalContextType =>{
    const  context = useContext(GlobalContext);

    if(!context){
        throw new Error('useGlobalContext must be used within a Global Provider');
    }

    return context;

}


export default  GlobalProvider;