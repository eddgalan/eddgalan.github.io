import { Header } from '../Components/Header';
import { Navbar } from '../Components/Navbar';
import { AboutSection } from '../Components/AboutSection';
import { ExperienceSection } from '../Components/ExperienceSection';
import { SkillsSection } from '../Components/SkillsSection';
import { EducationSection } from '../Components/EducationSection';
import { ProjectsSection } from '../Components/ProjectsSection';
import './index.css';

function AppUI() {
  return (
    <>
      <Header />
      <Navbar />
      <AboutSection />
      <div className="double-section-container">
        <ExperienceSection />
        <SkillsSection />
      </div>
      <div className="double-section-container irregular">
        <EducationSection />
        <ProjectsSection />
      </div>
    </>
  )
}

export default AppUI;
