export default function Dice(props) {
    return (
        <button className="cursor-pointer hover:bg-gray-100 w-10 h-10 border p-6 rounded-xl flex items-center justify-center text-2xl font-bold">{props.number}</button>
    )
}