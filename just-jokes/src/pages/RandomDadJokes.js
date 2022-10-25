import { useEffect, useState } from "react";

export default function RandomDadJokes() {

    const api = "https://icanhazdadjoke.com/";

    const options = {
        headers: {
            'Accept': "application/json",
        }
    };

    const [rDadJoke, setRDadJoke] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const getRandomDadJoke = async () => {
                try{
                    const response = await fetch(api, options)
                    const data = await response.json();
                    setRDadJoke(data.joke)
                    console.log(data.joke)
                } catch(err) {
                    console.log(err)
                }
            }
            getRandomDadJoke();
        }, 1000)
    }, [])

    const loaded = () => {
        return (
            <div>
                <h1>Random Dad Joke</h1>
                <p>{rDadJoke}</p>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading Random Dad Joke...</h1>
    }

    return rDadJoke ? loaded() : loading();
}