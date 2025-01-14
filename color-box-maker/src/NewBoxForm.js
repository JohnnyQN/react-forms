// src/NewBoxForm.js
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewBoxForm({ createBox }) {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData({ width: '', height: '', backgroundColor: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width</label>
      <input
        type="text"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input
        type="text"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor">Background Color</label>
      <input
        type="text"
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  );
}

export default NewBoxForm;
