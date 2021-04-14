import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import "./BoxList.css";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const renderBoxes = () => {
    return (
      <div>
        {boxes.map((box) => (
          <Box key={box.id} box={box} removeBox={removeBox} />
        ))}
      </div>
    );
  };

  const addBox = (box) => {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  };

  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div className="BoxList">
      <h1>Pile of Boxes</h1>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;
