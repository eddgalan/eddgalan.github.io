import { CommandLine } from "../CommandLine";
import { SystemStatusScreen } from "../SystemStatusScreen";
import { ListItems } from "../ListItems";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import './style.css';

function AboutSection() {
  const aboutItems = [
    { index: '1', description: 'Full Stack PHP Developer' },
    { index: '2', description: 'Magento 2 Developer' },
    { index: '3', description: 'React Enthusiast'}
  ];

  return (
    <section id="about">
      <CommandLine command="whoami"/>
      <div className="about-container">
        <div className="about-info">
          <h1>Edson Galan (About)</h1>
          <ListItems
            items={aboutItems.map((item) => (
              <li key={ item.index }>{ item.description }</li>
            ))}
          />
          <p className="about-description">
            Desarrollador Full Stack con experiencia en desarrollo backend y plataformas de comercio electrónico.
            He trabajado principalmente con PHP (Puro y CodeIgniter), Magento 2 / Adobe Commerce y tecnologías
            frontend como HTML, CSS, JavaScript, jQuery, Bootstrap. También en el desarrollo de integraciones de APIs
            de tipo REST y GraphQl.
            <br/>
            Actualmente me encuentro ampliando mi perfil hacia el desarrollo Full Stack moderno, fortaleciendo mis
            conocimientos en tecnologías frontend como React, TypeScript y CSS, complementando mi experiencia frontend
            con interfaces modernas.
          </p>
        </div>
        <div className="about-status">
          <SystemStatusScreen />
        </div>
      </div>
      <div className="social-media-container">
        <a className="social-button" href="https://github.com/eddgalan" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a className="social-button" href="https://www.linkedin.com/in/eddgalan" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  );
}

export { AboutSection };