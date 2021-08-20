import { useState } from "react";

export default function Home() {

    const [data, setData] = useState(null)

    async function handleClick() {
        const data = await fetch("/api/user/session");
        const userData = await data.json();
        console.log(userData)
        setData(userData);
    }

    return (
        <div>
            <p>{!data ? "No User Loaded" : data}</p>
            <button onClick={handleClick}>Fetch Data</button>
        </div>
    );
}