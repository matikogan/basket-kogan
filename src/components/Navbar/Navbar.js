import React from 'react'
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom' 
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'





function NavMenu() {


    return (
        <header>
            <Navbar bg="light" variant="light" className='navbar'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="../logo1.png"
                            className="d-inline-block align-top logo-container"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">
                            <Link to={'/'}>Home</Link>
                        </Nav.Link>
                        
                        <DropdownButton variant="outline-secondary" title="Produts" id="input-group-dropdown-1">
                            <Dropdown.Item>
                                <Link to={'/regular-season'}>Regular Season 2022</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={'/all-star'}>All-Star Edition</Link>
                            </Dropdown.Item>
                        </DropdownButton>
                        <Nav.Link>
                            <Link to={'/about-us'}>About Us</Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}


export default NavMenu

     