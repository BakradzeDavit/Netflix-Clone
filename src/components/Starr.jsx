function Star({ width }) {
  return (
    <div>
      <div className="star-container">
        <i className="bi bi-star star-background"></i>
        <div className={`star-foreground `} style={{ width: `${width}%` }}>
          <i className="bi bi-star-fill"></i>{" "}
        </div>
      </div>
    </div>
  );
}

export default Star;
