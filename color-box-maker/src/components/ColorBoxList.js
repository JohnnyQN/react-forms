import React, { useState } from "react";
import ColorBox from "./ColorBox";
import ColorBoxForm from "./ColorBoxForm";

function ColorBoxList() {
  const [colors, setColors] = useState([]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const removeColor = (colorToRemove) => {
    setColors(colors.filter(color => color !== colorToRemove));
  };

  return (
    <div>
      <h1>Color Box Maker</h1>
      <ColorBoxForm addColor={addColor} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {colors.map((color, index) => (
          <ColorBox
            key={index}
            color={color}
            removeColor={() => removeColor(color)}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorBoxList;
