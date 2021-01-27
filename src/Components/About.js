import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Docs() {
    return (
        <Container className="centered-container">
            <h1>About</h1><hr/>
            <h4>We are a team of developers and Codecool students called "The Guys"
                who created this application using React and Image-Charts API.</h4>
            <br/>
            <h4>This app lets you create custom charts, you can preview the changes made in real time and save the results.</h4>
            <br/><br/><br/>
            <h2>Our Mission</h2><hr/>
            <h3><b>To help users create the desired chart very fast and easy.</b></h3>
            <br/><br/><br/>
            <p>For GitHub link click <a href="https://github.com/FlorinCiocirlan/chart-creator">here</a></p>
        </Container>
    )
}