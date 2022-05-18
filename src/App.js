import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

// Creating an array pointing to the game images
const cardImages = [
  { "src": "/images/helmet-1.png" },
  { "src": "/images/potion-1.png" },
  { "src": "/images/ring-1.png" },
  { "src": "/images/scroll-1.png" },
  { "src": "/images/shield-1.png" },
  { "src": "/images/sword-1.png" },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  // state variables for card choices
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)


  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

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
      if (choiceOne.src === choiceTwo.src) {
        console.log("Those cards match")
        resetTurn()
      }
      else{
        console.log("Those cards do not match")
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  //reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

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
          />
        ))}
      </div>
    </div>
  );
}

export default App;
