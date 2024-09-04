import Image from 'next/image';
import './burguer.css';

const Burguer = (
    {
        isOpen,
        closeMenu,
        inicio,
        acerca,
        proyectos,
        contacto,
        tema,
        idioma
    }
) => {

    if (isOpen) return;

    return (
        <div className="burguerContainer" >
            <i onClick={closeMenu} className="fa-solid fa-bars"></i>
            <ul>
                <li onClick={() => inicio.fn()} ><p>{inicio.texto.toUpperCase()}</p></li>
                <li onClick={() => acerca.fn()} ><p>{acerca.texto.toUpperCase()}</p></li>
                <li onClick={() => proyectos.fn()} ><p>{proyectos.texto.toUpperCase()}</p></li>
                <li onClick={() => contacto.fn()} ><p>{contacto.texto.toUpperCase()}</p></li>
                <li onClick={() => tema.fn()} ><i className={tema.claseIcon + tema.clase}></i></li>
                <li>
                    <div className='currentLenguajeDiv' >
                        <span>{idioma.texto.toUpperCase()} </span>
                        <Image onClick={idioma.fn} src={idioma.claseIcon} width={20} height={20} alt={idioma.texto} />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Burguer
