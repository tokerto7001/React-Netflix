import React from 'react'
import Card from './Card'

function Cards({ movies }) {
    // console.log(movies)
    return (
        <div className='cards'>
            {movies.data?.results?.map((element) => (
                <Card results={element} />
            ))}

        </div>
    )
}

export default Cards
