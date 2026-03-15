import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState, type ReactNode } from "react";



interface User {
  id: number
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

interface AuthContextType{
    userData: User | null;
    saveUserData:()=> void;
}


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null)

interface AuthContextProvProp{
    children: ReactNode;
}
export default function AuthContextProvider({children}: AuthContextProvProp){
    const [userData , setUserData] = useState<User | null>(null)

    const saveUserData= ()=>{
        const encodedToken = localStorage.getItem('userToken')
        if(encodedToken){
            const decodedToken = jwtDecode<User>(encodedToken)
            setUserData(decodedToken)
        }
    }

//refresh
    useEffect(()=>{
        if(localStorage.getItem('userToken')){
            // eslint-disable-next-line react-hooks/set-state-in-effect
            saveUserData()
        }
    },[])

    return(
        <AuthContext.Provider value={{userData , saveUserData}}>{children}</AuthContext.Provider>
    )
}