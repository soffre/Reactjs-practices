export default function GameBoard({ onSelectSquare, board }) {

    return (
        <div className="grid grid-cols-3 gap-2 w-[360px] mx-auto">
            {board.map((row, rowIndex) =>
                row.map((playerSymbol, colIndex) => (
                    <button
                        key={`${rowIndex}-${colIndex}`}
                        onClick={() => onSelectSquare(rowIndex, colIndex)}
                        className="bg-[#4e4c4c] w-24 h-24 text-6xl font-[lora] font-bold flex items-center justify-center mt-2"
                        disabled={playerSymbol !== null}
                    >
                        {playerSymbol}
                    </button>
                ))
            )}
        </div>
    )

}