'use client';
import { useState } from 'react';
import './header.css';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';
import { MdOutlineWbSunny } from "react-icons/md";
import lenguajeIcon from './lenguajeIcon.svg';
import Burguer from './burguer/Burguer';
import Image from 'next/image';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState('false');

    const { changeTheme, theme } = useStoreTheme();
    const { changeCurrentLenguaje, currentLenguaje } = useStoreLenguaje();

    const fnChangeCurrentLenguaje = () => {
        changeCurrentLenguaje()
    }
    const fnChangeTheme = (li) => {
        changeTheme();
        const body = document.getElementsByTagName('body')[0];
        if (body.classList[1]) {
            body.classList.remove('bodyLight');
            return;
        }
        body.classList.add('bodyLight')
    }

    const inicio = currentLenguaje === 'es' ? 'Inicio' : 'Home';
    const acerca = currentLenguaje === 'es' ? 'Acerca de mí' : 'About me';
    const proyectos = currentLenguaje === 'es' ? 'Proyectos' : 'Projects';
    const contacto = currentLenguaje === 'es' ? 'Contacto' : 'Contact';

    return (
        <>
            <div className="patherNav">
                <div className={`navContainer ${theme}`} >
                    <ul>
                        <li>{inicio}</li>
                        <li>{acerca}</li>
                        <li>{proyectos}</li>
                        <li onClick={fnChangeTheme}><MdOutlineWbSunny /></li>
                        <li
                            className='lenguaje'
                            onClick={fnChangeCurrentLenguaje} >
                            <Image src={lenguajeIcon} />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
