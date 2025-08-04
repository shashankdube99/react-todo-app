import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./TodoApp.css"
import LogoutComponent from "./LogoutComponent"
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import ListTodosComponent from "./ListTodos"
import ErrorComponent from "./ErrorComponent"
import WelcomeComponent from "./WelcomeComponent"
import LoginComponent from "./LoginComponent"
import AuthProvider, { useAuth } from "./security/AuthContext"
import TodoComponent from "./TodoComponent"

function AuthenticatedRout({ children }) {
    const authContext = useAuth()

    if (authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}

export default function TodoApp() {
    return (
        <div className="TodoApp">

            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRout>
                                <WelcomeComponent />
                            </AuthenticatedRout>
                        } />
                        <Route path='/todos' element={
                            <AuthenticatedRout>
                                <ListTodosComponent />
                            </AuthenticatedRout>
                        } />
                        <Route path='/todo/:id' element={
                            <AuthenticatedRout>
                                <TodoComponent />
                            </AuthenticatedRout>
                        } />
                        <Route path='/logout' element={
                            <AuthenticatedRout>
                                <LogoutComponent />
                            </AuthenticatedRout>
                        } />
                        <Route path='*' element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

