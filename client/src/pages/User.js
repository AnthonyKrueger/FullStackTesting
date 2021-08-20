import {useEffect, useState} from 'react';
import axios from 'axios';

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
            <div>
                <h2>UserData: </h2>
                <h2>{userData.username}</h2>
                <h3>{userData._id}</h3>
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