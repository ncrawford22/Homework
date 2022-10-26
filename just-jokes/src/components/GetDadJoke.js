
export default function GetDadJoke({ getRandomDadJoke, rDadJoke, isLoading, setIsLoading }) {
    
    const handleGetDadJoke = (e) => {
        e.preventDefault()
        getRandomDadJoke()
        setIsLoading(true)
    }

    return (
        <div className="container">
            {rDadJoke  &&
                <div>
                    <h1>Random Dad Joke</h1>
                    <button className="questionBtn" onClick={handleGetDadJoke}>Get Random Dad Joke</button>
                    <p>{rDadJoke}</p>
                </div>}
            {isLoading && <h1>Dad Joke Incoming...</h1>}
        </div>
    )

    
}