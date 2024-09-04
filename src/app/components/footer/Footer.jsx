'use client';
import Link from 'next/link';
import './footer.css';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';

const Footer = () => {

  const { theme } = useStoreTheme();
  const { currentLenguaje } = useStoreLenguaje();

  const parrafo = currentLenguaje === "es"
    ? "Copyright © Lewisv4. Todos los derechos reservados."
    : "Copyright © Lewisv4. All rights reserved.";

  return (
    <div className='fatherFooter' >
      <div className={'footer ' + theme} >
        <h5>
          <Link href='https://www.linkedin.com/in/luis-carlos-rodriguez-a885a61a6/' target='_BLANK' ><i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link href='https://github.com/lewisv4' target='_BLANK'>
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link href='mailto:lewisv4re@hotmail.com'>
            <i className="lastIcon  fa-solid fa-envelope"></i>
          </Link>
        </h5>
      </div>
    </div>
  )
}

export default Footer;
