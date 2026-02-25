const express = require('express');
const { registerUser, loginUser, updateUser, deleteUser } = require('../controllers/userController');
const authToken = require('../middleware/checkToken');
const router = express.Router();


router.post('/register',registerUser);
router.post('/login', loginUser);
router.put('/update/:id',updateUser)
router.delete('/delete',authToken,deleteUser)

module.exports = router;