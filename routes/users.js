const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/register', userController.registerForm);
router.post('/register',
  userController.validateRegister,
  userController.register,
  authController.login
);

router.get('/login', userController.loginForm);
router.post('/login', authController.login);

router.get('/logout', authController.logout);

router.get('/auth/facebook', authController.facebookAuth);

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback', authController.facebookAuth);

router.get('/account', userController.account);
router.post('/account', catchErrors(userController.updateAccount));

module.exports = router;
