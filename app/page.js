"use client"

import React, { useState } from 'react';
import "./globals.css";

import Header from './Header';
import Movie from './Movie';

function Page() {
    const [movies, setMovies] = useState([]);

    return (
        <div>
            <Header setMovies={setMovies} />
            <Movie movies={movies} />
        </div>
    );
}

export default Page;
