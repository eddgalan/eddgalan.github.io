function ProfessionalDevelopment({ items }) {
  return (
    <>
      <h2>Professional Development</h2>
      { items.map((item) => (
        <div className="profesional-item" key={ item.id }>
          <div className="profesional-info">
            <h3 className="professional-title">{ item.title }</h3>
            <p className="date professional-date">{ item.expedition }</p>
          </div>
        </div>
      ))}
    </>
  );
}

export { ProfessionalDevelopment };