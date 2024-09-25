const express = require ('express');
const router = express.Router ();
const aboutController = require ("../controllers/aboutController");
const indexController = require('../controllers/indexController');

router.get("/", indexController.index);
router.get("/about", aboutController.about);

modules.exports = router;