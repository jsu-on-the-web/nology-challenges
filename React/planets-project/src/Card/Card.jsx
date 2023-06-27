/* eslint-disable react/prop-types */
import React from 'react'
import data from '../data.json'

export function Card({ planetName = 'Planet Name', imageSrc = '', distanceFromTheSun = 0, diameterInKm = 0, numberOfMoons = 0, lengthOfYear = 0 }) {

    return (
        <div className='planet-card'>
            <img src={imageSrc} alt="" />
            <h3 className='planet-card__name'>{planetName}</h3>
            <p className='planet-card__info'><span className='planet-card__info--title-emphasis'>Distance From The Sun: </span>{distanceFromTheSun} km</p>
            <p className='planet-card__info'><span className='planet-card__info--title-emphasis'>Diameter In KM: </span>{diameterInKm}</p>
            <p className='planet-card__info'><span className='planet-card__info--title-emphasis'>Number Of Moons: </span>{numberOfMoons}🌛</p>
            <p className='planet-card__info'><span className='planet-card__info--title-emphasis'>Length of Year: </span>{lengthOfYear} Earth Years</p>
        </div>
    )
}
