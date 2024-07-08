const express = require('express');

const menuController = require('../controller/menuController');

const router = express.Router();

router.get('/menu', menuController.getMenu);

router.post('/menu', menuController.addMenuItem);

module.exports = router;