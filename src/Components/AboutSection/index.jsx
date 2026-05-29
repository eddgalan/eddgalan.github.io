import { CommandLine } from "../CommandLine";
import { SystemStatusScreen } from "../SystemStatusScreen";
import { ListItems } from "../ListItems";
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
            relacionadas al desarrollo de sistemas, automatización de procesos e integración de APIs (REST y GraphQl).
            <br/>
            Actualmente me encuentro ampliando mi perfil hacia el desarrollo Full Stack moderno, fortaleciendo mis
            conocimientos en tecnologías frontend como React, TypeScript y CSS, complementando mi experiencia backend
            con el desarrollo de interfaces modernas y consumo de APIs.
          </p>
        </div>
        <div className="about-status">
          <SystemStatusScreen />
        </div>
      </div>
    </section>
  );
}

export { AboutSection };