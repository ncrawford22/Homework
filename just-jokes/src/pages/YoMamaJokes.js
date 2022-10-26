import { useState } from "react";
import GetMamaJoke from "../components/GetMamaJoke";
import NavBar from "../components/NavBar";

export default function YoMamaJokes() {

    const options = {
        headers: {
            'X-RapidAPI-Key': 'cb2042e6c1mshfc61f45600cef7fp1b7156jsn531fca9c0d8f',
		    'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
        }
    };

    const yApi = "https://humor-jokes-and-memes.p.rapidapi.com/jokes/random?max-length=200&include-tags=one_liner&min-rating=7&exclude-tags=nsfw&keywords=yo_mama";

    const [yMamaJoke, setYmamaJoke] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getYmamaJoke = async () => {
        try {
            const response = await fetch(yApi, options);
            const data = await response.json()
            setYmamaJoke(data.joke)
            setIsLoading(false)
            console.log(data.joke)
        } catch(err) {
            console.log(err)
        }
    }

    
    return (
        <div>
            <NavBar />
            <GetMamaJoke getYmamaJoke={getYmamaJoke} yMamaJoke={yMamaJoke} isLoading={isLoading} setIsLoading={setIsLoading}/>
        </div>
    )
}