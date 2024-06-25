import React from 'react';
import './search-box.styles.scss';
import SearchIcon from '../../../assets/image/icon/search_button.png';

const SearchBox = ({ className, placeholder, onInputChange, onButtonClick }) => {
	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
		  onButtonClick();
		}
	  };
  return (
    <div className={`search-container ${className}`}>
      <input
        className="search-input"
        type="search"
        placeholder={placeholder}
        onChange={onInputChange}
		onKeyDown={handleKeyDown}
      />
      <button className="search-button" onClick={onButtonClick}>
        <img src={SearchIcon} alt="Search" />
      </button>
    </div>
  );
}

export default SearchBox;
