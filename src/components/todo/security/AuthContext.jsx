import { createContext, useContext, useState } from "react";

//create a context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//share the created context with other components
export default function AuthProvider({ children }) {

    const [isAuthenticated, SetAuthenticated] = useState(false)
    
    const [username, setUsername] = useState(null)
    
    function login(username, password) {
        if (username === 'Shashank' && password === 'dummy') {
            SetAuthenticated(true)
            setUsername(username)
            return true
        }
        else {
            SetAuthenticated(false)
            setUsername(null)
            return false
        }
    }

    function logout() {
        SetAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
            {children}
        </AuthContext.Provider>
    )
}