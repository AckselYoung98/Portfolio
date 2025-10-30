import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from './mock';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-line">Olá, eu sou</span>
            </div>
            <h1 className="hero-title">{personalInfo.name}</h1>
            <p className="hero-subtitle">{personalInfo.title}</p>
            <p className="hero-tagline">{personalInfo.tagline}</p>
            
            <div className="hero-actions">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                Ver Projetos
              </button>
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Entrar em Contato
              </button>
            </div>

            <div className="hero-social">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-wrapper">
              <div className="image-glow"></div>
              <img 
                src={personalInfo.photo} 
                alt={personalInfo.name}
                className="profile-photo"
              />
              <div className="image-border"></div>
            </div>
          </div>
        </div>

        <button 
          className="scroll-indicator"
          onClick={() => scrollToSection('skills')}
          aria-label="Scroll to skills"
        >
          <ArrowDown size={24} className="scroll-icon" />
        </button>
      </div>
    </section>
  );
};

export default Hero;