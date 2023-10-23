import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';  
import Henri from '../Images/Henri.webp'
import Html from '../Images/Html.svg'
import Css from '../Images/Css.svg'
import Rails from '../Images/Rails.svg'
import Reactjs from '../Images/Reactjs.svg'
import Tailwind from '../Images/Tailwind.svg'
import Bootstrap from '../Images/Bootstrap.svg'
import Sass from '../Images/Sass.svg'
import Java from '../Images/Java.svg'

const Section2 = () => {
    return (
        <section className='secondary-bg'>
            <Container id="about" className='p-20'>
                <Row className='text-center align-items-center column-gap-12'>
                    {/*COLUMN 1*/}
                    <Col md={12} lg={5}>
                        <img src={Henri} className='img-fluid rounded-circle mb-12' alt="Henri Marcial"/>
                    </Col>
                    {/*COLUMN 2*/}
                    <Col md={12} lg={6} className='tab-height'>
                        <h2 className='display-5 text-white text-start fw-semibold mb-6 ps-6 border-start border-2'>About me </h2>
                        <Tabs
                            defaultActiveKey="Profile"
                            id="about-me-tabs"
                            className="mb-3 pt-6 border-3"
                            data-bs-theme="dark"
                            justify
                            height
                        >
                            {/*TAB 1*/}
                            <Tab eventKey="Profile" tabClassName='text-light fw-semibold' title="Profile">
                                <Row className='tab-height text-start align-items-center'>
                                    <Col>
                                        <p className='fs-5 mb-6 text-white'>Name: Henri Elamparo Marcial</p>
                                        <p className='fs-5 mb-6 text-white'>Age: 23 years old</p>
                                        <p className='fs-5 mb-6 text-white'>Address: Blk 3 Lot 8 Filinvest Homesite 1, Bagong Silang, San Pedro, Laguna</p>
                                    </Col>
                                </Row>
                            </Tab>
                            {/*TAB 2*/}
                            <Tab eventKey="Education" tabClassName='text-light fw-semibold' title="Education">
                                <Row className='tab-height text-start align-items-center'>
                                    <Col>
                                        <h3 className='mb-6 text-white'>Bachelor of Science in Computer Engineering</h3>
                                        <p className='mb-12 text-white'>2018 - 2023</p>
                                        <h5 className='text-white'>Cavite State University - Carmona Campus</h5>
                                    </Col>
                                </Row>
                            </Tab>
                            {/*TAB 3*/}
                            <Tab eventKey="Skillset" tabClassName='text-light fw-semibold' title="Skillset">
                                <div className='tab-height__skill text-start align-items-center'>
                                    <Row>
                                        <SkillItem image={Html} alt="HTML" text="HTML (HyperText Markup Language)" />
                                        <SkillItem image={Css} alt="CSS" text="CSS (Cascading Style Sheets)" />
                                        <SkillItem image={Rails} alt="Rails" text="Ruby on Rails" />
                                        <SkillItem image={Reactjs} alt="Reactjs" text="React.js" />
                                        <SkillItem image={Tailwind} alt="Tailwind" text="Tailwind CSS" />
                                        <SkillItem image={Bootstrap} alt="Bootstrap" text="Bootstrap" />
                                        <SkillItem image={Sass} alt="Sass" text="Sass" />
                                        <SkillItem image={Java} alt="Java" text="Java" />
                                    </Row>
                                </div>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

const SkillItem = ({ image, alt, text }) => {
    return (
        <Col lg={6} md={6} sm={6}>
            <div className="d-flex align-items-center skill-item">
            <img src={image} className='img-fluid py-1 pe-6 tab-icon' alt={alt} />
            <p className='text-white mb-0 text-start'>{text}</p>
            </div>
        </Col>
    );  
};
export default Section2