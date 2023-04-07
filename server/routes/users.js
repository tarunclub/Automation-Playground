const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to the MERN stack app!' });
});

module.exports = router;
