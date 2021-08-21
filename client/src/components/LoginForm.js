import {useState} from 'react'
import axios from 'axios'
import InputField from './InputField'
import Button from './Button'
import Alert from './Alert'

export default function LoginForm({loginFunction}) {
    const [user, setField] = useState({"username": "", "password": ""})
    const [alerts, setAlert] = useState({show: false, message:null})

    function handleChange(field, value) {
        setField({...user, [field]: value})
    }

    function hideAlert() {
        setAlert({...alerts, show: false})
    }

    async function handleLogin(event) {
        event.preventDefault()
        const response = await axios.post("/api/user/login", {
            username: user.username,
            password: user.password
        })
        .catch(function (error) {
            if(error.response) {
                console.log(error.response)
                setAlert({show: true, message: error.response.data.message})
            }
            else if(error.request) {
                console.log(error.request);
                setAlert({show: true, message: error.request})
            }
            else {
                console.log("error:", error.message)
                setAlert({show: true, message: error.message})
            }
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
            <form className="bg-orange-dark h-full content-center flex flex-wrap space-y-2 shadow-md rounded px-8 pt-6 pb-4 mb-2" onSubmit={(event) => handleLogin(event)}>
                <h2 className="text-xl pb-5 text-white underline font-semibold">Login</h2>

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
                <div className="pt-5 mx-auto">
                    <Button type="submit" text="Login"/>
                </div>
                <div className="w-full">
                    {alerts.show ? <Alert message={alerts.message} hideFunction={hideAlert}/> : null}
                </div>
            </form>
        </div>
    )
}