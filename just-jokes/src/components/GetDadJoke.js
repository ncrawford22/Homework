import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function GetDadJoke({ getRandomDadJoke, rDadJoke, isLoading, setIsLoading }) {
    
    const handleGetDadJoke = (e) => {
        e.preventDefault()
        getRandomDadJoke()
        setIsLoading(true)
    }

    return (
        <div className="container">
            {rDadJoke  &&
                <div className="container">
                    <h1>Random Dad Joke</h1>
                    <div className="cards">
                        <Card style={{ width: '18rem', boxShadow: '3px 3px 7px #ff8c00', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                        <Card.Body>
                            <Card.Title>Dad Joke of the Moment</Card.Title>
                            <Card.Text>
                                {rDadJoke}  
                            </Card.Text>
                            <Button variant="primary" className="questionBtn" onClick={handleGetDadJoke}>Get Random Dad Joke</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </div>}
            {isLoading && <h1>Dad Joke Incoming...</h1>}
        </div>
    )

    
}