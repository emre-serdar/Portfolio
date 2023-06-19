import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "assets/img/color-sharp.png"
import skillsData from 'skillsData';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here are some of the key skills and technologies I have experience with:</p>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}  className="owl-carousel owl-theme skill-slider">
                            {skillsData.map((skill, index) => (
                              <div key={index} className="item">
                                <img src={skill.logo} alt="Skill Logo" />
                                <h5>{skill.title}</h5>
                              </div>
                ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
