import './Borrar.css';
import { AiOutlineClose } from "react-icons/ai";

export const Borrar = ({ id, setModal, setAccept }) => {
  
    return (
        <div className='filtro-conteiner'>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <AiOutlineClose className='close' onClick={() => { 
                        setModal(false);
                    }}/>
                    <h4>¿Está seguro que quiere borrar el empleado {id}?</h4>
                    <button onClick={() => {
                        setModal(false);
                        setAccept(true);
                    }}>Aceptar</button>
                    <button onClick={() => setModal(false)}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}