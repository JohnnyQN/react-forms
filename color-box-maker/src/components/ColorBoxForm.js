import React, { useState } from "react";

function ColorBoxForm({ addColor }) {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
    setColor(""); // Reset the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Enter a color:</label>
      <input
        type="text"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="e.g., red or #ff5733"
        required
      />
      <button type="submit">Add Box</button>
    </form>
  );
}

export default ColorBoxForm;
