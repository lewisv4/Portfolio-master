'use client';
import { useState } from 'react';
import './header.css';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';
import { MdOutlineWbSunny } from "react-icons/md";
import lenguajeIcon from './lenguajeIcon.svg';
import Burguer from './burguer/Burguer';
import Image from 'next/image';

const Header = () => {

    const [activeItem, setActiveItem] = useState(null);
  const { changeTheme, theme } = useStoreTheme();
  const { changeCurrentLenguaje, currentLenguaje } = useStoreLenguaje();

  const fnChangeCurrentLenguaje = () => {
    changeCurrentLenguaje();
  };

  const fnChangeTheme = () => {
    changeTheme();
    const body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('bodyLight')) {
      body.classList.remove('bodyLight');
    } else {
      body.classList.add('bodyLight');
    }
  };

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveItem(sectionId);
  };

  const getClassName = (item) => {
    return activeItem === item ? 'active' : '';
  };

  const inicio = currentLenguaje === 'es' ? 'Inicio' : 'Home';
  const experiencia = currentLenguaje === 'es' ? 'Experiencia' : 'Experience';
  const acerca = currentLenguaje === 'es' ? 'Acerca de mí' : 'About me';
  const stack = currentLenguaje === 'es' ? 'Stack' : 'Stack';
  const proyectos = currentLenguaje === 'es' ? 'Proyectos' : 'Projects';
  const contacto = currentLenguaje === 'es' ? 'Contacto' : 'Contact';

  return (
    <div className={`patherNav ${theme}`}>
      <div className={`navContainer ${theme}`}>
        <ul>
          <li className={getClassName('patherPresentation')} onClick={() => handleScroll('patherPresentation')}>{inicio}</li>
          <li className={getClassName('patherAbout')} onClick={() => handleScroll('patherAbout')}>{acerca}</li>
          <li className={getClassName('experienceContainer')} onClick={() => handleScroll('experienceContainer')}>{experiencia}</li>
          <li className={getClassName('stackContainer')} onClick={() => handleScroll('stackContainer')}>{contacto}</li>
          <li className={getClassName('projectsContainer')} onClick={() => handleScroll('projectsContainer')}>{proyectos}</li>
          <li className={getClassName('contactContainer')} onClick={() => handleScroll('contactContainer')}>{contacto}</li>
          <li onClick={fnChangeTheme}><MdOutlineWbSunny /></li>
          <li className='lenguaje' onClick={fnChangeCurrentLenguaje}>
            <Image src={lenguajeIcon} alt="Change language" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header
