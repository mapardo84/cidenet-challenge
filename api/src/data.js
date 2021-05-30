const { Empleado } = require('./db.js');

const addEmployee = async (employee) => {
    const { name1, name2, lastName1, lastName2, country, type, id, startDate, area, status, regTime } = employee;
    let email = name1.toLowerCase() + '.' + lastName1.toLowerCase().split(' ').join('');
    
    try {
        const user = await Empleado.findAll({           //Consulta si los primeros nombre y apellido ya existen
            where: { 
                name1: name1.toUpperCase(),
                lastName1: lastName1.toUpperCase()
            } 
        });
        if (user.length) email = email + '.' + user.length;    //Si ya existen, concatena un consecutivo

        const reg = await Empleado.create({
            name1: name1,
            name2: name2,
            lastName1: lastName1,
            lastName2: lastName2,
            country: country,
            idType: type,
            id: id,
            email: email,
            startDate: startDate,
            area: area,
            status: status,
            regDate: regTime,
        });
        console.log('Se registró el empleado ' + reg.name1);
        return reg;
    } catch (e) { 
        console.error('Hubo un problema al registrar el empleado\n', e.errors[0].message);
        const msj = e.errors[0].message;
        return msj;
    } 
}

const getEmployees = () => {

}

const updateEmployee  = (id) => {

}

const deleteEmployee  = (id) => {

}

module.exports = { addEmployee, getEmployees, updateEmployee, deleteEmployee };