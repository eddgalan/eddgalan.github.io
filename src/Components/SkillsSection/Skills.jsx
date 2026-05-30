import { ProgressBar } from "./ProgressBar";
import './skills.css';

function Skills( { skills }) {
  return (
    <>
      { skills.map((skillGroup) => (
        <div className="skill-topic" key={ skillGroup.topic }>
          <h2>{ skillGroup.topic }</h2>
          <ul className="skill-list">
            { skillGroup.skills.map((skill) => (
              <li className="skill-item" key={ skill.name }>
                <div className="skill-name">
                  <p>{ skill.name }</p>
                </div>
                <ProgressBar percentage={ skill.percentage } />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export { Skills };
