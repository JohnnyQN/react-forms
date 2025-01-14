import React, { useState } from "react";
import "./ColorBoxMaker.css";

function ColorBoxMaker() {
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  // Validate color input
  const isValidColor = (color) => {
    const style = new Option().style;
    style.color = color;
    return style.color !== "";
  };

  // Handle adding a new box
  const addBox = (e) => {
    e.preventDefault();
    if (!isValidColor(color)) {
      alert("Please enter a valid color!");
      return;
    }
    setBoxes([...boxes, color]);
    setColor("");
  };

  // Handle removing a box
  const removeBox = (idx) => {
    const confirmDelete = window.confirm("Are you sure you want to remove this box?");
    if (confirmDelete) {
      setBoxes(boxes.filter((_, index) => index !== idx));
    }
  };

  return (
    <div className="ColorBoxMaker">
      <h1>Color Box Maker</h1>
      <form onSubmit={addBox}>
        <label htmlFor="color">Enter a color:</label>
        <input
          type="text"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="e.g., red or #ff5733"
        />
        <button type="submit">Add Box</button>
      </form>
      <div className="box-container">
        {boxes.map((boxColor, idx) => (
          <div
            key={idx}
            className="color-box"
            style={{ backgroundColor: boxColor }}
          >
            <span className="box-label">{boxColor}</span>
            <button className="remove-btn" onClick={() => removeBox(idx)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorBoxMaker;
