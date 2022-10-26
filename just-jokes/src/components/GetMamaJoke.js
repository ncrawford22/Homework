export default function GetMamaJoke({ getYmamaJoke, yMamaJoke, isLoading, setIsLoading }) {
    
    const handleGetMamaJoke = (e) => {
        e.preventDefault()
        getYmamaJoke()
        setIsLoading(true)
    }

    return (
        <div className="container">
            {yMamaJoke  &&
                <div>
                    <h1>Yo Mama Jokes</h1>
                    <button className="questionBtn" onClick={handleGetMamaJoke}>Get Random Yo Mama Joke</button>
                    <p>{yMamaJoke}</p>
                </div>}
           {isLoading && <h1>Yo Mama Is...</h1>}
        </div>
    )

    
}