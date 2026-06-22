import './academicinfo.css';

function AcademicInfo( {items} ) {
  return (
    <>
      <h2>Academic Education</h2>
      { items.map((item) => (
        <div className="academic-item" key={ item.index }>
          <div className="academic-info">
            <h3 className="academic-title">{ item.title }</h3>
            <p className="institution">{ item.institution }</p>
            <p className="date">{ item.date }</p>
          </div>
        </div>
      ))}
    </>
  );
}

export { AcademicInfo };