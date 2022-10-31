import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function JokeSearchResults({ joke }) {
    return (
        <Container>
            <Row lg={"auto"} md={"auto"} xs={"auto"}>
            {joke.map((result, i) => {
                return (
                    <div key={i}>
                        <Col lg={"auto"} md={2} sm={"auto"} >
                            <Card style={{ width: '18rem', boxShadow: '3px 3px 7px #ff8c00', display: 'flex', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center', flexWrap: 'wrap', top: "50px", bottom: "25px"}}>{result.joke}</Card>
                        </Col>
                    </div>
                )
            })}
        </Row>
        </Container>
    )
}