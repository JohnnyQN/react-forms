import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  // Function to add a new box
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, newBox]);
  };

  // Function to remove a box by its ID
  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div>
      <h2>Your Boxes</h2>
      <NewBoxForm createBox={addBox} />
      <div>
        {boxes.map((box) => (
          <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            removeBox={removeBox}
          />
        ))}
      </div>
    </div>
  );
}

export default BoxList;