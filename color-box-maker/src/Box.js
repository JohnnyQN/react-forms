import React from 'react';

function Box({ id, width, height, backgroundColor, removeBox }) {
  // Handle the remove button click
  const handleRemove = () => removeBox(id);

  return (
    <div style={{ marginBottom: '20px' }}>
      <div
        style={{
          width: `${width}em`,
          height: `${height}em`,
          backgroundColor,
          margin: '10px auto',
        }}
      ></div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default Box;
