/* eslint-disable react/prop-types */
import React from 'react'
import './Card.scss'

export function Card({ albumTitle = 'Album Title', albumArtist = 'Artist', albumRating = 0, albumCover }) {


    return (
        <section className="card" style={{ backgroundImage: `url(${albumCover})` }}>
            <p className='card__album-title'>{albumTitle}</p>
            <p className='card__album-artist'>{albumArtist}</p>
            <p className='card__album-rating'>{albumRating}</p>

        </section>
    )
}
