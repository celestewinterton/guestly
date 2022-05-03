const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Event, Venue, RSVP, Table, Seat } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const events = await Event.findAll({order: [["date", "ASC"]]});
  const rsvps = await RSVP.findAll();
  return res.json({events, rsvps})
}));

router.post('/', requireAuth , asyncHandler(async (req, res) => {
  const { name, date, details, dresscode } = req.body;
  const userId = req.user.id;

  const event = await Event.create({
    name, date, details, dresscode, userId,
  });

  // console.log("BACKEND =======>",req.user.id)
  return res.json(event);
}));

router.put('/:id(\\d+)', requireAuth, asyncHandler(async function (req, res) {
    const id = await Event.update(req.body);
    const event = await Event.one(id);
    return res.json(event);
  })
);

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async function (req, res) {
  const event = await Event.findByPk(req.params.id);
  await event.destroy();
}))


module.exports = router;