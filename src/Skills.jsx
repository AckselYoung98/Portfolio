import React from 'react';
import * as Icons from 'lucide-react';
import { skills } from './mock';
import './Skills.css';

const Skills = () => {
  const getIcon = (iconName) => {
    const Icon = Icons[iconName.split('-').map((word, index) => 
      index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('').replace(/-/g, '')] || Icons.Code;
    return Icon;
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'advanced': return 'var(--success)';
      case 'intermediate': return 'var(--accent-primary)';
      case 'beginner': return 'var(--accent-secondary)';
      default: return 'var(--text-secondary)';
    }
  };

  const getLevelLabel = (level) => {
    switch(level) {
      case 'advanced': return 'Avançado';
      case 'intermediate': return 'Intermediário';
      case 'beginner': return 'Básico';
      default: return level;
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-label">Competências Técnicas</span>
          <h2 className="section-title">Skills & Tecnologias</h2>
          <p className="section-description">
            Minhas principais habilidades técnicas e tecnologias com as quais trabalho
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.id} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="category-items">
                {category.items.map((skill, index) => {
                  const Icon = getIcon(skill.icon);
                  return (
                    <div key={index} className="skill-item">
                      <div className="skill-icon" style={{ color: getLevelColor(skill.level) }}>
                        <Icon size={24} />
                      </div>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span 
                          className="skill-level"
                          style={{ color: getLevelColor(skill.level) }}
                        >
                          {getLevelLabel(skill.level)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;