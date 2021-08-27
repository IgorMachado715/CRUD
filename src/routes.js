const { route }  = require('./app');
const routes = require('express').Router();
const ProductController = require('./app/controllers/ProductController')

routes.get('/products', ProductController.index);
routes.get('/products/:_id', ProductController.show);
routes.post('/products', ProductController.create);
routes.put('/products/:_id', ProductController.update);
routes.delete('/products/:_id', ProductController.delete);

module.exports = routes;

