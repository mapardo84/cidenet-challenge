import './Empleados.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillDelete, AiFillEdit, AiFillFilter } from "react-icons/ai";
import { Filtro } from '../Filtro/Filtro';

export const Empleados = () => {
    const [employees, setEmployees] = useState([]);
    const [field, setField] = useState('');
    const [dataFilter, setDataFilter] = useState('');
    const [modalFilter, setModalFilter] = useState(false);

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
                    <tr key='0'>
                        <td></td>                   {/*Cabecera de la tabla*/}
                        <th><AiFillFilter/> 1° nombre</th>
                        <th><AiFillFilter/> 2° nombre</th>
                        <th><AiFillFilter/> 1° apellido</th>
                        <th><AiFillFilter/> 2° apellido</th>
                        <th><AiFillFilter/> País</th>
                        <th><AiFillFilter/> Tipo de ID</th>
                        <th><AiFillFilter/> # ID</th>
                        <th><AiFillFilter/> E-mail</th>
                        <th><AiFillFilter/> Fecha ingreso</th>
                        <th ><AiFillFilter style={{cursor: 'pointer'}} onClick={() => {
                            setModalFilter(true);
                            setField('area');
                        }}/> Área</th>
                        <th><AiFillFilter/> Estado</th>
                        <th><AiFillFilter/> Fecha registro</th>
                        <th><AiFillFilter/> Editar</th>
                        <th><AiFillFilter/> Borrar</th>
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
            {modalFilter && <Filtro 
                data={employees} setModal={setModalFilter} setDataFilter={setDataFilter}
                field={field}
                />}
        </div>
    )
}