import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facebook from '../Images/facebook.svg'
import instagram from '../Images/instagram.svg'
import twitterx from '../Images/twitterx.svg'
import linkedin from '../Images/linkedin.svg'
import { Link } from 'react-router-dom';

const SocialMediaIcons = () => {
    return (
        <section className='primary-bg'>
            <Container className='p-6'>
                <p className='text-white text-center mb-6'>Copyright © 2023 All rights reserved</p>
                <Row className='justify-content-center text-center'>
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <div className="icon-container">
                            <Link target="_blank" to='https://www.facebook.com/'><img src={facebook} alt="facebook" /></Link>
                        </div>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <div className="icon-container">
                            <Link target="_blank" to='https://www.instagram.com/'><img src={instagram} alt="instagram" /></Link>
                        </div>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <div className="icon-container">
                            <Link target="_blank" to='https://twitter.com/?lang=en'><img src={twitterx} alt="twitterx" /></Link>
                        </div>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <div className="icon-container">
                            <Link target="_blank" to='https://www.linkedin.com/in/henri-marcial-555000270/'><img src={linkedin} alt="linkedin" /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SocialMediaIcons;