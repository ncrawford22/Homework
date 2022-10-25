import { useState } from "react";

export default function SearchForDadJoke({ getRandomDadJoke }) {

    let [jokeTerm, setJokeTerm] = useState('');

    const handleChange = (evt) => {
        setJokeTerm(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        getRandomDadJoke(jokeTerm)
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