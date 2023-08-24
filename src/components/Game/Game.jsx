import React, { useState,useRef } from "react";
import "./Game.css";
const Game = ({
  verifyLetter,
  picketWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter('')
    letterInputRef.current.focus();

  };
  const handleInputChange = (e) => {
    const inputValue = e.target.value.toUpperCase();
    const lettersOnly = inputValue.replace(/[0-9]/g, '');
    setLetter(lettersOnly);
  };


  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span><br/>
        <span>Tentativas Restantes: {guesses}</span>
      </p>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <div className="wordContainer">
        {letters.map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <span key={index} className="letter">
              {letter}
            </span>
          ) : (
            <span key={index} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            id=""
            maxLength="1"
            required
            onChange={handleInputChange}
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas: </p>
         {wrongLetters.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
    </div>
  );
};

export default Game;
