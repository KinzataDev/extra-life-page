/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../public/javascripts/components/app';

const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const markup = renderToString(<App />);

  res.render('index', {
    title: 'ExtraLife 2016',
    markup,
  });
});

module.exports = router;
