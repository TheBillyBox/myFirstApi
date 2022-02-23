const express = require('express');
const router = express.Router();

const fetchController = require('../controllers/fetchController');

router.get('/users/:page', fetchController.allUsers);
router.get('/user/:id', fetchController.singleUser);
router.post('/login/', fetchController.login);

module.exports = router;