import React from 'react'
import './SingleCard.css'

function SingleCard({ card , handleChoice, flipped, disabled}) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    } 

  return (
    <div className='card'>
        {/* This div should hold two images the src image and the cover image */}
        <div className={flipped ? "flipped" : ""}>
            <img className='front' src={card.src} alt="card front" />
            <img 
            className='back' 
            src='/images/cover.png' 
            onClick={handleClick} 
            alt="card back" /> 
        </div>
    </div>
  )
}

export default SingleCard