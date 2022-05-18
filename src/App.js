import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

// Creating an array pointing to the game images
const cardImages = [
  { "src": "/images/helmet-1.png", matched: false },
  { "src": "/images/potion-1.png", matched: false },
  { "src": "/images/ring-1.png", matched: false },
  { "src": "/images/scroll-1.png", matched: false },
  { "src": "/images/shield-1.png", matched: false },
  { "src": "/images/sword-1.png", matched: false },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  // state variables for card choices
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)


  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffledCards)
      setTurns(0)
  }

  // handling a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        //action to be taken if the cards match
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } 
            else {
              return card
            }
          })
        })
        resetTurn()
      }
      else{
        // set the delay for the cards to flip back if they dont match
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  //reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  // starting a new game automatically
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      {/* Displaying the cards in a grid */}
      <div class="card-grid">
        {cards.map(card => (
          <SingleCard 
          key={card.id} 
          card={card}
          handleChoice = {handleChoice}
          flipped = {card === choiceOne || card === choiceTwo || card.matched}
          disabled = {disabled}
          />
        ))}
      </div>
      <p>Turns: {turns} </p>
    </div>
  );
}

export default App;
