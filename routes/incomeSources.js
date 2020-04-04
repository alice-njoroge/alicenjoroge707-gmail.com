const router = require('express').Router();
const IncomeSourcesController = require('../controllers/IncomeSourcesController');

router.get('/', IncomeSourcesController.index);

module.exports = router;