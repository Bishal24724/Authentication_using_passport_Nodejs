import { Router } from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/authController.js'; // Import controller functions

const router = Router();

// Registration Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

// Logout Route
router.get('/logout', logoutUser);

export default router;
