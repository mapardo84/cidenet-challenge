import './Empleados.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillDelete, AiFillEdit, AiFillFilter } from "react-icons/ai";
import { Filtro } from '../Filtro/Filtro';
import { Borrar } from '../Borrar/Borrar';
import Paginacion from '../Paginacion/Paginacion';

export const Empleados = () => {
    const [employees, setEmployees] = useState([]);
    const [toShow, setToShow] = useState([]);

    const [field, setField] = useState('');
    const [dataFilter, setDataFilter] = useState('');
    const [modalFilter, setModalFilter] = useState(false);
    const [resetFilter, setResetFilter] = useState(false);

    const [ currentPage, setCurrentPage ] = useState(1);
    const indexLastEmployee = currentPage * 10;
    const indexFirstEmployee = indexLastEmployee - 10;
    // const [ employeesQty, setEmployeesQty ] = useState(0);
    const paginate = page => setCurrentPage(page);

    const [modalDelete, setModalDelete] = useState(false);
    const [toDelete, setToDelete] = useState(0);
    const [accept, setAccept] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            try{
                const res = await axios.get('http://localhost:3001/');
                setEmployees(res.data);
                setToShow(res.data.slice(indexFirstEmployee, indexLastEmployee));
            } catch (e) { console.error('Problema al acceder a la API',e) }
        }
        if (!dataFilter) fetchApi();
        else {
            setToShow(employees.filter((e) => {
                return e[field] === dataFilter    
            }));
        }
    }, [accept, indexFirstEmployee, indexLastEmployee, dataFilter, resetFilter]);

    useEffect(() => {
        const fetchApi = async () => {
            try{
                await axios.delete('http://localhost:3001/empleado/' + toDelete);
            } catch (e) { console.error('Problema al acceder a la API',e) }
        }
        if (accept && toDelete) { 
            fetchApi();
            setAccept(false);
        }
    }, [accept]);

    return (
        <div className='employees-conteiner'>
            {dataFilter && <button style={{width: '10%', alignSelf: 'center'}} onClick={() => {
                setResetFilter(true);
                setDataFilter('');
            }}>Limpiar filtro</button>}
            <table border='1'>
                <caption>Lista de empleados CIDENET</caption>
                <tbody>
                    <tr key='0'>
                        <td></td>                   {/*Cabecera de la tabla*/}
                        <th><AiFillFilter style={{cursor: 'pointer'}} onClick={() => {
                            setModalFilter(true);
                            setField('name1');
                        }}/> 1° nombre</th>
                        <th><AiFillFilter style={{cursor: 'pointer'}} onClick={() => {
                            setModalFilter(true);
                            setField('name2');
                        }}/> 2° nombre</th>
                        <th><AiFillFilter style={{cursor: 'pointer'}} onClick={() => {
                            setModalFilter(true);
                            setField('lastName1');
                        }}/> 1° apellido</th>
                        <th><AiFillFilter style={{cursor: 'pointer'}} onClick={() => {
                            setModalFilter(true);
                            setField('lastName2');
                        }}/> 2° apellido</th>
                        <th><AiFillFilter style={{cursor: 'pointer'}} onClick={() => {
                            setModalFilter(true);
                            setField('country');
                        }}/> País</th>
                        <th><AiFillFilter style={{cursor: 'pointer'}} onClick={() => {
                            setModalFilter(true);
                            setField('idType');
                        }}/> Tipo de ID</th>
                        <th><AiFillFilter style={{cursor: 'pointer'}} onClick={() => {
                            setModalFilter(true);
                            setField('id');
                        }}/> # ID</th>
                        <th><AiFillFilter style={{cursor: 'pointer'}} onClick={() => {
                            setModalFilter(true);
                            setField('email');
                        }}/> E-mail</th>
                        <th>Fecha ingreso</th>
                        <th ><AiFillFilter style={{cursor: 'pointer'}} onClick={() => {
                            setModalFilter(true);
                            setField('area');
                        }}/> Área</th>
                        <th><AiFillFilter style={{cursor: 'pointer'}} onClick={() => {
                            setModalFilter(true);
                            setField('status');
                        }}/> Estado</th>
                        <th>Fecha registro</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                    </tr>
                    {toShow.length && toShow.map((e, i) => {
                        return (
                            <tr key={i}>                    {/*Datos de la tabla*/}
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
                                <td key='13'><AiFillEdit style={{cursor: 'pointer'}}/></td>
                                <td key='14'><AiFillDelete style={{cursor: 'pointer'}} onClick={() => {
                                    setModalDelete(true);
                                    setToDelete(e.id);
                                }}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {modalFilter && <Filtro 
                data={employees} setModal={setModalFilter} setDataFilter={setDataFilter}
                field={field} setField={setField}
                />}
            
            {modalDelete && <Borrar 
                id={toDelete} setModal={setModalDelete} setAccept={setAccept}
                />}
            
            <div style={{display: 'grid', gridTemplateColumns: 'auto', textAlign: 'center'}}>   
                <p id='games-page'>{currentPage}</p>     
                <Paginacion totalEmployees={employees.length} paginate={paginate}/>
            </div>
        </div>
    )
}