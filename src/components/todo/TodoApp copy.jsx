import { useState } from "react"
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from "react-router-dom"
import "./TodoApp.css"
import LogoutComponent from "./LogoutComponent"
import FooterComponent from "./FooterComponent"

export default function TodoApp() {
    return (
        <div className="TodoApp">


            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<ListTodosComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />
                    <Route path='*' element={<ErrorComponent />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('Shashank')
    const [password, setPassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        if (username === 'Shashank' && password === 'dummy') {
            console.log("Success")
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        }
        else {
            console.log("Failed")
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <div className="LoginForm">
                <h1>Time to Login!</h1>
                {showSuccessMessage && <div className="successMessage">Authenticated Successfully.</div>}
                {showErrorMessage && <div className="errorMessage">Authentication Failed.</div>}
                <div>
                    <label>User Name:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {

    const { username } = useParams()
    console.log(username)
    return (
        <div>
            <h1>Welcome to {username}</h1>
            <div className="welcome">
                Manage your todos - <Link to="/todos">go here</Link>
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ.
            </div>
        </div>
    )
}

function ListTodosComponent() {

    const today = new Date()

    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const todos = [
        { id: 1, description: 'Learn AWS', done: 'false', targetDate: targetDate },
        { id: 2, description: 'Learn Full Stack', done: 'false', targetDate: targetDate },
        { id: 3, description: 'Learn DevOps', done: 'false', targetDate: targetDate }
    ]

    return (
        <div className="ListTodosComponent">
            <h1>Things you wanted to do!</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        < td > {todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

function HeaderComponent() {
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">in28minutes</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

