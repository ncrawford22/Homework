import { useState } from "react";

export default function StarshipCard({ starship }) {

    let [displayInfo, setDisplayInfo] = useState(true);

    const handleDisplayInfo = () => {
        setDisplayInfo(!displayInfo)
    }

    return (
        <div className="container">
            <div className="starshipInfo">
                <h1>{starship.name}</h1>
                <button className="sw-button"><img className="sw-img" src="sw-img.png" alt="swimg" onClick={handleDisplayInfo} /></button>
                <div hidden={displayInfo}>
                    <p style={{fontWeight: "bold"}}>Manufacturer:</p>{starship.manufacturer}
                    <p style={{fontWeight: "bold"}}>Model:</p>{starship.model}
                    <p style={{fontWeight: "bold"}}>Class:</p>{starship.starship_class}
                    <p style={{fontWeight: "bold"}}>Passengers:</p>{starship.passengers}
                    <p style={{fontWeight: "bold"}}>Max Atmosphering Speed:</p>{starship.max_atmosphering_speed}
                    <p style={{fontWeight: "bold"}}>Cost:</p>{starship.cost_in_credits}
                </div>
            </div>
        </div>
    )
}