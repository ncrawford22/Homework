import { useEffect, useState } from "react";

export default function RandomDadJokes() {

    const api = "https://icanhazdadjoke.com/";

    const options = {
        headers: {
            'Accept': "application/json",
        }
    };

    const [rDadJoke, setRDadJoke] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
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
            getRandomDadJoke();
        }, 5000)
    }, [])

    return (
        <>
            {isLoading && <h1>Loading Random Dad Joke...</h1>}
            {!isLoading && rDadJoke && 
                <div>
                    <h1>Random Dad Joke</h1>
                    <p>{rDadJoke}</p>
                </div>}
        </>
    )
}