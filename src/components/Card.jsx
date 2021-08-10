import React from 'react'

function Card({ results }) {
    return (
        <div className='card-div'>
            <img src={results.posterURLs[780]} alt="film-photos" className="film-photos" />
        </div>
    )
}

export default Card
