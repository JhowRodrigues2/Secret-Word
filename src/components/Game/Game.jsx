import React from 'react'
import './Game.css'
const Game = ({verifyLetter}) => {
  return (
    <div>
      <button onClick={verifyLetter}> Finalizar Jogo</button>

    </div>
  )
}

export default Game