const express = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');

const routes = express.Router();

const ProdutoController = require('./controllers/ProdutoController');

routes.post('/produto', multer(multerConfig).single('file'), ProdutoController.store);

module.exports = routes;