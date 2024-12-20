import { Router } from 'express';

const router = Router();

router.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ message: 'User is authenticated', user: req.user });
    } else {
        res.status(401).json({ message: 'User not authenticated' });
    }
});

export default router;
