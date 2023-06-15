import React from 'react';
import { Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


export const ProjectCard = ({ title, description, imgUrl, techstack, githubURL, websiteURL }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
            <span>{description}</span>
            <h6>{techstack}</h6>
            <div className="proj-links">
              {/* GitHub link */}
              {githubURL && (
                <a href={githubURL} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="github-icon" />
                  GitHub
                </a>
              )}
              {/* Live Website link */}
              {websiteURL && (
                <a href={websiteURL} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="live-icon" />
                  Live Website
                </a>
              )}
            </div>
        </div>
      </div>
    </Col>
  )
}
