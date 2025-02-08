import Player from "./components/Player"
import Log from "./components/Log"
import GameBoard from "./components/GameBoard"
import { useState } from "react"

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O'
  }

  return currentPlayer
}

function App() {
const [gameTurns, setGameTurns] = useState([])

const activePlayer = deriveActivePlayer(gameTurns)

function handleOnSelectSquare(rowIndex, colIndex){
  setGameTurns((prevTurns) => {

  const currentPlayer = deriveActivePlayer(prevTurns)   

    const updatedTurns = [
      { square: {row : rowIndex, col: colIndex}, player:currentPlayer}, ...prevTurns,
    ]

    return updatedTurns
  } )
}

  return (
    <>
      <main className='flex flex-col justify-center items-center mt-8'>
        <div className="flex flex-col gap-8 p-16 rounded shadow-[#3b3a3a] bg-[#1b1a1a] text-white uppercase font-semibold w-auto">
          <ol className="flex flex-row gap-32 justify-between items-stretch">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
            <Player initialName="player 2" symbol="O" isActive={activePlayer === 'O'} />
          </ol>

        <GameBoard onSelectSquare = {handleOnSelectSquare} turns={gameTurns}/>
        </div>

     <Log turns={gameTurns}/>
      </main>
    </>
  )
}

export default App
