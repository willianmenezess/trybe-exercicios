/* eslint-disable arrow-body-style */
/* eslint-disable no-tabs */
const express = require('express');

const activitiesRoutes = require('./routes/activitiesRoutes');

const app = express();

app.use(express.json());

app.use(activitiesRoutes);

module.exports = app;