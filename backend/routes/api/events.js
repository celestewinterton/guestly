const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Event, Venue, RSVP, Table, Seat } = require('../../db/models');

const router = express.Router();

const validateEvent = [
  check('name')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide an event name greater than 4 characters'),
  check('date')
    .exists({ checkFalsy: true })
    .withMessage('Please select the date for your event'),
  handleValidationErrors
]

router.get('/', asyncHandler(async (req, res) => {
  const events = await Event.findAll({
    include: [Venue, User, RSVP],
    order: [["date", "ASC"]]
  });
  // const rsvps = await RSVP.findAll();
  return res.json({events})
}));

router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const events = await Event.findByPk(req.params.id, {
    include: [Venue, User]
  });
  // const rsvps = await RSVP.findAll();
  return res.json({events})
}));

router.post('/', requireAuth , validateEvent, asyncHandler(async (req, res) => {
  const { name, date, details, dresscode } = req.body;
  const userId = req.user.id;

  const event = await Event.create({
    name, date, details, dresscode, userId,
  });

  return res.json(event);
}));

router.put('/:id(\\d+)', validateEvent, requireAuth, asyncHandler(async function (req, res) {
  const event = await Event.findByPk(req.params.id);
  const newEvent = await event.update(req.body);
  return res.json(newEvent);
}));

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async function (req, res) {
  const event = await Event.findByPk(req.params.id);
  await event.destroy();
  return res.json(event);
}))


module.exports = router;
