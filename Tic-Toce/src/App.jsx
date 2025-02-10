import Player from "./components/Player"
import Log from "./components/Log"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns)

  let gameBoard = [...initialGameBoard.map((array) => [...array])]

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player
  }

  let winner = null

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column]

 if(firstSquareSymbol &&
  firstSquareSymbol === secondSquareSymbol &&
  firstSquareSymbol === thirdSquareSymbol)
  {
    winner = firstSquareSymbol
  }

  }

    function handleOnSelectSquare(rowIndex, colIndex) {
      setGameTurns((prevTurns) => {

        const currentPlayer = deriveActivePlayer(prevTurns)

        const updatedTurns = [
          { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns,
        ]

        return updatedTurns
      })
    }


    function handleRestart(){
      setGameTurns([]);
    }
    return (
      <>
        <main className='flex flex-col justify-center items-center mt-8'>
          <div className="flex flex-col gap-8 p-16 rounded shadow-[#3b3a3a] bg-[#1b1a1a] text-white uppercase font-semibold w-auto">
            <ol className="flex flex-row gap-32 justify-between items-stretch">
              <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
              <Player initialName="player 2" symbol="O" isActive={activePlayer === 'O'} />
            </ol>

            {winner && <GameOver winner={winner} onRestart={handleRestart}/>}
            <GameBoard onSelectSquare={handleOnSelectSquare} board={gameBoard} />
          </div>

          <Log turns={gameTurns} />
        </main>
      </>
    )
  }
export default App
