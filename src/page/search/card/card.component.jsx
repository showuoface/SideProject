import React from 'react'
import './card.styles.scss';

const Card = ({ persons }) => {
  const { image, name, username, price } = persons;
  return (
    <div
      className="card-container"
      key={image}
    >
      <img
          alt={name}
          src={image}
      />
      <div className='info-box'>
        <div className='title'>
          <h2>{name}</h2>
          <div className='bsc-button'>
            BSC
          </div>
        </div>
        <div className='desc'>
          <div className='left'>
            <div className='name'>Creatar</div>
            <div className='content'>{username}</div>
          </div>
          <div className='right'>
            <div className='name'>Current Bid</div>
            <div className='content'>{price}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
