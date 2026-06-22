import './style.css';

function CommandLine( { command = '' }) {
  return (
    <p className="commandLine">edson@portfolio: ~$ { command }</p>
  );
}

export { CommandLine };