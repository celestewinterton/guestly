const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Venue } = require('../../db/models');

const router = express.Router();

router.get('/', requireAuth, asyncHandler(async (req, res) => {
  const venues = await Venue.findAll();
  return res.json(venues)
}));

module.exports = router;
