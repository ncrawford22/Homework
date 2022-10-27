export default function JokeSearchResults({ joke }) {
    return (
        <div>
            
            {joke.map((result, i) => {
                return (
                    <div key={i}>
                        <ul>
                            <li>
                                {result.joke}
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}