import './App.css';
import { useState } from 'react';
import { Empleados } from './components/Empleados/Empleados';
import { Registro } from './components/Registro/Registro';

function App() {
  const [ registro, setRegistro ] = useState(false);
  return (
    <div className="App">
      <div className='nav-app'>
        <button id='add-boton' onClick={() => setRegistro(true)}>Agregar empleado</button>
        <h2 id='nav-title'>CIDENET / EMPLEADOS</h2>
      </div>
      {!registro && <Empleados/>}
      {registro && <Registro setRegistro={setRegistro}/>}
    </div>
  );
}

export default App;
