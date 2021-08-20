import {useState} from 'react'
import axios from 'axios'

export default function LoginForm({loginFunction}) {
    const [user, setField] = useState({"username": "", "password": ""})

    function handleChange(field, value) {
        setField({...user, [field]: value})
    }

    async function handleLogin(event) {
        event.preventDefault()
        const response = await axios.post("/api/user/login", {
            username: user.username,
            password: user.password
        })
        .catch(function (error) {
            console.log(error)
        })
        if(response) {
            console.log("Login Successful")
            loginFunction(true)
        }
        else {
            console.log("Login Failed")
        }
    }

    return (
        <div>
            <form onSubmit={(event) => handleLogin(event)}>
                <input type="text" placeholder="Username" value={user.username} onChange={(event) => handleChange("username", event.target.value)}></input>
                <input type="text" placeholder="Password" value={user.password} onChange={(event) => handleChange("password", event.target.value)}></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}