const { Record } = require('../models/Record');

// Create a new record
const createRecord = async (req, res) => {
  try {
    const { name, description, category, isActive } = req.body;

    const newRecord = new Record({
      name,
      description,
      category,
      isActive,
    });

    await newRecord.save();

    res.status(201).json({ message: 'Record created successfully', data: newRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating record' });
  }
};


const getAllRecords = async (req, res) => {
    try {
      const records = await Record.find();
  
      res.status(200).json(records);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching records' });
    }
  };
  
  // Retrieve a single record by ID
  const getRecordById = async (req, res) => {
    try {
      const { id } = req.params;
      const record = await Record.findById(id);
  
      if (!record) {
        return res.status(404).json({ message: 'Record not found' });
      }
  
      res.status(200).json(record);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching record' });
    }
  };

  const updateRecordById = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, category, isActive } = req.body;
  
      const updatedRecord = await Record.findByIdAndUpdate(
        id,
        { name, description, category, isActive },
        { new: true }
      );
  
      if (!updatedRecord) {
        return res.status(404).json({ message: 'Record not found' });
      }
  
      res.status(200).json({ message: 'Record updated successfully', data: updatedRecord });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating record' });
    }
  };
  
  // Delete a record by ID
const deleteRecordById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedRecord = await Record.findByIdAndRemove(id);
  
      if (!deletedRecord) {
        return res.status(404).json({ message: 'Record not found' });
      }
  
      res.status(200).json({ message: 'Record deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting record' });
    }
  };
  
  

module.exports = {
  createRecord,
  getAllRecords,
  getRecordById,
  updateRecordById,
  deleteRecordById,
  // Other record-related controllers here
};
