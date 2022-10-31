import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
                    <div className="cards">
                            <Card style={{ width: '18rem', boxShadow: '3px 3px 7px #ff8c00', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <Card.Body>
                                    <Card.Title>Yo Mama is..</Card.Title>
                                    <Card.Text>
                                    {yMamaJoke}
                                    </Card.Text>
                                    <Button className="questionBtn" onClick={handleGetMamaJoke}>Get Random Yo Mama Joke</Button>
                                </Card.Body>
                            </Card>
                        </div>
                </div>}
           {isLoading && <h1>Yo Mama Joke Incoming......</h1>}
        </div>
    )

    
}