export default function Dice(props) {
    return (
        <button onClick={props.hold} id="dice" className={props.isHeld ? "bg-green-200 hover:bg-green-300" : "hover:bg-gray-100"}>{props.number}</button>
    )
}