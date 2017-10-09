/* eslint-disable react/jsx-filename-extension */

const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {

  res.render('index', {
    title: 'ExtraLife 2017',
  });
});

module.exports = router;
