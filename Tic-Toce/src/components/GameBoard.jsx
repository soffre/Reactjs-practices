import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelectSquare, turns}) {
let gameBoard = initialGameBoard

for (const turn of turns){
    const { square, player} = turn;
    const { row, col} = square;

    gameBoard[row][col] = player
}

    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol
    //         return updatedBoard
    //     })
    //     onSelectSquare();
    // }

    return (
        <div className="grid grid-cols-3 gap-2 w-[360px] mx-auto">
            {gameBoard.map((row, rowIndex) =>
                row.map((playerSymbol, colIndex) => (
                    <button
                        key={`${rowIndex}-${colIndex}`}
                        onClick={() => onSelectSquare(rowIndex, colIndex)}
                        className="bg-[#4e4c4c] w-24 h-24 text-6xl font-[lora] font-bold flex items-center justify-center mt-2"
                    >
                        {playerSymbol}
                    </button>
                ))
            )}
        </div>
    )

}