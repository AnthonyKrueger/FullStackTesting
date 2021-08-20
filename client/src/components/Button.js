export default function Button({type, text}) {
    return (
        <button className="bg-red-dark hover:bg-red-deep text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type={type}>{text}</button>
    )
}