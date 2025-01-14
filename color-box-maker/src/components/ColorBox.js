import React from "react";

function ColorBox({ color, removeColor }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "120px",
        height: "120px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p style={{ margin: "0 0 5px 0", wordWrap: "break-word" }}>{color}</p>
      <button
        onClick={removeColor}
        style={{
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#ff4d4d",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default ColorBox;

