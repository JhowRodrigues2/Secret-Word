import './GameOver.css'
const GamerOver = ({retry}) => {
  return (
    <div>
      <button onClick={retry}>Reiniciar Jogo</button>
    </div>
  )
}

export default GamerOver