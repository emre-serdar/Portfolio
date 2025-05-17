import React, { useState } from 'react';
import { Search, SquareCode, FileType, FileJson, FileCode, Wind, Palette, Atom, Server, Layout, Zap, Database, GitGraph, CloudCog, Shield, FlaskRound as Flask, Flame, GitBranch, Container, Cloud, Workflow, TestTube, Package, Network, GitPullRequest, Figma, PenTool, Image, Users, Code } from 'lucide-react';

const iconMap = {
  SquareCode,
  FileType,
  FileJson,
  FileCode,
  Wind,
  Palette,
  Atom,
  Server,
  Layout,
  Zap,
  Database,
  GitGraph,
  CloudCog,
  Shield,
  Flask,
  Flame,
  GitBranch,
  Container,
  Cloud,
  Workflow,
  TestTube,
  Package,
  Network,
  GitPullRequest,
  Figma,
  PenTool,
  Image,
  Users,
  Code
};

const skills = {
  frontend: [
    { name: 'React', icon: 'SquareCode', color: '#61DAFB' },
    { name: 'Next.js', icon: 'Server', color: '#000000' },
    { name: 'TypeScript', icon: 'FileType', color: '#3178C6' },
    { name: 'JavaScript', icon: 'FileJson', color: '#F7DF1E' },
    { name: 'HTML/CSS', icon: 'FileCode', color: '#E34F26' },
    { name: 'Tailwind', icon: 'Wind', color: '#38B2AC' },
    { name: 'SCSS / SASS', icon: 'Palette', color: '#CC6699' },
    { name: 'Redux', icon: 'Atom', color: '#764ABC' },
  ],
  backend: [
    { name: 'Node.js', icon: 'Server', color: '#339933' },
    { name: 'Express', icon: 'Network', color: '#000000' },
    { name: 'PostgreSQL', icon: 'Database', color: '#336791' },
    { name: 'MongoDB', icon: 'Database', color: '#47A248' },
    { name: 'Redis', icon: 'CloudCog', color: '#DC382D' },
    { name: 'REST APIs', icon: 'CloudCog', color: '#FF6C37' },
    { name: 'Django', icon: 'Shield', color: '#092E20' },
    { name: 'Flask', icon: 'Flask', color: '#000000' },
  ],
  tools: [
    { name: 'Git', icon: 'GitBranch', color: '#F05032' },
    { name: 'Docker', icon: 'Container', color: '#2496ED' },
    { name: 'BullMQ', icon: 'GitGraph', color: '#FF4141' },
    { name: 'CI/CD', icon: 'Workflow', color: '#4AC5DB' },
    { name: 'GitHub Actions', icon: 'GitPullRequest', color: '#2088FF' },
    { name: 'Nginx', icon: 'Server', color: '#009639' },
    { name: 'AWS', icon: 'Cloud', color: '#FF9900' },
    { name: 'Jest / Testing', icon: 'TestTube', color: '#C21325' },
  ],
  design: [
    { name: 'Figma', icon: 'Figma', color: '#F24E1E' },
    { name: 'UI Design', icon: 'Layout', color: '#0ACF83' },
    { name: 'UX Design', icon: 'Users', color: '#FF4785' },
  ],
};

const categories = [
  { id: 'all', name: 'All Skills' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'tools', name: 'Tools & DevOps' },
  { id: 'design', name: 'Design' },
];

const Skills = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allSkills = Object.values(skills).flat();
  const skillsToShow = currentCategory === 'all' ? allSkills : skills[currentCategory];
  const filteredSkills = skillsToShow.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-description">Here are some of the key skills and technologies I have experience with:</p>

        <div className="skills-header">
          <div className="skills-categories-container">
            <div className="skills-categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCurrentCategory(cat.id)}
                  className={`category-button ${currentCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              className="search-input"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => {
            const Icon = iconMap[skill.icon] || Code;
            return (
              <div className="skill-card" key={`${skill.name}-${idx}`}>
                <div className="skill-icon-wrapper">
                  <div className="skill-icon-container" style={{ backgroundColor: `${skill.color}20` }}>
                    <Icon size={32} color={skill.color} />
                  </div>
                </div>
                <div className="skill-content">
                  <div className="skill-name">{skill.name}</div>
                </div>
              </div>
            );
          })}
          {filteredSkills.length === 0 && (
            <div className="no-skills-found">No skills found matching "{searchTerm}"</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
