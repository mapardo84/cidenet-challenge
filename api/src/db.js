require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/cidenet`, { 
    logging: false,
    native: false,
});

//Probando la conexión con la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Successful connection to the database');
  })
  .catch(e => {
    console.error('Connection to the database unsuccessful', e);
  });

//Modelo de tabla de empleados
const Empleado = sequelize.define('empleado', {
    name1:     { type: DataTypes.STRING, allowNull: false },
    name2:     { type: DataTypes.STRING, allowNull: true },
    lastName1: { type: DataTypes.STRING, allowNull: false },
    lastName2: { type: DataTypes.STRING, allowNull: false },
    country:   { type: DataTypes.TEXT,   allowNull: false },
    idType:    { type: DataTypes.STRING, allowNull: false },
    id:        { type: DataTypes.STRING, primaryKey: true, allowNull: false, unique: true, validate: { isAlphanumeric: true } },
    email:     { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true} },
    startDate: { type: DataTypes.DATEONLY, allowNull: false, validate: { isDate: true } },
    area:      { type: DataTypes.STRING, allowNull: false },
    status:    { type: DataTypes.ENUM, values: ['active', 'inactive'], allowNull: false },
    regDate:   { type: DataTypes.STRING, allowNull: false },
  }, { timestamps: false });

Empleado.beforeValidate((emp) => {
  const USA = '@cidenet.com.us', COL = '@cidenet.com.co';
    
  if (emp.country === 'colombia') emp.email = emp.email + COL;
  else if (emp.country === 'usa') emp.email = emp.email + USA;

  emp.name1 = emp.name1.toUpperCase();
  emp.name2 = emp.name2.toUpperCase();
  emp.lastName1 = emp.lastName1.toUpperCase();
  emp.lastName2 = emp.lastName2.toUpperCase();
})


module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    Empleado,
    conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};