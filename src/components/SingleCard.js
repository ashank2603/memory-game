import React from 'react'
import './SingleCard.css'

function SingleCard({ card }) {
  return (
    <div className='card'>
        {/* This div should hold two images the src image and the cover image */}
        <div>
            <img className='front' src={card.src} alt="card front" />
            <img className='back' src='/images/cover.png' alt="card back" /> 
        </div>
    </div>
  )
}

export default SingleCard