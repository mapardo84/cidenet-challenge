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
server.get('/', async (req, res) => {
    const employees = await getEmployees();
    res.json(employees);
});

server.post('/empleado', async (req, res) => {
    const resul = await addEmployee(req.body);
    res.json(resul);
});

server.put('/empleado/:id', async (_req, res) => {
    res.json('Empleado actualizado');
});

server.delete('/empleado/:id', async (req, res) => {
    if (req.params.id) {
        const resul = await deleteEmployee(req.params.id);
        res.json(`Empleado con ID ${req.params.id} borrado`);
    } else {
        res.json('No se ha borrado nada');
    }
});

module.exports = server;