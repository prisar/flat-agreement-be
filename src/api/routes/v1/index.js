const express = require('express');

const authRoutes = require('./auth.route');

const router = express.Router();

/**
 * API Routes
 */
router.use('/api/v1/auth', authRoutes);

module.exports = router;
