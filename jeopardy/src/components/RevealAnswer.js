import { useState } from "react"

export default function RevealAnswer({question}) {

    let questionData = question[0];

    const [revealAnswer, setrevealAnswer] = useState(false)
    const [revealButton, setRevealButton] = useState('Click to Reveal Answer')
    
    const revealAnswr = () => {
        setrevealAnswer(revealAnswer => !revealAnswer)
        setRevealButton((currentState) => (currentState === 'Click to Hide Answer' ? 'Click to Reveal Answer' : 'Click to Hide Answer'))
    }

    return (
        <div className="container">
            <button className="reveal" onClick={revealAnswr}>{revealButton}</button>
                {revealAnswer && <h3 className="answer">Answer: <span>What is.. {questionData.answer.toString()}</span></h3>}
        </div>
    )
}