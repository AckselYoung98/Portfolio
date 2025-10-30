import React from 'react';
import { projects } from './mock';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projetos</h2>
        <div className="projects-grid">
          {projects && projects.length > 0 ? (
            projects.map((p) => (
              <article key={p.id} className="project-card">
                <header className="project-header">
                  <h3 className="project-title">{p.title}</h3>
                  <span className="project-status">{p.status}</span>
                </header>
                <p className="project-description">{p.description}</p>
                {p.technologies && (
                  <div className="project-tech">
                    <strong>Tecnologias:</strong>
                    <div className="tech-badges">
                      {p.technologies.map((t, i) => (
                        <span key={i} className="tech-badge">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
                {p.features && p.features.length > 0 && (
                  <ul className="project-features">
                    {p.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                )}
                <footer className="project-links">
                  {p.github && p.github !== '#' && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer">Código</a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                  )}
                </footer>
              </article>
            ))
          ) : (
            <p>Sem projetos cadastrados.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
