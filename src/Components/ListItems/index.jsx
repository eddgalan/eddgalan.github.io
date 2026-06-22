import './style.css';

function ListItems( { items } ) {
  return (
    <ul className="listItems"> { items } </ul>
  );
}

export { ListItems };