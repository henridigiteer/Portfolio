import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facebook from '../Components/Images/facebook.svg'
import instagram from '../Components/Images/instagram.svg'
import twitterx from '../Components/Images/twitterx.svg'
import linkedin from '../Components/Images/linkedin.svg'
import { Link } from 'react-router-dom';

const SocialMediaIcons = () => {
    return (
        <section className='primary-bg'>
            <Container className='py-6 px-6'>
                <p className='text-white text-center mb-6'>Copyright © 2023 All rights reserved</p>
                <Row className='justify-content-center text-center'>
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <Link target="_blank" to='https://www.facebook.com/'>
                            <div className="icon-container">
                                <img src={facebook} alt="facebook" />
                            </div>
                        </Link>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <Link target="_blank" to='https://www.instagram.com/'>
                            <div className="icon-container">
                                <img src={instagram} alt="instagram" />
                            </div>
                        </Link>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <Link target="_blank" to='https://twitter.com/?lang=en'>
                            <div className="icon-container">
                                <img src={twitterx} alt="twitterx" />
                            </div>
                        </Link>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <Link target="_blank" to='https://www.linkedin.com/in/henri-marcial-555000270/'>
                            <div className="icon-container">
                                <img src={linkedin} alt="linkedin" />
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SocialMediaIcons;