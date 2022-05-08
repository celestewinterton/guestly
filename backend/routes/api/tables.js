const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Event, Venue, RSVP, Table, Seat } = require('../../db/models');

const router = express.Router();

// router.get('/', asyncHandler(async (req, res) => {
//   const userId = req.user.id;
//   const eventId = req.params.id;
//   console.log("========================================")
//   console.log("====================>", req)
//   console.log("========================================")
//   const tables = await Table.findAll({
//     // where: {eventId},
//     // include: [Seat]
//   });
//   return res.json(tables)
// }));

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
