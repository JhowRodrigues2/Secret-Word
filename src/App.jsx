import { useState, useCallback, useEffect } from "react";
import "./App.css";
import videoBG from "./assets/video_bg.mp4";
import StartScreen from "./components/startScreen/startScreen";
import { wordsList } from "./data/words";
import Game from "./components/Game/Game";
import GamerOver from "./components/Game/GamerOver";
const stages = [
  {
    id: 1,
    name: "start",
  },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [picketWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");
  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word =
      words[category][[Math.floor(Math.random() * words[category].length)]];
    return {
      word,
      category,
    };
  };

  const startGame = () => {
    const { word, category } = pickWordAndCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  };
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };
  const retry = () => {
    setGameStage(stages[0].name);
  };
  return (
    <div className="App video-background">
      <video autoPlay muted loop>
        <source src={videoBG} type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
      <div className="content">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
        {gameStage === "end" && <GamerOver retry={retry} />}
      </div>
    </div>
  );
}

export default App;
