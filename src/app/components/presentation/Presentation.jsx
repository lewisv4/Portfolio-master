'use client';
import { useState, useEffect } from 'react';
import './presentation.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Link from 'next/link';
import photoPerfil from './photoPerfil.jpg';
import Image from 'next/image';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';

const Presentation = () => {

    const [text, setText] = useState('FULL STACK DEVELOPER');

    const { theme } = useStoreTheme();
    const { currentLenguaje } = useStoreLenguaje();

    const saludo = currentLenguaje === "es" ? "Hola, mi nombre es" : "Hello, my name is";
    const parrafo = currentLenguaje === "es"
        ? 'Apasionado del desarrollo de software con inclinación hacia el desarrollo web'

        : 'Passionate about software development with a focus on web development';
    const descarga = currentLenguaje === "es" ? "Curriculum" : "Curriculum";
    const vistaPrevia = currentLenguaje === "es" ? "Vista previa" : "Preview";
    const openToWork = currentLenguaje === "es" ? "Disponible para trabajar" : "Available to work";

    async function downloadCv() {
        try {
            const response = await fetch('/CV_Luis_C_Rodriguez.pdf');
            const fileData = await response.blob();

            const link = document.createElement('a');
            const fileUrl = URL.createObjectURL(fileData);
            link.href = fileUrl;
            link.download = 'CV_Luis_C_Rodriguez.pdf';
            link.click();
            URL.revokeObjectURL(fileUrl);
        } catch (error) {
            console.error('Error al descargar el archivo PDF:', error);
        }
    }

    const handlePreview = () => {
        window.open("file:///C:/Users/test/OneDrive/Escritorio/Curriculums/CV_Luis_C_Rodriguez.pdf");
    }

    return (
        <div className='patherPresentation' >
            <section className={'presentationContainer ' + theme} >
                <article className='namePresentation' >
                    <h1><span className='mensajeSaludo' >{saludo}</span><br />Luis Carlos Rodriguez</h1>
                    <h2>{text}</h2>
                    <p>{parrafo}</p>
                    <div className='openAndRedes' >
                        <h6>{openToWork}</h6>
                        <button>
                            <Link href='https://www.linkedin.com/in/luis-carlos-rodriguez-a885a61a6/' target='_BLANK' >
                                <i className="fa-brands fa-linkedin links "></i><span className='textRed' >Linkedin</span>
                            </Link>
                        </button>
                        <button>
                            <Link href='https://github.com/lewisv4' target='_BLANK'>
                                <i className="fa-brands fa-github links"></i><span className='textRed' >Github</span>
                            </Link>
                        </button>
                        <button>
                            <Link href={'mailto:lewisv4re@hotmail.com'}>
                                <i className="fa-solid fa-envelope links"></i><span className='textRed' >lewisv4re@hotmail.com</span>
                            </Link>
                        </button>


                    </div>
                    <div className='detailsPresentation' >
                        <button onClick={downloadCv} id={theme} >
                            {descarga.toUpperCase()}
                            <i class="fa-regular fa-newspaper iconoCv"></i>
                        </button>
                        <button onClick={handlePreview} className='buttonPreview' id={theme} >
                            {vistaPrevia.toUpperCase()}
                            <i class="fa-regular fa-newspaper iconoCv"></i>
                        </button>
                    </div>
                </article>

                <article className='imagePresentation' >
                    <Image src={photoPerfil} alt='Foto de perfil' id={theme} />
                </article>
            </section>
        </div>
    )
}

export default Presentation
