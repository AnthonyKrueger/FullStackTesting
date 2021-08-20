import {useEffect, useState} from 'react';
import axios from 'axios';
import UserData from "../components/UserData";

export default function UserPage() {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/api/user/me')
            if(response) {
                setUserData(response.data)
            }
            else {
                console.log("error")
            }
        }
        fetchData();
    }, [])
    if(userData) {
        return (
            <div className="mt-10">
                <UserData userData={userData}/>
            </div>
        )
    }
    else {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }
}