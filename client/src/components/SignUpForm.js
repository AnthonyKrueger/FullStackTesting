import {useState} from 'react'
import axios from 'axios'
import InputField from './InputField'
import Button from './Button'

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
            <form className="bg-white h-full center text-center space-y-2 shadow-md rounded px-8 pt-6 pb-4 mb-2" onSubmit={(event) => handleSignUp(event)}>
                <InputField type="text" placeholder="Username" value={user.username} onChange={(event) => handleChange("username", event.target.value)} />
                <InputField type="text" placeholder="Email" value={user.email} onChange={(event) => handleChange("email", event.target.value)} />
                <InputField type="password" placeholder="Password" value={user.password} onChange={(event) => handleChange("password", event.target.value)} />
                <div className="pt-5">
                    <Button type="submit" text="Sign-Up"/>
                </div>
            </form>
        </div>
    )
}