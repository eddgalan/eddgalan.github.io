import { CommandLine } from "../CommandLine";
import { AcademicInfo } from "./AcademicInfo";
import { ProfessionalDevelopment } from "./ProfessionalDevelopment";
import './style.css';

function EducationSection() {
  const educationItems = [
    {
      index: '1',
      title: 'Ingeniería en Sistemas Computacionales',
      institution: 'UVEG (Universidad Virtual del Estado de Guanajuato)',
      date: '2021 - 2026'
    },
    {
      index: '2',
      title: 'Ingeniería en Computación',
      institution: 'ESIME (Escuela Superior de Ingeniería Mecánica y Eléctrica)',
      date: '2016 - 2021'
    },
  ];
  const professionalDevelopmentItems = [
    {
      id: 'eaaecfc9-f484-4998-99e2-724079a14b2c',
      title: 'Curso de React.js con TypeScript',
      expedition: '2026-06',
      show: true
    },
    {
      id: 'f6bdbdb4-d306-488e-ab78-55462e5e07cf',
      title: 'Curso de Tailwind CSS',
      expedition: '2026-06',
      show: true
    },
    {
      id: '7b0e2cf9-325d-4f36-91b5-c57a19e6839f',
      title: 'Curso de Laravel',
      expedition: '2026-06',
      show: true
    },
    {
      id: '16dc16e2-e172-4557-81e9-4eeb80e25e70-8905c949-8949-4efb-aea0-7c9367627495',
      title: 'Curso de Frontend Developer',
      expedition: '2026-05',
      show: true
    },
    {
      id: 'de4cba0c-3383-4934-8acb-6ceea181b711-100f8640-1f21-49c1-80a9-a9fd59e46848',
      title: 'Curso de React.js',
      expedition: '2026-05',
      show: true
    },
    {
      id: 'ebabc6fb-22d1-43ee-aa0e-9bfd9419cdc1-b648d9d7-a817-46e6-ba9a-8280610b7c79',
      title: 'Curso de Fundamentos de Observabilidad con New Relic',
      expedition: '2026-03',
      show: false
    },
    {
      id: '6c7b9595-e1ee-4def-85f6-2ac059bcb47c-33c7b59c-52e8-4c26-8d43-46a17c64eb23',
      title: 'Programación con TypeScript',
      expedition: '2026-03',
      show: true
    },
    {
      id: '85c2c836-b21c-427d-9de6-f589b6e48ca9-9d1214e0-bf1f-44a0-9bf9-fd7e04dea19d',
      title: 'Curso de TypeScript: Programación Orientada a Objetos y Asincronismo',
      expedition: '2026-03',
      show: false
    },
    {
      id: '8a010596-20a3-4d30-8920-3faea70f2c4a-7f259b11-05b0-4313-ab44-a90157047a24',
      title: 'Curso de TypeScript: Tipos Avanzados y Funciones',
      expedition: '2026-01',
      show: true
    },
    {
      id: '07e7af06-dcd2-45c2-98bc-42cac85da16e-54344ade-c230-40f1-8eca-c741935320cc',
      title: 'Curso de TypeScript',
      expedition: '2026-01',
      show: true
    },
    {
      id: '3c3f4c9d-957f-44af-965d-dd7b04a79630-2295ff45-7ba9-4c20-9373-d88bb5c2f6d3',
      title: 'Curso de Fundamentos de Node.js',
      expedition: '2025-12',
      show: true
    },
    {
      id: '606e2aae-6ed7-474c-97d2-bc078b172cbe-35350263-aff9-4820-a7b8-b9dd4a7aece8',
      title: 'Curso de Introducción al Desarrollo Backend',
      expedition: '2025-12',
      show: false
    },
    {
      id: '1ed77e04-fb16-4f66-be6f-15b90d33680e',
      title: 'Programación con PHP',
      expedition: '2025-12',
      show: true
    },
    {
      id: 'c82d75ff-9750-4f62-8076-abb3a7855360',
      title: 'Curso de Python',
      expedition: '2025-12',
      show: true
    },
    {
      id: '2f6d5edb-7e43-4a76-8dc3-bc00d8d5185a',
      title: 'Curso de Introducción a Frameworks de PHP',
      expedition: '2024-12',
      show: false
    },
    {
      id: '09271e63-46af-4623-9458-340e059952fb',
      title: 'Curso de PHP: Entornos Virtuales y Funciones Avanzadas',
      expedition: '2024-06',
      show: false
    },
    {
      id: '1471604a-b232-4b59-b495-42d8f42bd1fd',
      title: 'Curso de Patrones de Diseño y Buenas Prácticas en PHP',
      expedition: '2024-04',
      show: true
    },
    {
      id: '530f9d77-5c5d-4a57-8892-641c99c50444',
      title: 'Curso de Programación Orientada a Objetos en PHP',
      expedition: '2024-04',
      show: false
    },
    {
      id: 'bec9e47a-087d-4950-9819-59f7b917600f',
      title: 'Curso de Manejo de Datos en PHP',
      expedition: '2024-04',
      show: false
    },
    {
      id: '87ea54b1-9555-413f-9bcb-640662cac373',
      title: 'Introducción a PHP con Composer',
      expedition: '2024-01',
      show: false
    },
    {
      id: '2843d099-dba1-4ca3-a26d-5dec6cddd237',
      title: 'PHP: Curso Práctico',
      expedition: '2024-01',
      show: false
    },
    {
      id: 'e5531b1c-e021-4595-8a51-a90533bd8f1a',
      title: 'PHP: Arreglos, Funciones y Estructuras de Control',
      expedition: '2024-01',
      show: false
    },
    {
      id: '7bbc5f92-31e6-4c64-99d5-500c0a7dc7eb',
      title: 'PHP Fundamentos',
      expedition: '2024-01',
      show: false
    },
    {
      id: '`docker-2022-04',
      title: 'Docker',
      expedition: '2022-04',
      show: true
    },
    {
      id: 'POBJS-2021-08',
      title: 'Programación Orientada a Objetos en Javascript',
      expedition: '2021-08',
      show: false
    },
    {
      id: 'dwc-2022-01',
      title: 'Desarrollo Web Completo',
      expedition: '2022-01',
      show: false
    },
    {
      id: 'TLKVSVKKGG-SRSRHHTQ-RHRHLLTDPR',
      title: 'SCRUM Developer Professional Certificate (SDPC)',
      expedition: '2022-01',
      show: true
    }
  ];

  return (
    <section id="education">
      <CommandLine command="cat education.txt" />
      <h1>Education</h1>
      <div className="academic-info">
        <AcademicInfo items={ educationItems } />
        <ProfessionalDevelopment items={ professionalDevelopmentItems.filter( item => item.show) }/>
      </div>
    </section>
  );
}

export { EducationSection };
