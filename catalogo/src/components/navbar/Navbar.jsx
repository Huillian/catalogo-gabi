import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './navbar.module.css'

function DesktopNavbar({ handleFilter }) {
    return (
        <div className={`${classes.Navbar}`}>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Nav className="me-auto gg">
                       <Nav.Link onClick={() => handleFilter('all')} >Home</Nav.Link>
                        <Nav.Link onClick={() => handleFilter('macbook')} >Macbook</Nav.Link>
                        <Nav.Link onClick={() => handleFilter('iphone')} >iPhone</Nav.Link>
                        <Nav.Link onClick={() => handleFilter('applewatch')} >Watch</Nav.Link>
                        <Nav.Link onClick={() => handleFilter('ipad')} >iPad</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default DesktopNavbar;
