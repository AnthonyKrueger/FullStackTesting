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
            if(error.response) {
                if(error.response.data.code === 11000) {
                    alert("Email or Username Not Available")
                }
                else {
                    alert(error.response.data.message)
                }
                console.log(error.response.data)
            }
            else if(error.request) {
                console.log(error.request);
                alert(error.request)
            }
            else {
                console.log("error:", error.message)
            }
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
        <div className="h-full">
            <form className="bg-orange-dark h-full content-center flex flex-wrap space-y-2 shadow-md rounded px-8 pt-6 pb-4 mb-2" onSubmit={(event) => handleSignUp(event)}>
                <h2 className="text-xl pb-5 text-white font-semibold">Sign Up</h2>
                <InputField type="text" placeholder="Email" value={user.email} onChange={(event) => handleChange("email", event.target.value)} />
                <div className="grid grid-cols-2 w-full gap-2">
                    <InputField type="text" placeholder="Username" value={user.username} onChange={(event) => handleChange("username", event.target.value)} />
                    <InputField type="password" placeholder="Password" value={user.password} onChange={(event) => handleChange("password", event.target.value)} />
                </div>
                <div className="pt-5 mx-auto">
                    <Button type="submit" text="Sign-Up"/>
                </div>
            </form>
        </div>
    )
}