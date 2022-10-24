import { useState } from "react";

export default function StarshipCard({ starship }) {

    let [displayInfo, setDisplayInfo] = useState(true);

    const handleDisplayInfo = () => {
        setDisplayInfo(!displayInfo)
    }

    return (
        <div className="starshipCol">
            <div className="card">
                <h2>{starship.name}</h2>
                <button className="sw-button"><img className="sw-img" src="sw-img.png" alt="swimg" onClick={handleDisplayInfo} /></button>
                <div hidden={displayInfo}>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Model: {starship.model}</p>
                    <p>Class: {starship.starship_class}</p>
                    <p>Passengers: {starship.passengers}</p>
                    <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
                    <p>Cost: {starship.cost_in_credits}</p>
                </div>
            </div>
        </div>
    )
}