const express = require('express');
const app = express();
const personRoutes = require('./controllers/personController');

app.use(express.json());
app.use('/', personRoutes);

app.listen(3001, () => console.log('App Personas en puerto 3001'));
