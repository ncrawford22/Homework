import { useState } from "react";
import GetDadJoke from "../components/GetDadJoke";
import NavBar from "../components/NavBar";

export default function RandomDadJokes() {

    const api = "https://icanhazdadjoke.com/";

    const options = {
        headers: {
            'Accept': "application/json",
        }
    };

    const [rDadJoke, setRDadJoke] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getRandomDadJoke = async () => {
        try{
            const response = await fetch(api, options)
            const data = await response.json();
                setRDadJoke(data.joke)
                setIsLoading(false)
                console.log(data.joke)
            } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            {rDadJoke && 
                <div>
                    <NavBar />
                    <GetDadJoke getRandomDadJoke={getRandomDadJoke} rDadJoke={rDadJoke} isLoading={isLoading} setIsLoading={setIsLoading}/>
                </div>}
        </>
    )
}