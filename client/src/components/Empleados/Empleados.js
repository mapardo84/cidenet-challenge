import './Empleados.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillDelete, AiFillEdit, AiFillFilter } from "react-icons/ai";

export const Empleados = () => {
    const [employees, setEmployees] = useState([]);
    const [filter, setFilter] = useState({
        filter: '',
        atribute: ''
    });

    useEffect(() => {
        const fetchApi = async () => {
            const res = await axios.get('http://localhost:3001/' + filter.filter + '/' + filter.atribute);
            setEmployees(res.data);
        }
        fetchApi();
    }, []);
    return (
        <div className='employees-conteiner'>
            <table border='1'>
                <caption>Lista de empleados CIDENET</caption>
                <tbody>
                    <tr key='0'>
                        <td></td>                   {/*Cabecera de la tabla*/}
                        <th>1° nombre <AiFillFilter/></th>
                        <th>2° nombre <AiFillFilter/></th>
                        <th>1° apellido <AiFillFilter/></th>
                        <th>2° apellido <AiFillFilter/></th>
                        <th>País <AiFillFilter/></th>
                        <th>Tipo de ID <AiFillFilter/></th>
                        <th># ID <AiFillFilter/></th>
                        <th>E-mail <AiFillFilter/></th>
                        <th>Fecha ingreso</th>
                        <th>Área</th>
                        <th>Estado <AiFillFilter/></th>
                        <th>Fecha registro</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                    </tr>
                    {employees.length && employees.map((e, i) => {
                        return (
                            <tr key={i}>
                                <th>{i+1}</th>
                                <td key='1'>{e.name1}</td>
                                <td key='2'>{e.name2}</td>
                                <td key='3'>{e.lastName1}</td>
                                <td key='4'>{e.lastName2}</td>
                                <td key='5'>{e.country}</td>
                                <td key='6'>{e.idType}</td>
                                <td key='7'>{e.id}</td>
                                <td key='8'>{e.email}</td>
                                <td key='9'>{e.startDate}</td>
                                <td key='10'>{e.area}</td>
                                <td key='11'>{e.status}</td>
                                <td key='12'>{e.regDate}</td>
                                <td key='13'><AiFillEdit/></td>
                                <td key='14'><AiFillDelete/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}