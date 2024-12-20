import passport from 'passport';
import User from '../models/user.js';

// Register User
export const registerUser = async (req, res) => {
  console.log('Request Body:', req.body); // Debugging request body
  const { username, password } = req.body;

  try {
    const user = await User.create({ username, password });
    res.status(200).json({ message: 'User registered successfully', user });
  } catch (err) {
    console.error('Error registering user:', err); // Debugging error
    res.status(400).json({ message: 'Error registering user', error: err.message });
  }
};

// Login User
export const loginUser = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error', error: err.message });
    }
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    req.logIn(user, (loginErr) => {
      if (loginErr) {
        return res.status(500).json({ message: 'Login failed', error: loginErr.message });
      }
      res.json({ message: 'Logged in successfully', user: req.user });
    });
  })(req, res, next);
};

// Logout User
export const logoutUser = (req, res, next) => {
  req.logout((error) => {
    if (error) return next(error);
    res.json({ message: 'Logged out successfully' });
  });
};
