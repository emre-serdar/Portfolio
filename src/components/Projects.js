import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "assets/img/project-img1.png";
import projImg2 from "assets/img/project-img2.png";
import projImg3 from "assets/img/project-img3.png";
import projImg4 from "assets/img/project-img4.png";
import projImg5 from "assets/img/project-img5.png";
import colorSharp2 from "assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "kopernik.org",
      description: "Satellite Image API to Send Images from RaspberryPi to WordPress.",
      imgUrl: projImg1,
      techstack: "Django REST Framework, VanillaJS, Image Modals with JavaScript, AWS EC2/RDS/S3",
      githubURL: "https://github.com/emre-serdar/kopernik",
      websiteURL: "https://www.kopernik.org/visitor-info/meteor-m2-archive/",
    },
    {
      title: "erdiserdar.com",
      description: "Blog App for a Client.",
      imgUrl: projImg2,
      techstack: "Next.js (SSG), React.js, SCSS, Tailwind.css, Swiper.js, GraphQL, Hygraph (Headless CMS), Vercel",
      githubURL: "https://github.com/emre-serdar/blog-web-app",
      websiteURL: "https://blog-web-app-erdiserdar.vercel.app/",
    },
    {
      title: "emreserdar.com",
      description: "Portfolio Website.",
      imgUrl: projImg3,
      techstack: "React.js, Animate.CSS, Node.js, Express.js",
      githubURL: "https://github.com/emre-serdar/Portfolio",
      websiteURL: "emreserdar.com",
    },
    {
      title: "Space Wars",
      description: "Custom Mobile Game App.",
      imgUrl: projImg4,
      techstack: "Android Studio, Java, libGDX, AndroidSDK",
      githubURL: "https://github.com/emre-serdar/CustomGameProject",
      websiteURL: "",
    },
    {
      title: "Analyzing Music Trends",
      description: "Correlating sentiment and popularity in music data.",
      imgUrl: projImg5,
      techstack: "Python, MongoDB, JavaScript/Node.js, Express.js, Chart.js",
      githubURL: "https://github.com/emre-serdar/Analyzing-Music-Trends-with-NoSQL",
      websiteURL: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Check out some of my recent projects below. Each project showcases my skills and expertise in different technologies and problem domains.</p>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='backgroundimage'></img>
    </section>
  )
}
