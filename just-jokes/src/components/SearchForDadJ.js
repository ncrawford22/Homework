import { useState } from "react";

export default function SearchForDadJoke() {

    let [jokeTerm, setJokeTerm] = useState('');

    const handleChange = (evt) => {
        setJokeTerm(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

    }
}