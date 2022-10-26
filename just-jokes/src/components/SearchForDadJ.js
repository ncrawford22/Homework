import { useState } from "react";

export default function SearchForDadJoke() {

    const [jokeTerm, setJokeTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    const searchApi = `https://icanhazdadjoke.com/search?term=${jokeTerm}`;

    const options = {
        headers: {
            'Accept': "application/json",
        }
    };

    const searchRandomJoke = async (jokeTerm) => {
        try{
            const response = await fetch(searchApi, options)
            const data = await response.json();
                setJokeTerm(data.joke)
                setIsLoading(false)
                console.log(data.joke)
            } catch(err) {
            console.log(err)
        }
    }

    const handleChange = (evt) => {
        setJokeTerm(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        searchRandomJoke(jokeTerm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search</label>
                <br />
                <input 
                    id="search"
                    type="text"
                    value={jokeTerm}
                    onChange={handleChange}
                />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}