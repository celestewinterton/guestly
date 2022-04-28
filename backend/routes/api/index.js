const router = require('express').Router();

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

// console test to make sure api route works
// fetch('/api/test', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
//   },
//   body: JSON.stringify({ hello: 'world' })
// }).then(res => res.json()).then(data => console.log(data));

module.exports = router;
