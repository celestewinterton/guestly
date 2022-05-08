const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Event, Venue, RSVP, Table, Seat } = require('../../db/models');

const router = express.Router();

/******************** EVENTS ********************/
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

// router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
//   const events = await Event.findByPk(req.params.id, {
//     include: [Venue, User]
//   });
//   // const rsvps = await RSVP.findAll();
//   return res.json({events})
// }));

router.post('/', requireAuth , validateEvent, asyncHandler(async (req, res) => {
  const { name, date, details, dresscode, venueId } = req.body;
  const userId = req.user.id;

  const event = await Event.create({
    name, date, details, dresscode, userId, venueId
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


/******************** TABLES ********************/
router.get('/:id/tables', requireAuth, asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const eventId = req.params.id;

  const tables = await Table.findAll({
    where: {eventId},
    include: [Seat]
  });
  return res.json(tables)
}));

// router.post('/', requireAuth, asyncHandler(async (req, res) => {
//   const { plusOne, selfDietary, plusOneDietary, notes, eventId } = req.body;
//   const userId = req.user.id;
//   // const eventId = req.params.id

//   const table = await Table.create({
//     plusOne, selfDietary, plusOneDietary, notes, eventId, userId,
//   });

//   return res.json(table);
// }));

// router.put('/:id(\\d+)', requireAuth, asyncHandler(async function (req, res) {
//   const table = await Table.findByPk(req.params.id);
//   const updatedTable = await table.update(req.body);
//   console.log(req.params.rsvpId)
//   return res.json(updatedTable);
// }));

// router.delete('/:id(\\d+)', requireAuth, asyncHandler(async function (req, res) {
//   const table = await Table.findByPk(req.params.id);
//   await table.destroy();
//   return res.json(table);
// }))

module.exports = router;
