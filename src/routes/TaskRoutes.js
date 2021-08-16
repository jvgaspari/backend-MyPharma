const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');

router.post('/', TaskController.create);
router.put('/:id', TaskController.update);
router.get('/:id', TaskController.show);
router.get('/filter/all', TaskController.all);
router.get('/filter/positivo', TaskController.positivo);
router.get('/filter/negativo', TaskController.negativo);
router.delete('/:id', TaskController.delete);

module.exports = router;