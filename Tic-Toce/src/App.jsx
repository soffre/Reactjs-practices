import Player from "./components/Player"
import Log from "./components/Log"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"
const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
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


function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player
  }
  return gameBoard
}

function driveWinner(gameBoard, players) {

  let winner = null

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol]
    }

  }
  return winner
  
}
function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns)

 const gameBoard = deriveGameBoard(gameTurns)

  const winner = driveWinner(gameBoard, players)

  function handleOnSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {

      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns,
      ]

      return updatedTurns
    })
  }


  function handleRestart() {
    setGameTurns([]);
  }
  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <>
      <main className='flex flex-col justify-center items-center mt-8'>
        <div className="flex flex-col gap-8 p-16 rounded shadow-[#3b3a3a] bg-[#1b1a1a] text-white uppercase font-semibold w-auto">
          <ol className="flex flex-row gap-32 justify-between items-stretch">
            <Player initialName={PLAYERS.X} symbol="X" onChnageName={handlePlayerNameChange} isActive={activePlayer === 'X'} />
            <Player initialName={PLAYERS.O} symbol="O" onChnageName={handlePlayerNameChange} isActive={activePlayer === 'O'} />
          </ol>

          {winner && <GameOver winner={winner} onRestart={handleRestart} />}
          <GameBoard onSelectSquare={handleOnSelectSquare} board={gameBoard} />
        </div>

        <Log turns={gameTurns} />
      </main>
    </>
  )
}
export default App
