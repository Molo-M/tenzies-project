export default function Dice(props) {
    return (
        <button 
        onClick={props.hold} 
        aria-pressed={props.isHeld}
        aria-label={`Dice with value of ${props.value}, ${props.isHeld ? "Held": "Not held"}`}
        id="dice" 
        className={props.isHeld ? "bg-green-200 hover:bg-green-300" : "hover:bg-gray-100"}
        >{props.number}</button>
    )
}