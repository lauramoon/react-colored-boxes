import React, { useState } from "react";
import "./NewBoxForm.css";

function NewBoxForm({ addBox }) {
  const INITIAL_STATE = { width: "", height: "", color: "black" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="NewBoxForm">
      <h2>Add New Box</h2>
      <div className="NewBoxForm-inputDiv">
        <label htmlFor="width">Width: </label>
        <input
          type="number"
          min="20"
          max="500"
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>

      <div className="NewBoxForm-inputDiv">
        <label htmlFor="height">Height: </label>
        <input
          type="number"
          min="30"
          max="500"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>

      <div className="NewBoxForm-inputDiv">
        <label htmlFor="height">Color: </label>
        <input
          type="color"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>

      <div>
        <button>Add a new box!</button>
      </div>
    </form>
  );
}

export default NewBoxForm;
