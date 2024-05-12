import { Container, Row, Col } from "react-bootstrap";
import React from 'react'
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import '../style.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer style={{ backgroundColor: '#F8F8FF', paddingTop: '10px', paddingBottom: '10px' }}>
            <Container  >
                <Row className="align-items-center">
                    <Col xs={4} >
                        <Link to="/insta" className="footer-link"><BiLogoInstagramAlt /></Link>
                    </Col>
                    <Col xs={6} >
                        FC Chiktan &copy; {currentYear}
                    </Col>
                    <Col xs={2} >
                        <Link to="/policy" className="footer-link">Privacy Policy | Contact Us</Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
