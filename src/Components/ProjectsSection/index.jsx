import { CommandLine } from "../CommandLine";
import { FaFolderOpen } from "react-icons/fa6";
import './style.css';

function ProjectsSection() {
  const projects = [
    {
      index: '1',
      title: 'Magento 2.4.7',
      shortDescription: 'magento_247',
      description: 'Proyecto en Magento 2.4.7, desarrollo de dos módulos. Uno de reportería y otro de monedero electrónico.',
      technologies: ['PHP', 'Magento 2', 'MySQL', 'GraphQl', 'Grid', 'Docker'],
      icon: '',
      link: 'https://github.com/eddgalan/Magento-2.4.7/tree/develop',
    },
    {
      index: '2',
      title: 'Magento 2.4.8',
      shortDescription: 'magento_248',
      description: 'Proyecto limpio con la instalación de Magento 2.4.8. Se conectaron todos los servicios (Magento, MariaDB y OpenSearch) en un mismo docker-compose',
      technologies: ['PHP', 'Magento 2', 'Docker', 'MariaDB', 'OpenSearch'],
      icon: '',
      link: 'https://github.com/eddgalan/AlphaMage',
    },
    {
      index: '3',
      title: 'Graphql Yoga',
      shortDescription: 'graphql_yoga',
      description: 'Servidor con peticiones GraphQL con Node.js y Yoga. Simula creación de libros y autores.',
      technologies: ['Node.js', 'Yoga', 'GraphQL', 'Resolvers', 'Queries', 'Mutations', 'Docker'],
      icon: '',
      link: 'https://github.com/eddgalan/GraphQL-NodeJS',
    },
    {
      index: '4',
      title: 'Services',
      shortDescription: 'services_containers',
      description: 'Contenedores de Docker que conectan diferentes servicios y aplicaciones.',
      technologies: ['Docker', 'MariaDB', 'ElasticSearch', 'MongoDB'],
      icon: '',
      link: 'https://github.com/eddgalan/services',
    },
    {
      index: '5',
      title: 'ToDo List con React.JS',
      shortDescription: 'todo_list_react',
      description: 'Aplicación para listar tareas y marcarlas como completadas, simula un To Do List.',
      technologies: ['React.JS', 'Javascript', 'CSS', 'HTML'],
      icon: '',
      link: 'https://github.com/eddgalan/Curses/tree/frontend/Frontend/curso-react-intro-main',
    },
  ];

  return (
    <section id="projects">
      <CommandLine command="ls projects/" />
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <article className="project-card" key={ project.index }>
            <div className="header">
              <a href={ project.link } target="_blank">
                <span>{ project.index + '_' + project.shortDescription }</span>
                <div className="icon"><FaFolderOpen /></div>
              </a>
            </div>
            <div className="content">
              <div className="iconContainer"></div>
              <h2><a href={ project.link } target="_blank">{ project.title } </a></h2>
              <p>{ project.description }</p>
            </div>
            <div className="technologies">
              { project.technologies.map((technology, index) => (
                <span key={ index }>{ technology }</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export { ProjectsSection };
