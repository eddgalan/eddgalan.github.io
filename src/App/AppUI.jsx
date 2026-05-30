import { Header } from '../Components/Header';
import { Navbar } from '../Components/Navbar';
import { AboutSection } from '../Components/AboutSection';
import { ExperienceSection } from '../Components/ExperienceSection';
import { SkillsSection } from '../Components/SkillsSection';
import './index.css';

function AppUI() {
  return (
    <>
      <Header />
      <Navbar />
      <AboutSection />
      <div className="experience-skill-sections">
        <ExperienceSection />
        <SkillsSection />
      </div>
    </>
  )
}

export default AppUI;
