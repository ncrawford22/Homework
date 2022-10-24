import { useEffect, useState } from "react"
import StarshipCard from "../components/StarShipCard";

export default function SwAPI() {

    const [starships, setStarships] = useState([]);
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            const getStarShips = async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/starships/");
                    const data = await response.json();

                    setStarships(data.results);
                    setIsPending(false);
                } catch (err) {
                    console.log("Error.. No starship data was retrieved!");
                    console.log(err);
                }
            }
            getStarShips();
        }, 1000)
    }, []);

    return (
        <div className="shipRow">

            {isPending && <div>Loading Starships...</div>}

            {starships && starships.map((s, i) => {
                return (<StarshipCard key={i} starship={s} />)
            })}
        </div>
    );
}