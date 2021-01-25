import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import pieImg from '../pie.png';
import barImg from '../bar.png';
import lineImg from '../line.png';

export default function Docs() {
    return (
        <Container className="centered-container">
            <h1>Types of charts</h1>
            <hr></hr>
        <Row>
            <Col xs={{ order: 'last' }}>
                <Card style={{ width: '18rem' }} className="doc-container">
                    <Card.Img variant="top" src={pieImg} />
                    <Card.Body >
                        <Card.Title>Pie Chart</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col xs>
                <Card style={{ width: '18rem' }} className="doc-container">
                    <Card.Img variant="top" src={barImg} />
                    <Card.Body >
                        <Card.Title>Bar Chart</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={{ order: 'first' }}>
                <Card style={{ width: '18rem' }} className="doc-container">
                    <Card.Img variant="top" src={lineImg} />
                    <Card.Body >
                        <Card.Title>Line Chart</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
    )
}
