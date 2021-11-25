import React from 'react';
import './Search.css';






const Search = ({handeleChange, searchTitle}) => {

    return (
        <div className="container-input" id="search">
            <i className="fas fa-search icon-search" ></i>
            <input className="input" type="text" placeholder="Search..." onChange={handeleChange} value={searchTitle} />
           
        </div>
    );
}

export default Search;