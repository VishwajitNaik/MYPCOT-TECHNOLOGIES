import React, { useState } from 'react';

function RecordItem({ record, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedRecord, setUpdatedRecord] = useState({ ...record });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    // You can send an HTTP request to update the record in the backend here
    onUpdate(updatedRecord);

    // After successful update, exit edit mode
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    // Reset the updated record to the current record data
    setUpdatedRecord({ ...record });

    // Exit edit mode
    setIsEditing(false);
  };

  const handleDelete = () => {
    // You can send an HTTP request to delete the record in the backend here
    onDelete(record._id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecord({ ...updatedRecord, [name]: value });
  };

  return (
    <div>
      {record ? ( // Check if record is defined
        isEditing ? (
          <div>
            <input
              type="text"
              name="name"
              value={updatedRecord.name}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              value={updatedRecord.description}
              onChange={handleInputChange}
            />
            <select
              name="category"
              value={updatedRecord.category}
              onChange={handleInputChange}
            >
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              {/* Add other category options */}
            </select>
            <button onClick={handleUpdate}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <div>
            <h3>{record.name}</h3>
            <p>{record.description}</p>
            <p>Category: {record.category}</p>
            <p>Status: {record.isActive ? 'Active' : 'Inactive'}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )
      ) : null}
    </div>
  );
}

export default RecordItem;
