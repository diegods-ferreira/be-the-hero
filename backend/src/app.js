// Constante em que ficará todas as funcionalidades do Express
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes'); // Importando as rotas

// Constante em que cria-se a aplicação em si e todas as suas funcionalidades
const app = express();

// Informar para a aplicação que todas as requisições serão realizadas em JSON
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;