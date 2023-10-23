
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
    return (
        <Container fluid>
            <Navbar className="fixed-top p-6 header-bg" data-bs-theme="dark" expand="lg">
                {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Item>
                                <Nav.Link className='fs-5 text-white px-6' href="#home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='fs-5 text-white px-4' href="#about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='fs-5 text-white px-4' href="#services">Services</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='fs-5 text-white px-4' href="#contact">Contacts</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default BasicExample;