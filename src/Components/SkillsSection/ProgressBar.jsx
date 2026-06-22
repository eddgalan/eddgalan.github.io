import './progressbar.css';

function ProgressBar({ percentage = 0, totalBlocks = 10 }) {
  const filledBlocks = Math.round((percentage / 100) * totalBlocks);

  return (
    <div className="progress-bar">
      {Array.from({ length: totalBlocks }).map((_, index) => (
        <span
          key={index}
          className={`progress-block ${index < filledBlocks ? 'filled' : ''}`}
        ></span>
      ))}

      <span className="progress-percentage">{percentage}%</span>
    </div>
  );
}

export { ProgressBar };