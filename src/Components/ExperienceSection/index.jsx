import './style.css';
import { CommandLine } from "../CommandLine";

function ExperienceSection() {
  return (
    <section id="experience">
      <CommandLine command="cat experience.log" />
      <h1>Experience</h1>
      <div className="timeline">
        {/* ToDo: Create 'TimelineItem' components and data to iterate */}
        <article className="timeline-item">
          <span className="timeline-date">Enero/2025 - Marzo/2026</span>
          <h3>Cuidado Con el Perro</h3>
          <h4>Backend Developer (Adobe Commerce/Magento)</h4>
          <ul>
            <li>Desarrollo backend de módulos personalizados para Magento 2.</li>
            <li>Desarrollo e implementación de APIs GraphQL y REST.</li>
            <li>Desarrollo de integraciones con sistemas externos (ERPs y CRMs).</li>
            <li>Optimización de rendimiento y automatizaciones.</li>
            <li>Generación de reportes y consultas SQL para análisis operativo y de negocio.</li>
            <li>Desarrollo de scripts en Python para agilizar y automatizar procesos.</li>
          </ul>
        </article>
        <article className="timeline-item">
          <span className="timeline-date">Octubre/2022 - Enero/2023</span>
          <h3>Wolf Sellers</h3>
          <h4>Full Stack PHP Developer</h4>
          <ul>
            <li>Desarrollo Full Stack de aplicaciones y plataformas web.</li>
            <li>Implementación de interfaces frontend responsivas utilizando HTML, CSS, Bootstrap y
              JavaScript.</li>
            <li>Desarrollo y mantenimiento a landing pages.</li>
            <li>Desarrollo backend de módulos personalizados para Magento 2.</li>
            <li>Desarrollo y mantenimientos de APIs REST y GraphQl.</li>
            <li>Generación de reportes y consultas SQL para análisis operativo y de negocio.</li>
          </ul>
        </article>
        <article className="timeline-item">
          <span className="timeline-date">Junio/2022 - Agosto/2022</span>
          <h3>Grupo Yotta</h3>
          <h4>Full Stack PHP Developer</h4>
          <ul>
            <li>Desarrollo Full Stack de aplicaciones y sitios web con PHP puro.</li>
            <li>Implementación de interfaces frontend utilizando HTML, CSS, Bootstrap, JavaScript y jQuery.</li>
            <li>Desarrollo de consultas SQL para extraer información.</li>
            <li>Participación en proyectos personalizados para diferentes áreas y marcas.</li>
          </ul>
        </article>
        <article className="timeline-item">
          <span className="timeline-date">Octubre/2021 - Abril/2022</span>
          <h3>IDS Comercial</h3>
          <h4>Frontend Developer</h4>
          <ul>
            <li>Desarrollo de nuevos flujos utilizando cells (tecnología de la empresa).</li>
            <li>Desarrollo y mantenimiento de web components con Litelement.</li>
            <li>Desarrollo de pruebas unitarias.</li>
          </ul>
        </article>
        <article className="timeline-item">
          <span className="timeline-date">Septiembre/2019 - Abril/2021</span>
          <h3>DeSiCi</h3>
          <h4>Full Stack Django Developer & PHP Developer</h4>
          <ul>
            <li>Desarrollo y mantenimiento de plataformas web con Django (Python).</li>
            <li>Desarrollo y mantenimiento de plataformas web con PHP (PHP Puro).</li>
            <li>Creación de interfaces con HTML, CSS, Javascript, jQuery y Bootstrap.</li>
            <li>Análisis y toma de requerimientos para soporte y nuevas implementaciones.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export { ExperienceSection };