const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/add-user', (req, res) => {
  res.render('addUser');
});

router.post('/add-user', async (req, res) => {
  const { nama, password } = req.body;
  try {
    await db.execute('INSERT INTO user (nama, password) VALUES (?, ?)', [nama, password]);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Database Error: ' + err.message);
  }
});

module.exports = router;
