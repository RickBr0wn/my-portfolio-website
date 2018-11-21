import React from 'react'
import './card.css'

const symbols = {
  openBracket: '{',
  closeBracket: '}'
}

const CardComponent = () => {
  return (
    <div className="card-body">
      <div className="card-outer">
        <div className="card-header">
          <div className="card-header-logo">DEV</div>
          <div className="card-header-info">
            <p><strong>The Practical Dev</strong>
              <span className="muted-text"> @ThePraticalDev . Sept 10</span>
            </p>
            <p>Learning React? Start small.</p>
            <p>{symbols.openBracket} author: 
              <span className="card-link"> @riQeh </span>
              {symbols.closeBracket}</p>
          </div>
        </div>
        <div className="main-card">
          <div className="card-img">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="React Logo" />
          </div>
          <div className="card-panel">
            <p><strong>Learning React? Start small.</strong></p>
            <p>Can't pry yourself from the tutorials? The cure is to make tiny little experiment apps.</p>
            <p className="muted-text">dev.to</p>
          </div>
        </div>
        <div className="button-container">
          <i className="far fa-comment"> 2</i>
          <i className="fas fa-retweet"> 47</i>
          <i className="fas fa-heart"> 190</i>
          <i className="far fa-envelope"></i>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
