const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Event, Venue, RSVP, Table, Seat } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const rsvps = await RSVP.findAll();
  return res.json(rsvps)
}));

module.exports = router;
