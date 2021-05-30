import './Filtro.css';
import { AiOutlineClose } from "react-icons/ai";

export const Filtro = ({ data, field, setModal, setDataFilter }) => {
    let criterio = [], aux = [];
    return (
        <div className='filtro-conteiner'>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <AiOutlineClose className='close' onClick={()=>setModal(false)}/>
                    <form>
                        {aux = data.map((d) => { return d[field] })}
                        {aux.forEach((x) => {
                            !criterio.includes(x)? criterio.push(x):console.log('salta');
                        })}
                        {criterio.map((d, i) => {
                            return (
                                <label className='radio-label' key={i} htmlFor=''>
                                    <input type='radio' key={i} name={field} id={d}
                                    onClick={() => setDataFilter(d)}></input>
                                    {d}<br></br>
                                </label>
                                )
                            })}
                    </form>
                </div>
            </div>
        </div>
    )

}