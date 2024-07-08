import { createContext, useContext, useState } from "react";
import { AuthProvProps, ContextProp } from "../Interfaces/Interfaces";

export const AuthContext = createContext<ContextProp | undefined>(undefined)

export const AuthProv = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error(' AuthProv must be used withi an AuthProv')
    }
    return context
}
const AuthProvider: React.FC<AuthProvProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;