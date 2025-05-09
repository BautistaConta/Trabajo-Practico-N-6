const express = require('express');
const app = express();
const productRoutes = require('./controllers/productController');

app.use(express.json());
app.use('/', productRoutes);

app.listen(3002, () => console.log('App Productos en puerto 3002'));
