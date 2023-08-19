import React from "react";
import "./Game.css";
const Game = ({ verifyLetter }) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuaçao:000</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
        <div className="wordContainer">
          <span className="letter">A</span>
          <span className="BlankSquare"></span>
        </div>
    <div className="letterContainer">
      <input type="text" name="letter" id="" maxLength="1" required />
      <button>Jogar!</button>
    </div>
    <div className="wrongLettersContainer">
      <p>Letras já utilizadas:</p>
      <span>B</span>
      <span>A</span>
    </div>
    </div>
  );
};

export default Game;
