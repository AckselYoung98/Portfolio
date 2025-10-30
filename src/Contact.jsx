import React from 'react';
import { personalInfo } from './mock';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contato</h2>

        <div className="contact-grid single">
          <div className="contact-info full-width">
            <div className="contact-header">
              <p className="contact-bio">{personalInfo.bio}</p>
            </div>

            <div className="contact-links">
              <a className="contact-link" href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                <span>GitHub</span>
              </a>

              <a className="contact-link" href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>

              <a className="contact-link" href={`mailto:${personalInfo.email}`}>
                <Mail size={18} />
                <span>Email</span>
              </a>

              {personalInfo.whatsapp && (
                <a className="contact-link" href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <Phone size={18} />
                  <span>WhatsApp</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
