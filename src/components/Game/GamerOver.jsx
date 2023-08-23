import './GameOver.css'
const GamerOver = ({retry, score}) => {
  return (
    <div>
      <h1>Fim do jogo!</h1>
      <h2>A sua pontução foi: <span>{score}</span></h2>
      <button onClick={retry}>Reiniciar Jogo</button>
    </div>
  )
}

export default GamerOver