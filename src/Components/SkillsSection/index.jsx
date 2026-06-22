import { CommandLine } from "../CommandLine";
import { Skills } from "./Skills";
import './style.css';

function SkillsSection() {
  const skills = [
    {
      topic: 'Backend',
      skills: [
        { name: 'PHP', percentage: 100 },
        { name: 'Magento 2', percentage: 85 },
        { name: 'Laravel', percentage: 60 },
        { name: 'GraphQL', percentage: 80 },
        { name: 'Python', percentage: 70 },
        { name: 'Node.JS', percentage: 60 },
      ],
    },
    {
      topic: 'Frontend',
      skills: [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 70 },
        { name: 'JavaScript', percentage: 80 },
        { name: 'React', percentage: 60 },
        { name: 'TypeScript', percentage: 60 },
      ],
    },
    {
      topic: 'Databases',
      skills: [
        { name: 'MySQL', percentage: 85 },
      ],
    },
    {
      topic: 'Tools',
      skills: [
        { name: 'Docker', percentage: 80 },
        { name: 'Git & GitHub', percentage: 80 },
        { name: 'Linux', percentage: 70 },
        { name: 'Postman', percentage: 60 },
      ],
    }
  ];

  return (
    <section id="skills">
      <CommandLine command="skills --list" />
      <h1>Skills</h1>

      <div className="skills-container">
        <Skills skills={skills} />
      </div>
    </section>
  );
}

export { SkillsSection };