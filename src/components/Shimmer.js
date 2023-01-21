import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="card">
      <div className="card-header animated-bg" id="header">
        &nbsp;
      </div>
      <div className="card-content">
        <p className="card-excerpt" id="excerpt">
          &nbsp;
          <span className="animated-bg animated-bg-text">&nbsp;</span>
          <span className="animated-bg animated-bg-text">&nbsp;</span>
          <span className="animated-bg animated-bg-text">&nbsp;</span>
        </p>
      </div>
    </div>
  );
};

export default Shimmer;
