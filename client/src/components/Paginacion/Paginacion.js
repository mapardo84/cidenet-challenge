import './Paginacion.css';

const Paginacion = function ({ totalEmployees, paginate }) {
    const pageNumbers = [];
    //Se calcula el número de páginas, según la cantidad de empleados total a mostrar
    for (let i = 1; i <= Math.ceil(totalEmployees/10); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className='pages'>
            {pageNumbers.map( x => (
                <span key={x}>
                    <a className='page' onClick={() => paginate(x)} href='#!'>{x}</a>
                </span>
            ))}
        </div>
    )
}

export default Paginacion;