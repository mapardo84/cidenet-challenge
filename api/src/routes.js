const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//Se crea el servidor
const server = express();
//Se importan las funciones para la DB
const { addEmployee, getEmployees, updateEmployee, deleteEmployee } = require('./data');

//Middlewares
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

//Rutas
server.get('/', (_req, res) => {
    res.json('Página inicial');
});

server.post('/empleado', (req, res) => {
    const resul = addEmployee(req.body);
    res.json(resul);
});

server.put('/empleado/:id', (req, res) => {
    res.json('Empleado actualizado');
});

server.delete('/empleado/:id', (req, res) => {
    res.json('Empleado actualizado');
});

module.exports = server;