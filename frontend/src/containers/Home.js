import React, { useState } from 'react';
import AddRecordForm from '../components/AddRecordForm';
import RecordList from "../components/RecordList"
function Home() {
  const [updateMode, setUpdateMode] = useState(false);
  const [recordToUpdate, setRecordToUpdate] = useState(null);

  const handleAddRecord = (formData) => {
    // Handle adding a new record (make a POST request to the backend)
  };

  const handleEditRecord = (record) => {
    setUpdateMode(true);
    setRecordToUpdate(record);
  };

  const handleUpdateRecord = (formData) => {
    // Handle updating the record (make a PUT request to the backend)
    setUpdateMode(false);
    setRecordToUpdate(null);
  };

  return (
    <div>
      <h2>Records</h2>
      <RecordList onEdit={handleEditRecord} />

      <h2>{updateMode ? 'Update Record' : 'Add Record'}</h2>
      <AddRecordForm
        isUpdateMode={updateMode}
        recordToUpdate={recordToUpdate}
        onSubmit={updateMode ? handleUpdateRecord : handleAddRecord}
      />
    </div>
  );
}

export default Home;
