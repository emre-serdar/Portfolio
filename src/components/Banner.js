import React from 'react';
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "assets/img/header-img.json";
import profileImg from "assets/img/profile-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import lottie from "lottie-web";



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer", "Software Engineer"];
  const period = 700;
  const headerRef = useRef(null);
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: headerRef.current,
      animationData: headerImg,
      renderer: "svg", 
      loop: true,
      autoplay: true
    });
  
    return () => {
      anim.destroy(); // Cleanup when the component unmounts
    };
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setDelta(100);

      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <img src={profileImg} alt="Profile Img" className="profile-img no-animation"/>
                <h1>{`Hi! I'm Emre,`} <span className="txt-rotate" data-period="1000" data-rotate='[ "Front-End Developer", "Software Engineer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Full Stack Software Engineer specializing 
                    in web development with extensive experience in both front-end 
                    and back-end technologies. Proficient in JavaScript, Python, and 
                    modern web frameworks such as React.js, Node.js, and Next.js. 
                    Skilled in UI development, REST API design, and implementing 
                    CI/CD pipelines using GitHub Actions. Strong foundation in data structures and algorithms, 
                    as well as design patterns. Experienced in the Software Development Life Cycle (SDLC) and 
                    adept at utilizing Agile methodologies. Seeking a challenging role in a dynamic and 
                    collaborative team environment to leverage my skills and expertise in building innovative 
                    and scalable web applications.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div ref={headerRef} className="header-img"/></div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
