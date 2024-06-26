import React from 'react'
import Layout from '../../layout';
import { useState, useEffect } from 'react';
import SearchBox from './search-box/search-box.component';
import CardList from './card-list/card-list.component';
import './index.scss';

export default function SearchPage() {
	const [searchField, setSearchField] = useState('');
	const [persons, setPersons] = useState([]);
	const [filteredPersons, setFilteredPersons] = useState(persons);
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		fetch(`${process.env.PUBLIC_URL}/mockData.json`)
		  .then((response) => {
			if (!response.ok) {
			  throw new Error('Network response was not ok');
			}
			return response.json();
		  })
		  .then((users) => setPersons(users))
		  .catch((error) => console.error('Fetch error:', error));
	}, []);

	useEffect(() => {
		const newFilteredPersons = persons.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});
		setFilteredPersons(newFilteredPersons);
	}, [persons, searchField]);

	const onInputChange = (event) => {
		setInputValue(event.target.value.toLocaleLowerCase());
	};

	const onButtonClick = () => {
		setSearchField(inputValue);
		const newFilteredPersons = persons.filter((monster) => {
		return monster.name.toLocaleLowerCase().includes(inputValue);
		});
		setFilteredPersons(newFilteredPersons);
	};

  return (
    <Layout>
      <div className="search">
        <h3 className="app-title">Explore Collectibles</h3>
		<SearchBox
          className="search-box"
          onInputChange={onInputChange}
          onButtonClick={onButtonClick}
          placeholder="Type Your Keywords..."
        />
        {filteredPersons.length > 0 ? (
			<CardList persons={filteredPersons} />
		) : (
			<p>NOT FOUND...</p>
		)}
      </div>
    </Layout>
  )
}
