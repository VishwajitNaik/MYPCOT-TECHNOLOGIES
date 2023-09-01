import React from 'react';
import RecordItem from './RecordItem'; // Import the RecordItem component

function RecordList({ records, onDelete, onUpdate }) {
  return (
    <div>
      <h2>Record List</h2>
      {records.map((record) => (
        <RecordItem
          key={record._id} // Use a unique key for each record
          record={record}
          onDelete={onDelete} // Pass the onDelete callback
          onUpdate={onUpdate} // Pass the onUpdate callback
        />
      ))}
    </div>
  );
}

export default RecordList;
