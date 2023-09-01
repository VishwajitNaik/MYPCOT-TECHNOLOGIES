const express = require('express');
const router = express.Router();
const {
  createRecord,
  getAllRecords,
  getRecordById,
  updateRecordById,
  deleteRecordById,
} = require('../controllers/recordController');

// Create a new record
router.post('/', createRecord);

// Retrieve a list of all records
router.get('/', getAllRecords);

// Retrieve a single record by ID
router.get('/:id', getRecordById);

// Update a record by ID
router.put('/:id', updateRecordById);

// Delete a record by ID
router.delete('/:id', deleteRecordById);

module.exports = router;
