const LineName = ({ item}) => {
  return (
    <div className="lineName">
      <span className="d-flex align-items-center gap-2 justify-content-start">
        <div
          style={{ width: "2rem", height: "2px", background: "#9E553C" }}
        ></div>
        { item}
      </span>
    </div>
  );
};

export default LineName;
