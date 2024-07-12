import React from 'react'

function Header() {
  return (
    <div className="container">
        <h1>Movies Search </h1>
        <div className="search-container">
            <div className='search-box'>
                <img className="img-search" src="Frame.png" alt="Search" />
                <input type="text" placeholder='Search a movie'/>
                <button className='Button' type='submit'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Header
