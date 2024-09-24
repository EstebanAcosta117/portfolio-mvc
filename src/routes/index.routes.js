const router = require('express').Router();

const indexController = require('../controllers/indexController');

router.get('/',indexController.index);
router.get('/about',indexController.about);

module.exports = router