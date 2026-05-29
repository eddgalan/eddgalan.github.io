import './index.css'

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
          <p className="title">edson@portfolio: ~</p>
        </div>
      </div>

      <hr />
    </header>
  );
}

export { Header };