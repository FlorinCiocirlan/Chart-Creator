import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import pieImg from '../pie.png';
import barImg from '../bar.png';
import lineImg from '../line.png';

export default function Docs() {
    return (
        <Container className="centered-container text-center">
            <h1 className="main-title">Types of charts</h1>
            <hr></hr>
        <Row>
            <Col xs={{ order: 'last' }}>
                <Card style={{ width: '18rem' }} className="doc-container">
                    <Card.Img variant="top" src={pieImg} />
                    <Card.Body >
                        <Card.Title className="card-title">Pie Chart</Card.Title>
                        <hr></hr>
                        <Card.Text>
                        Pie charts are good for showing simple proportional part-to-whole information.
                         Chart Creator lets you create single series pie charts, where each series is made of multiple slices.
                         <br/><br/>
                         Values are displayed relative to each other: so a chart with values 1, 2, 3 
                         will look the same as a chart with values 100, 200, 300.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col xs>
                <Card style={{ width: '18rem' }} className="doc-container">
                    <Card.Img variant="top" src={barImg} />
                    <Card.Body >
                        <Card.Title className="card-title">Bar Chart</Card.Title>
                        <hr></hr>
                        <Card.Text>
                        Bar charts are good for side-by-side comparison and spotting trends in a 
                        small number of discrete data points. They're a good alternative to line 
                        charts when you have only a few data points in a series.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={{ order: 'first' }}>
                <Card style={{ width: '18rem' }} className="doc-container">
                    <Card.Img variant="top" src={lineImg} />
                    <Card.Body >
                        <Card.Title className="card-title">Line Chart</Card.Title>
                        <hr></hr>
                        <Card.Text>
                        Chart Creator lets you create line charts where data points are spaced evenly along the X-axis.
                        <br/><br/>
                        Take care not to overestimate the number of data points required for your line chart.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
    )
}
