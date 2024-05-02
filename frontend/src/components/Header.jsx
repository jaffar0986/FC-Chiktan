import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUser} from 'react-icons/fa'
import { MdContactPhone } from "react-icons/md"
import { IoIosHome } from "react-icons/io";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import logo from '../assets/logo.png';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
        <Navbar style={{ backgroundColor: '#F8F8FF' }}  expand='md' collapseOnSelect>
            <Container >
                <LinkContainer to='/'>
                <Navbar.Brand style={{ color: 'black' }}>
                    <img src={logo} alt="FC Chiktan" width="80px" height="80px" /> 
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <LinkContainer to='/'>
                          <Nav.Link style={{ color: 'black' }}>
                        <IoIosHome /> Home
                          </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                          <Nav.Link style={{ color: 'black' }}>
                            <MdOutlineRoundaboutLeft /> About
                          </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/team'>
                        <Nav.Link style={{ color: 'black' }}>
                        <RiTeamFill /> Team
                        </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contact'>
                        <Nav.Link style={{ color: 'black' }} >
                            <MdContactPhone /> Contact Us
                        </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                        <Nav.Link style={{ color: 'black' }}>
                            <FaUser /> Sign In
                        </Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header