import {Redirect} from "react-router-dom";
import {useEffect} from "react";

export default function Logout({logoutFunction}) {
    useEffect(() => {
        async function logOut() {
            logoutFunction(false);
            const response = await fetch("/api/user/logout");
        }
        logOut()
    })
    return (
        <Redirect to="/" />
    )
    
}