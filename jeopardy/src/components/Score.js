import { useState } from "react";

export default function Score({question}) {

let questionData = question[0]

let [score, setScore] = useState(0);

const handleDecrement = (e) => {
    setScore(score - questionData.value)
    e.preventDefault()
}

const handleIncrement = (e) => {
    setScore(score + questionData.value)
    e.preventDefault()
}

const handleReset = (e) => {
    setScore(score - score)
    e.preventDefault()
}

    return(
        <div className="container">
            <h2 className="score">Score: <span>${score}</span></h2>
            <form className="container">
                <button className="decrease" onClick={handleDecrement}>Decrease</button>
                <button className="increase" onClick={handleIncrement}>Increase</button>
                <button className="reset" onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
}