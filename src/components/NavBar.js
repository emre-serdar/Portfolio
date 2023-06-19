import { useState, useEffect, React} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from 'assets/img/logo.svg';


import linkedinIcon from '../assets/img/nav-icon1.svg';
import githubIcon from '../assets/img/nav-icon2.svg';
import downloadIcon from '../assets/img/nav-icon3.svg';
import resumeFile from '../assets/resume.pdf';



export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand as={Link} to="/">
          <div className="brand-content">
            <img src={logo} alt="Logo" className="logo" />
            <h5 className="logo-header">Emre Serdar</h5>
          </div>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link as={HashLink} to="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link as={HashLink} to="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/emre-serdar/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                </a>
                <a href="https://github.com/emre-serdar" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub" className="icon" />
                </a>
                <a href={resumeFile} download>
                  <img src={downloadIcon} alt="Download" className="icon" />
                </a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
