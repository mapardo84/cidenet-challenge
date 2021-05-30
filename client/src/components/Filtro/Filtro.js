import './Filtro.css';
import { AiOutlineClose } from "react-icons/ai";

export const Filtro = ({ data, field, setField, setModal, setDataFilter }) => {
    let criterio = [];
    const aux = data.map((d) => { 
        return d[field]
    });
    
    return (
        <div className='filtro-conteiner'>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <AiOutlineClose className='close' onClick={() => { 
                        setModal(false);
                        setField('');
                    }}/>
                    <h4>Filtro por {field}</h4>
                    {aux.forEach((x) => {
                        !criterio.includes(x)? criterio.push(x):console.log('salta');
                    })}
                    {criterio.map((d, i) => {
                        return (
                            <label className='radio-label' key={i}>
                                <input type='radio' key={i} name={field} id={d}
                                onClick={() => {
                                    setDataFilter(d);
                                    setModal(false);
                                }}></input>
                                {d}<br></br>
                            </label>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}