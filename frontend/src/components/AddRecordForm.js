import React, { useState, useEffect } from 'react';

function AddRecordForm({ isUpdateMode, recordToUpdate, onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  // If it's in update mode, pre-fill the form fields
  useEffect(() => {
    if (isUpdateMode && recordToUpdate) {
      setName(recordToUpdate.name || '');
      setDescription(recordToUpdate.description || '');
      setCategory(recordToUpdate.category || '');
    }
  }, [isUpdateMode, recordToUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (add or update)
    const formData = { name, description, category };
    onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">{isUpdateMode ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}

export default AddRecordForm;
