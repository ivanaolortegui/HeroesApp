import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({
    id,
    alter_ego,
    characters,
    first_appearance,
    superhero
}) => {
    return (
        <div className="card" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        <p className="card-text">{characters}</p>
                        <p>
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                    </div>
                    <Link to={ `hero/${id}` }>
                        Más
                </Link>
                </div>

            </div>
        </div>
    )
}

export default HeroCard
