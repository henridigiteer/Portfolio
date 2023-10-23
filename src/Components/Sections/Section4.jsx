import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

const Section4 = () => {
    return (
        <section className='primary-bg'>
            <Container id="contact" className='px-20 py-20'>
                <Row className='column-gap-12'>
                    <h2 className='display-5 text-white text-center fw-semibold mb-12'>Get in Touch</h2>
                    <Col lg="6" className='mb-md-12 mb-sm-12'>
                        <h3 className='text-white text-start ps-6 border-start border-2 mb-6'>Feedback</h3>
                        <Form>
                            <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                                <Form.Label className='text-white fw-semibold'>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='text-white fw-semibold'>Help me build this website better. Give your thoughts!</Form.Label>
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                            <Button type="submit" variant='secondary'>Submit</Button>
                        </Form>
                    </Col>
                    <Col lg="5" className='text-start'>
                        <h3 className='text-white ps-6 border-start border-2 mb-6'>Contact Details</h3>
                        <div>
                            <p className='text-success fw-bold'>EMAIL</p>
                            <p className='text-white fw-semibold'>henri.digiteeracademy@gmail.com</p>
                        </div>
                        <div>
                            <p className='text-success fw-bold'>PHONE</p>
                            <p className='text-white mb-0 fw-semibold'>+63 928 438 9938</p>
                            <p className='text-white fw-semibold'>+63 966 844 6855</p>
                        </div>
                        <div>
                            <p className='text-success fw-bold'>ADDRESS</p>
                            <p className='text-white fw-semibold'>Blk 3 Lot 8 Filinvest Homesite 1, Bagong Silang, San Pedro, Laguna</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section4