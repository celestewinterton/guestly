const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Event, Venue, RSVP, Table, Seat } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const rsvps = await RSVP.findAll({
    // include: Event,
    // where: {userId: userId}
  });
  return res.json(rsvps)
}));

router.post('/', requireAuth , asyncHandler(async (req, res) => {
  const { plusOne, selfDietary, plusOneDietary } = req.body;
  const userId = req.user.id;
  const eventId = ""; //TBD

  const rsvp = await RSVP.create({
    plusOne, selfDietary, plusOneDietary, eventId, userId,
  });

  return res.json(rsvp);
}));

router.put('/:id(\\d+)', asyncHandler(async function (req, res) {
  const rsvp = await RSVP.findByPk(req.params.id);
  const updatedRsvp = await rsvp.update(req.body);
  return res.json(updatedRsvp);
}));

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async function (req, res) {
  const rsvp = await RSVP.findByPk(req.params.id);
  await rsvp.destroy();
}))

module.exports = router;
