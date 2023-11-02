import React from 'react'
import {motion} from 'framer-motion';
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Sample from '../PDF/Sample.pdf'

const Hero = () => {
    return (
        <section className='primary-bg'>
            <Container id="home" className='px-20 py-30'>
                <Row className='align-items-center text-center'>
                    <Col lg="12">
                        <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                        viewport={{ once: true }}
                        >
                            <h2 className='display-4 text-white pt-30 mb-4'>Hello, I'm</h2>
                            <h1 className='display-3 text-white fw-bold mb-6'>Henri Marcial</h1>
                            <h5 className='text-white mb-20'>Aspiring Front-end Developer</h5>
                            <Link to={Sample}
                            download="Sample-Document"
                            target="_blank"
                            rel="noopener noreferrer">
                                <Button variant="secondary" className='mb-20' size="lg">Résumé</Button>
                            </Link>
                        </motion.div>
                    </Col>
                </Row>
            </Container> 
        </section>
    )
}

export default Hero