'use client';
import Link from 'next/link';
import './contact.css';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {

  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const msj1 = currentLenguaje === "es" ? "Nombre inválido." : "Invalid name.";
    const msj2 = currentLenguaje === "es" ? "Email inválido." : "Invalid email.";
    const msj3 = currentLenguaje === "es" ? "Mensaje inválido." : "Invalid message.";

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 1) {
      Swal.fire({
        icon: "error",
        title: msj1,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      return;
    }

    if (!regexEmail.test(email)) {
      Swal.fire({
        icon: "error",
        title: msj2,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      return;
    }

    if (mensaje.length < 1) {
      Swal.fire({
        icon: "error",
        title: msj3,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      return;
    }


    setName('');
    setEmail('');
    setMensaje('');

    emailjs.sendForm('service_kwqupbl', 'template_9hrldjg', form.current, 'dAbYhg4Q92G393ame')
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado con éxito!",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });

      }, (error) => {
        console.log(error)
      });
  }

  const { theme } = useStoreTheme();
  const { currentLenguaje } = useStoreLenguaje();

  const text1 = currentLenguaje === "es" ? "VAMOS A " : "LET'S GO ";
  const text2 = currentLenguaje === "es" ? "TRABAJAR" : "TO WORK";
  const frase = currentLenguaje === "es"
    ? "Llevemos tu proyecto al siguiente nivel"
    : "Let's take your project to the next level";
  const ph1 = currentLenguaje === "es" ? "Nombre" : "Name";
  const ph3 = currentLenguaje === "es" ? "Mensaje" : "Message";
  const boton = currentLenguaje === "es" ? "Enviar" : "Send";


  return (
    <div className={`contactContainer ${theme}`}>

      <section>

        <article className='textAndLinks'>
          <div>
            <h1>{text1} <br /> {text2}</h1>
            <p className='paragraph'>{frase}</p>
          </div>
          <div>
            <p className='dataContact'>
              <span><i className="lastIcon  fa-solid fa-envelope"></i></span>
              martinsdiego0513@outlook.es
            </p>
            <p className='dataContact'>
              <span><i className="lastIcon  fa-solid fa-location-dot"></i></span>
              Buenos Aires, Argentina
            </p>
          </div>
          <div className='redes'>
            <Link href='https://www.linkedin.com/in/diego-martins-563954278/' target='_BLANK' >
              <span>
                <i className="fa-brands fa-linkedin"></i>
              </span>
            </Link>
            <Link href='https://github.com/MartinsDiego17' target='_BLANK'>
              <span>
                <i className="fa-brands fa-github"></i>
              </span>
            </Link>
            <Link href='mailto:martinsdiego0513@outlook.es'>
              <span>
                <i className="lastIcon  fa-solid fa-envelope"></i>
              </span>
            </Link>
          </div>
        </article>

        <article className='formContact'>
          <form ref={form} onSubmit={sendEmail} >
            <input autoComplete='off'   value={name} type="text" placeholder={ph1} name='user_name' onChange={(e) => setName(e.target.value)} />
            <input autoComplete='off' value={email} type="email" placeholder='Email' name="user_email" onChange={(e) => setEmail(e.target.value)} />
            <textarea autoComplete='off' value={mensaje} type="text" placeholder={ph3} name="message" onChange={(e) => setMensaje(e.target.value)} />
            <button>{boton}</button>
          </form>
        </article>

      </section>

    </div>
  )
}

export default Contact;
