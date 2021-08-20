import {useState} from 'react'
import axios from 'axios'
import InputField from './InputField'
import Button from './Button'

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
        <div className="h-full">
            <form className="bg-white h-full center text-center space-y-2 shadow-md rounded px-10 pt-6 pb-4 mb-2" onSubmit={(event) => handleLogin(event)}>
            <div className="my-5 space-y-2">

                <InputField 
                type="text" 
                placeholder="Username" 
                value={user.username} 
                onChange={(event) => handleChange("username", event.target.value)} 
                />

                <InputField 
                type="password" 
                placeholder="Password" 
                value={user.password} 
                onChange={(event) => handleChange("password", event.target.value)} 
                />
                <div className="pt-10">
                    <Button type="submit" text="Login"/>
                </div>
            </div>
            </form>
        </div>
    )
}