import './GameOver.css'
const GamerOver = ({retry, score}) => {
  return (
    <div>
      <h1> GAME OVER!</h1>
      <h2>Pontuação: <span>{score}</span></h2>
      <button onClick={retry}>Reiniciar Jogo</button>
    </div>
  )
}

export default GamerOver