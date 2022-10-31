import { useState } from "react";
import JokeSearchResults from "./JokeSearchResults";
import NavBar from "./NavBar";

export default function SearchForJokes() {

    let [searchTerm, setSearchTerm] = useState("");
    let [joke, setJoke] = useState([])

    const options = {
        headers: {
            'Accept': "application/json",
        }
    };

    const searchForJoke = async (searchTerm) => {
        try{
            const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, options)
            const data = await response.json();
            setJoke(data.results)
            } catch(err) {
            console.log(err)
        }
    }


    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        searchForJoke(searchTerm)
        console.log(searchTerm)
    }

    return (
        <div>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search for Jokes:</label>
                <br />
                <input 
                    id="search"
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <input type="submit" value="submit" />
            </form>

            <JokeSearchResults joke={joke}/>
        </div>
    )
}