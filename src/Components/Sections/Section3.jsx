import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import WebDev from '../Images/WebDev.svg'
import WiP from '../Images/WiP.svg'


const CardComponent = {
    backgroundColor: "#5b5b5b", 
    boxShadow: "0 0 8px 0 #BDBBB0",
    border: "1px",
    maxWidth: "300px",
    height: "375px",
    padding: "24px",
    color: "white",
}

const Section3 = () => {
    return (
        <section className='secondary-bg'>
            <Container id="services" className='px-20 py-20'>
                <h2 className='display-5 text-white text-start fw-semibold mb-12 ps-6 border-start border-2'>Services</h2>
                <Row className='justify-content-center align-items-center column-gap-12'>
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <Card className='text-center mb-12 hover-transform' style={CardComponent}>
                            <Card.Img variant="top" src={WiP} alt='Work in progress'/>
                            <Card.Body>
                                <Card.Title>Work in Progress</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <Card className='text-center mb-12 hover-transform' style={CardComponent}>
                            <Card.Img variant="top" src={WebDev} alt='Monitor Web development'/>
                            <Card.Body>
                                <Card.Title>Front-end Development</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <Card className='text-center mb-12 hover-transform' style={CardComponent}>
                            <Card.Img variant="top" src={WiP} alt='Work in progress'/>
                            <Card.Body>
                                <Card.Title>Work in Progress</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section3