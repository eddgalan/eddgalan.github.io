import { CommandLine } from "../CommandLine";
import './style.css';

function Navbar() {
  return (
    <nav>
      <CommandLine command="ls" />
      <ul className="dirList">
        <li><a href="#">01_about/</a></li>
        <li><a href="#">02_experience/</a></li>
        <li><a href="#">03_stack/</a></li>
        <li><a href="#">04_education/</a></li>
        <li><a href="#">05_projects/</a></li>
        <li><a href="#">06_contact/</a></li>
      </ul>
    </nav>
  );
}

export { Navbar };
