import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService"

export default function WelcomeComponent() {

    const { username } = useParams()

    const [message, setMessage] = useState(null)

    function CallHelloWorldRestApi() {
        console.log("called")
        
        retrieveHelloWorldPathVariable('Shashank')
            .then((response) => successfullResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))


    }

    function successfullResponse(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return (
        <div>
            <h1>Welcome to {username}</h1>
            <div className="welcome">
                Manage your todos - <Link to="/todos">go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={CallHelloWorldRestApi}>Call Hello World!</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}