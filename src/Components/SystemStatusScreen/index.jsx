import { ListItems } from "../ListItems/index.jsx";
import './style.css';

function SystemStatusScreen() {
  const systemStatusItems = [
    { index: '1', description: 'CPU:', additionalText: '100%', textClass: 'green' },
    { index: '2', description: 'Memory:', additionalText: '100%', textClass: 'green' },
    { index: '3', description: 'Disk:', additionalText: '100%', textClass: 'green' },
    { index: '4', description: 'PHP:', additionalText: 'ONLINE', textClass: 'green' },
    { index: '5', description: 'Magento 2:', additionalText: 'ONLINE', textClass: 'green' },
    { index: '6', description: 'React:', additionalText: 'LEARNING', textClass: 'yellow' },
    { index: '7', description: 'Coffee:', additionalText: 'LOW ☕️', textClass: 'red' },
  ];

  return (
    <div className="system-status">
      <h2>system_status.sh</h2>
      <ListItems items={systemStatusItems.map((item) => (
        <li key={ item.index }>{ item.description } <span className={item.textClass}>{ item.additionalText }</span></li>
      ))} />
    </div>
  );
}

export { SystemStatusScreen };