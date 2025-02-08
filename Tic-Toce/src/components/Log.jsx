export default function Log({ turns }) {
    return (
        <ol className="mt-8 space-y-2">
            {turns.map((turn) => (
                <li key={`${turn.square.row} ${turn.square.col}`}>{
                    turn.player} selected {turn.square.row},{turn.square.col}
                </li>
            ))}
        </ol>
    )
}