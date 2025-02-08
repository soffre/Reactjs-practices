import Player from "./components/Player"
import Log from "./components/Log"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
function App() {
const [activePlayer, setActivePlayer] = useState('X')
const [gameTurns, setGameTurns] = useState([])

function handleOnSelectSquare(){
  setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
}

  return (
    <>
      <main className='flex flex-col justify-center items-center mt-8'>
        <div className="flex flex-col gap-8 p-16 rounded shadow-[#3b3a3a] bg-[#1b1a1a] text-white uppercase font-semibold w-auto">
          <ol className="flex flex-row gap-32 justify-between items-stretch">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
            <Player initialName="player 2" symbol="O" isActive={activePlayer === 'O'} />
          </ol>

        <GameBoard onSelectSquare = {handleOnSelectSquare} activePlayerSymbol ={activePlayer}/>
        </div>

        LOG
      </main>
    </>
  )
}

export default App
