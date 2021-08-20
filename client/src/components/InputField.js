export default function InputField({type, placeholder, value, onChange}) {
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
    )
}