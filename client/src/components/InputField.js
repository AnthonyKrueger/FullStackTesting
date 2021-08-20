export default function InputField({type, placeholder, value, onChange}) {
    return (
        <input required type={type} placeholder={placeholder} value={value} onChange={onChange} className="shadow appearance-none bg-red-dark border-red-deep border rounded w-full py-2 px-3 placeholder-white placeholder-opacity-50 text-white leading-tight focus:outline-none focus:shadow-outline"></input>
    )
}