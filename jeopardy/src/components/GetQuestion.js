export default function GetQuestion({ getQuestion }) {
    
    const handleGetQuestion = (e) => {
        e.preventDefault()
        getQuestion()
    }

    return (
        <div className="container">
            <h2 className="playBtn">Let's Play!</h2>
            <button className="questionBtn" onClick={handleGetQuestion}>Get Question</button>
        </div>
    )
}