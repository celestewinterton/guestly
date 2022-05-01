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

// router.get('/', restoreUser, (req, res) => {
//     const { user } = req;
//     if (user) {
//       return res.json({
//         user: user.toSafeObject()
//       });
//     } else return res.json({});
//   }
// );

// router.post('/', asyncHandler(async (req, res) => {
//   const { name, date, details, dresscode, numberOfTables } = req.body;
//   const event = await Event.signup({ name, date, details, dresscode, numberOfTables });

//   await setTokenCookie(res, event);

//   return res.json({
//     event
//   });
// }));


module.exports = router;
