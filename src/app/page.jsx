'use client';
import React, { useEffect } from 'react';
import Presentation from "./components/presentation/Presentation";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contacto/Contact";
import Footer from "./components/footer/Footer";
import Stack from "./components/stack/Stack";

const Home = () => {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     // Importar html2pdf solo en el cliente
  //     const html2pdf = require('html2pdf.js');
      
  //     const handleDownloadPageAsPDF = () => {
  //       const element = document.querySelector('.pageContent');
  //       const opciones = {
  //         margin: 0,
  //         filename: 'Curriculum_Luis_Carlos_Rodriguez.pdf',
  //         image: { type: 'png', quality: 1 },
  //         html2canvas: {
  //           scale: 10, // Aumentar la escala para mayor calidad
  //           useCORS: true // Permite cargar imágenes desde otras fuentes si es necesario
  //         },
  //         jsPDF: {
  //           unit: 'px', // Cambiar a 'px' para mantener la consistencia con el diseño de la pantalla
  //           format: [element.scrollWidth, element.scrollHeight], // Ajustar al tamaño del contenido
  //           orientation: 'portrait'
  //         }
  //       };
  //       html2pdf().from(element).set(opciones).save();
  //     }

  //     document.getElementById('pdfButton').addEventListener('click', handleDownloadPageAsPDF);
  //   }
  // }, []);

  return (
    <>
      <div id="patherPresentation" className="pageSection">
        <Presentation />
      </div>
      <div id="patherAbout" className="pageSection">
        <About />
      </div>
      <div id="experienceContainer" className="pageSection">
        <Experience />
      </div>
      <div id="stackContainer" className="pageSection">
        <Stack />
      </div>
      <div id="projectsContainer" className="pageSection">
        <Projects />
      </div>
      <div id="contactContainer" className="pageSection">
        <Contact />
      </div>
      <Footer />
    </>
  );
      }


export default Home;
