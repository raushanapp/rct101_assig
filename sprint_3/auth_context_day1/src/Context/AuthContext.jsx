
import { useAnimationFrame } from "framer-motion";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [isAuthorized,setIsAuthorized] = useState(false);
    const logout =() =>{
        setIsAuthorized(false)
    }
    const login = (username,password) =>{

        if (username,password) {
            setIsAuthorized(true)
        }
    }
    return (
        <AuthContext.Provider value={
            {
                isAuthorized,
                login,
                logout
            }
        }>{children}</AuthContext.Provider>
    )
}