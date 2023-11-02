import React from 'react'
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

const testAnimation = {
    initial:{opacity:0, x:100},
    animate:{opacity:1, x:0},
}

const Section3 = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    return (
        <section className='secondary-bg'>
            <Container id="services" className='px-20 py-20' ref={ref}>
                <motion.h2 className='display-5 text-white text-start fw-semibold mb-12 ps-6 border-start border-2'
                variants={testAnimation}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ type: 'tween', delay: 0.1 }}
                viewport={{ once: true }}
                >Services</motion.h2>
                <motion.div
                variants={testAnimation}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ type: 'tween', delay: 0.3 }}
                viewport={{ once: true }}
                >
                    <Row className='justify-content-center align-items-center column-gap-12'>
                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <Card className='text-center mb-12 hover-transform' style={CardComponent}>
                                <Card.Img variant="top" src={WiP} height={300} width={300} alt='Work in progress'/>
                                <Card.Body>
                                    <Card.Title>Work in Progress</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <Card className='text-center mb-12 hover-transform' style={CardComponent}>
                                <Card.Img variant="top" src={WebDev} height={300} width={300} alt='Monitor Web development'/>
                                <Card.Body>
                                    <Card.Title>Front-end Development</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <Card className='text-center mb-12 hover-transform' style={CardComponent}>
                                <Card.Img variant="top" src={WiP} height={300} width={300} alt='Work in progress'/>
                                <Card.Body>
                                    <Card.Title>Work in Progress</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </section>
    )
}

export default Section3