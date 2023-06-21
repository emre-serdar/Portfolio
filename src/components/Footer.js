import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from "assets/img/logo.svg";
import navIcon1 from "assets/img/nav-icon1.svg";
import navIcon2 from "assets/img/nav-icon2.svg";
import navIcon3 from "assets/img/nav-icon3.svg";
import resumeFile from 'assets/resume.pdf';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/emre-serdar/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/emre-serdar"><img src={navIcon2} alt="GitHub" /></a>
              <a href={resumeFile} download><img src={navIcon3} alt="Download" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
