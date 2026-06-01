import { CommandLine } from "../CommandLine";
import './style.css';

function Navbar() {
  return (
    <nav>
      <CommandLine command="ls" />
      <ul className="dirList">
        <li><a href="#about-info">01_about/</a></li>
        <li><a href="#experience">02_experience/</a></li>
        <li><a href="#skills">03_stack/</a></li>
        <li><a href="#education">04_education/</a></li>
        <li><a href="#projects">05_projects/</a></li>
        {/* <li><a href="#">06_contact/</a></li>*/}
      </ul>
    </nav>
  );
}

export { Navbar };
