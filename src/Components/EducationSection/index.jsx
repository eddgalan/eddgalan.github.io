import { CommandLine } from "../CommandLine";
import { AcademicInfo } from "./AcademicInfo";
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

  return (
    <section id="education">
      <CommandLine command="cat education.txt" />
      <h1>Education</h1>
      <div className="academic-info">
        <AcademicInfo items={ educationItems } />
      </div>
    </section>
  );
}

export { EducationSection };
