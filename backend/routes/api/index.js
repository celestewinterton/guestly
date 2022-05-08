const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const eventsRouter = require('./events.js');
const rsvpsRouter = require('./rsvps');
const tablesRouter = require('./tables');
// const seatsRouter = require('./seats')
const venuesRouter = require('./venues')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/events', eventsRouter);
router.use('/rsvps', rsvpsRouter);
router.use('/tables', tablesRouter);
// router.use('/seats', seatsRouter);
router.use('/venues', venuesRouter);

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
