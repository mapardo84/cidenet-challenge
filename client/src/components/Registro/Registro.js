import { useState } from 'react';
import './Registro.css';
import axios from 'axios';

const formatDate = (t) => {
    let year = t.getFullYear(), 
        month = '', 
        date = t.getDate();
    
    (t.getMonth() + 1) < 10 ? month = '0' + (t.getMonth() + 1) : month = t.getMonth() + 1;
    
    return year + '-' + month + '-' + date;
}

export const Registro = ({ setRegistro }) => {
    let today = new Date();
    let monthAgo = new Date(today.getTime() - (1000*60*60*24*30));
    
    today = formatDate(today);
    monthAgo = formatDate(monthAgo);
    
    const [employee, setEmployee] = useState({
        name1: '',
        name2: '',
        lastName1: '',
        lastName2: '',
        country: '',
        type: '',
        id: '',
        startDate: '',
        area: '',
        status: 'active',
        regTime: ''
    });

    const handleOnChange = (e) => {
        setEmployee({
            ...employee, [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const f = new Date();
        employee.regTime = f.toLocaleString();
        const regEmployee = async (worker) => {
            try {
                const res = await axios.post('http://localhost:3001/empleado', worker);
                if (res.data !== 'id must be unique') {
                    alert('Se agregó correctamente');
                    setRegistro(false);
                } else  alert(res.data);
            } catch (e) { console.error('Hubo problema al enviar el formulario, ', e) }
        }
        regEmployee(employee);
    }
    return (
        <div className='register-conteiner'>
            <h1>Registro de empleados</h1>
            <button className='boton' id='back-boton' onClick={() => setRegistro(false)}>Volver</button>
            <form className='form-inputs' id='registro' onSubmit={handleSubmit}>
                <label htmlFor='name1'>Primer Nombre </label>
                <input className='input-register' required form='registro' onChange={handleOnChange} pattern="[a-zA-Z ]{2,254}" type='text' id='name1' name='name1' value={employee.name1}></input>
                <label htmlFor='name2'>Segundo Nombre </label>
                <input className='input-register' placeholder='opcional' onChange={handleOnChange} pattern="[a-zA-Z ]{2,254}" type='text' id='name2' name='name2' value={employee.name2}></input>
                <label htmlFor='lastName1'>Primer Apellido </label>
                <input className='input-register' onChange={handleOnChange} pattern="[a-zA-Z ]{2,254}" type='text' id='lastName1' name='lastName1' value={employee.lastName1} required></input>
                <label htmlFor='lastName2'>Segundo Apellido </label>
                <input className='input-register' onChange={handleOnChange} pattern="[a-zA-Z ]{2,254}" type='text' id='lastName2' name='lastName2' required value={employee.lastName2}></input>
                <label htmlFor='country'>País </label>
                <select className='input-register' onChange={handleOnChange} id='country' name='country' required value={employee.country}>
                    <option value='void'></option>
                    <option value='colombia'>Colombia</option>
                    <option value='usa'>USA</option>
                </select>
                <label htmlFor='type'>Tipo de identificación </label>
                <select className='input-register' onChange={handleOnChange} id='type' name='type' required value={employee.type}>
                    <option value='void'></option>
                    <option value='CC'>Cédula de ciudadanía</option>
                    <option value='CE'>Cédula de extranjería</option>
                    <option value='Pasaporte'>Pasaporte</option>
                    <option value='Permiso'>Permiso especial</option>
                </select>
                <label htmlFor='id'>Número de Identificación</label>
                <input className='input-register' onChange={handleOnChange} type='text' id='id' name='id' required value={employee.id}></input>
                <label htmlFor='startDate'>Fecha de ingreso</label>
                <input className='input-register' onChange={handleOnChange} type='date' id='startDate' name='startDate' value={employee.startDate} max={today} min={monthAgo}></input>  
                <label htmlFor='area'>Área </label>
                <select className='input-register' onChange={handleOnChange} id='area' name='area' required value={employee.area}>
                    <option value='void'></option>
                    <option value='administración'>Administración</option>
                    <option value='financiera'>Financiera</option>
                    <option value='compras'>Compras</option>
                    <option value='infraestructura'>Infraestructura</option>
                    <option value='operacion'>Operación</option>
                    <option value='talento humano'>Talento Humano</option>
                    <option value='servicios varios'>Servicios Varios</option>
                </select>
                <input className='boton' type='submit' value='Submit'></input>
            </form>
        </div>
    )
}