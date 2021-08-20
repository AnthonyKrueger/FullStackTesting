import {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default function SignUpForm({loginFunction}) {
    const [user, setField] = useState({"username": "", "password": "", "email": ""})

    function handleChange(field, value) {
        setField({...user, [field]: value})
    }

    async function handleSignUp(event) {
        event.preventDefault()
        const response = await axios.post("/api/user", {
            username: user.username,
            password: user.password,
            email: user.email
        })
        .catch(function (error) {
            console.log(error)
        })
        if(response) {
            console.log("Sign-Up Successful")
            loginFunction(true)
        }
        else {
            console.log("Sign-Up Failed")
        }
    }

    return (
        <div>
            <form onSubmit={(event) => handleSignUp(event)}>
                <input type="text" placeholder="Username" value={user.username} onChange={(event) => handleChange("username", event.target.value)}></input>
                <input type="text" placeholder="Password" value={user.password} onChange={(event) => handleChange("password", event.target.value)}></input>
                <input type="text" placeholder="Email" value={user.email} onChange={(event) => handleChange("email", event.target.value)}></input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}