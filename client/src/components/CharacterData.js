export default function CharacterData({ user }) {
    return (
        <div>
            <div className="bg-orange-dark h-full content-center flex flex-wrap space-y-2 shadow-md rounded px-8 pt-6 pb-4 mb-2 mx-5 lg:mx-20">
                <h2 className="text-2xl text-white font-semibold">{user.username}</h2>
                <div className="pl-2 container space-y-3 py-3 rounded bg-orange-light">
                    <p>Level: {user.character.level}</p>
                    <p>Class: {user.character.class}</p>
                    <p>Health: {user.character.health}</p>
                    <p>Strength: {user.character.strength}</p>
                </div>
            </div>
        </div>
    )
}