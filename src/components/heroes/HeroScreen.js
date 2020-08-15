import React from 'react'
import { useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {
    const { heroId } = useParams()
    const hero = getHeroById(heroId)
    const {
        alter_ego,
        characters,
        first_appearance,
        superhero,
        publisher
    } = hero
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroId}.jpg`} className="card-img" alt={superhero}/>
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-goup ">
                    <li className="list-group-item">
                        <b>Alter Ego:</b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance</b> {first_appearance}
                    </li>
                    <li className="list-group-item">
                        <b>characters:</b> {characters}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeroScreen
