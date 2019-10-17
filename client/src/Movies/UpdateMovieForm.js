import React, { useState } from 'react';
import axios from 'axios';

const initialMovie = {
    title: '',
    director: '',
    metascore: '',
    stars: []
}

const UpdateMovieForm = props => {
    const [movie, setMovie] = useState(initialMovie);

    

    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={undefined}>
                <input 
                    type='text'
                    name='title'
                    onChange={undefined}
                    placeholder="Title"
                    // value={movie.title}
                />
                <input 
                    type='text'
                    name='director'
                    onChange={undefined}
                    placeholder="Director"
                    // value={movie.title}
                />
                <input 
                    type='text'
                    name='metascore'
                    onChange={undefined}
                    placeholder="Score"
                    // value={movie.title}
                />
                <input 
                    type='text'
                    name='stars'
                    onChange={undefined}
                    placeholder="Stars"
                    // value={movie.title}
                />
            </form>
        </div>
    )
}