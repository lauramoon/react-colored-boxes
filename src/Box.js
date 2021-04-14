import "./Box.css";
function Box({ box, removeBox }) {
  return (
    <div className="Box">
      <div
        className="Box-div"
        style={{
          backgroundColor: box.color,
          width: box.width + "px",
          height: box.height + "px",
        }}
      ></div>
      <div className="Box-button-div">
        <button onClick={() => removeBox(box.id)}>X</button>
      </div>
    </div>
  );
}

export default Box;
