import { CommandLine } from "../CommandLine/index.jsx";
import './index.css';

function Header() {
  return (
    <header>
      <div className="header-top">
        <div className="buttons-container">
          <button className="exit">x</button>
          <button className="minimize">-</button>
          <button className="maximize"></button>
        </div>

        <div className="title-container">
          <CommandLine />
        </div>
      </div>

      <hr />
    </header>
  );
}

export { Header };