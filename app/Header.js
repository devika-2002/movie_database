"use client"
import React, { useState } from 'react';

function Header() {
    const [input, setInput] = useState('');

    const handleSearch = () => {
        const apiKey ='809f0cff';
        fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${apiKey}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div className="container">
            <h1>Movies Search</h1>
            <div className="search-container">
                <div className='search-box'>
                    <img className="img-search" src="Frame.png" alt="Search" />
                    <input 
                        type="text" 
                        placeholder='Search a movie'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className='Button' type='submit' onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
