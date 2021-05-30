import './Empleados.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export const Empleados = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await axios.get('http://localhost:3001/');
            setEmployees(res.data);
        }
        fetchApi();
    }, []);
    return (
        <div className='employees-conteiner'>
            <table border='1'>
                <caption>Lista de empleados CIDENET</caption>
                <tbody>
                    <tr>
                        <td></td>                   {/*Cabecera de la tabla*/}
                        <th>1° nombre</th>
                        <th>2° nombre</th>
                        <th>1° apellido</th>
                        <th>2° apellido</th>
                        <th>País</th>
                        <th>Tipo de ID</th>
                        <th># ID</th>
                        <th>E-mail</th>
                        <th>Fecha ingreso</th>
                        <th>Área</th>
                        <th>Estado</th>
                        <th>Fecha registro</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                    </tr>
                    {employees.length && employees.map((e, i) => {
                        return (
                            <tr>
                                <th>{i+1}</th>
                                <td>{e.name1}</td>
                                <td>{e.name2}</td>
                                <td>{e.lastName1}</td>
                                <td>{e.lastName2}</td>
                                <td>{e.country}</td>
                                <td>{e.idType}</td>
                                <td>{e.id}</td>
                                <td>{e.email}</td>
                                <td>{e.startDate}</td>
                                <td>{e.area}</td>
                                <td>{e.status}</td>
                                <td>{e.regDate}</td>
                                <td><AiFillEdit/></td>
                                <td><AiFillDelete/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}