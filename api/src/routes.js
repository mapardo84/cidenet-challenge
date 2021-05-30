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
server.get('/:filter/:atribute', async (req, res) => {
    const { filter, atribute } = req.params;
    const employees = await getEmployees(filter, atribute);
    res.json(employees);
});

server.post('/empleado', async (req, res) => {
    const resul = await addEmployee(req.body);
    res.json(resul);
});

server.put('/empleado/:id', (req, res) => {
    res.json('Empleado actualizado');
});

server.delete('/empleado/:id', (req, res) => {
    res.json('Empleado actualizado');
});

module.exports = server;