const express = require('express');
const router = express.Router();

const { findAllLogs, showNewView, deleteOneLog, updateOneLog, createNewLog, showEditView, clearData, seedData, showOneLog } = require('../controllers/logs');

// Setup "index" routes
router.get('/', findAllLogs);

// Setup "new" route
router.get('/new', showNewView);

// Setup "destroy" route
router.delete('/:id', deleteOneLog);

// Setup "update" route
router.put('/:id', updateOneLog);

// Setup "create" route
router.post('/', createNewLog);

// Setup "edit" route
router.get('/:id/edit', showEditView);

// Setup "clear" route
router.get('/clear', clearData);

// Setup "seed" route
router.get('/seed', seedData);

// Setup "show" route
router.get('/:id', showOneLog)


module.exports = router;