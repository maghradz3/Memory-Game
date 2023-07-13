import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { CardItem } from "./components/CardItem";
import { Modal } from "./components/Modal";
import { Rules } from "./components/Rules";
import { LangMode } from "./components/LangMode";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [finalCards, setFinalCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [player1Turns, setPlayer1Turns] = useState(null);
  const [player2Turns, setPlayer2Turns] = useState(null);
  const [showmodal, setShowModal] = useState(false);
  const [showRulesmodal, setShowRulesModal] = useState(false);
  const [rules, setRules] = useState(false);
  const [georgianLanguage, setGeorgianLanguage] = useState(false);

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setFinalCards(shuffleCards);
    setTurns(0);
  };

  const GameRestarter = () => {
    shuffleCards();
    // setChoiceOne(null);
    // setChoiceTwo(null);
    // setFinalCards(shuffleCards);
    // setTurns(0);
    setPlayer1Turns(null);
    setPlayer2Turns(null);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //Compare two Cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        console.log("cards are matched");
        setFinalCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        console.log("cards do not match");
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const allMatchedFalse = finalCards.every((card) => card.matched === true);

  //Reset cards
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //Restart New Game Automaticly
  useEffect(() => {
    shuffleCards();
    setPlayer1Turns(null);
    setPlayer2Turns(null);
  }, []);

  const handlePlayer1 = () => {
    setPlayer1Turns(turns);
    shuffleCards();
  };

  const handlePlayer2 = () => {
    setPlayer2Turns(turns);
    shuffleCards();
    setShowModal(true);
  };
  console.log(showRulesmodal);
  console.log("rules", rules);

  const finalResult = player1Turns < player2Turns ? "player 1" : "player 2";

  return (
    <div className="App">
      <div>
        <LangMode
          content={"Memory Game"}
          georgianLanguage={georgianLanguage}
          setGeorgianLanguage={setGeorgianLanguage}
        />
      </div>
      <div>
        <button onClick={GameRestarter}>
          {georgianLanguage ? "ახალი თამაში" : "New Game"}
        </button>
        <button
          onClick={() => {
            setShowRulesModal(true);
            setRules(true);
          }}
        >
          {georgianLanguage ? "წესები" : "Rules"}
        </button>
      </div>
      {showRulesmodal && (
        <>
          {rules && (
            <Rules
              georgianLanguage={georgianLanguage}
              onClose={() => setShowRulesModal(false)}
            />
          )}
        </>
      )}
      <div className="PlayersContainer">
        <h1>
          {georgianLanguage ? "მოთამაშე 1 :" : "Player 1 :"} {player1Turns}
        </h1>
        <h1>
          {georgianLanguage ? "მოთამაშე 2 :" : "Player 2 :"} {player2Turns}
        </h1>
      </div>
      <p>
        {georgianLanguage ? "ცდა :" : "Turns :"} {turns}
      </p>

      {allMatchedFalse && player1Turns === null && (
        <button onClick={handlePlayer1}>
          {georgianLanguage ? "შემდეგი მოთამაშე" : "Next Player"}
        </button>
      )}
      {allMatchedFalse && player1Turns !== null && (
        <button onClick={handlePlayer2}>
          {georgianLanguage ? "შედეგების ნახვა" : "Show Results :"}
        </button>
      )}
      {showmodal && (
        <Modal
          finalResult={finalResult}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
      <div className="cardGrid">
        {finalCards.map((card) => (
          <CardItem
            card={card}
            handleChoice={handleChoice}
            key={card.id}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
