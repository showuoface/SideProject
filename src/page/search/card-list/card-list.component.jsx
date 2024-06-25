import React from 'react'
import Card from '../card/card.component';
import './card-list.styles.scss';

const CardList = ({ persons }) => {
  return (
    <div className="card-list">
		{persons.map((persons) => {
			return <Card persons={persons} />;
		})}
	</div>
  )
}

export default CardList
