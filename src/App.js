import { useState } from 'react';
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

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setCards(shuffledCards)
      setTurns(0)
  }

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      {/* Displaying the cards in a grid */}
      <div class="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card}/>
        ))}
      </div>
    </div>
  );
}

export default App;
