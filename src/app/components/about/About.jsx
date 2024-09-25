'use client';
import './about.css';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';

const About = () => {

    const { theme } = useStoreTheme();
    const { currentLenguaje } = useStoreLenguaje();
    const fechaNacimiento = new Date('2000-05-22');
    function validarEdad(fechaNacimiento) {
        const fechaActual = new Date();

        // Calcula la diferencia en años
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

        // Ajusta si la persona no ha cumplido años este año
        const mesActual = fechaActual.getMonth();
        const diaActual = fechaActual.getDate();
        const mesNacimiento = fechaNacimiento.getMonth();
        const diaNacimiento = fechaNacimiento.getDate();

        if (mesNacimiento > mesActual || (mesNacimiento === mesActual && diaNacimiento > diaActual)) {
            edad--;
        }

        return edad;
    }
    console.log(validarEdad(fechaNacimiento));

    const education = [
        {
            name: "freeelance",
            title: currentLenguaje === "es" ? "Desarrollador FullStack - Actual" : "FullStack Developer - Actually",
            place: "",
            date: "2022 - 2024"
        },
        {
            name: "Education",
            title: currentLenguaje === "es" ? "Tecnologo. Analista Desarrollador De Sistemas De Informacion" : "Technologist. Information Systems Analyst Developer",
            place: "SENA",
            date: "2018"
        }
    ];
    
    const acerca = currentLenguaje === "es" ? "Acerca de mí" : "About me";
    const parrafo1 = currentLenguaje === "es"

    ? `Soy un apasionado desarrollador de ${validarEdad(fechaNacimiento)} años, con un profundo interés y curiosidad por el fascinante mundo del desarrollo de software. Siempre busco adquirir nuevos conocimientos y habilidades que me impulsen en mi carrera. A lo largo de mi trayectoria, he desarrollado una sólida base en el ámbito FullStack, contribuyendo en equipos de trabajo y creando soluciones creativas y efectivas.
He participado en diversas disciplinas y actividades que han fortalecido mis cualidades personales, como la disciplina, la constancia y la dedicación para alcanzar mis objetivos. Con un enfoque constante en la superación, estoy decidido a expandir mis horizontes y seguir creciendo en el apasionante mundo del desarrollo.`
        : `I am a passionate developer of ${validateAge(dateBirth)} years, with a deep interest and curiosity for the fascinating world of software development. I am always looking to acquire new knowledge and skills that will propel me in my career. Throughout my career, I have developed a solid foundation in the FullStack field, contributing to work teams and creating creative and effective solutions.
I have participated in various disciplines and activities that have strengthened my personal qualities, such as discipline, perseverance and dedication to achieve my goals. With a constant focus on self-improvement, I am determined to expand my horizons and continue growing in the exciting world of development.`;
    
    const parrafo2 = currentLenguaje === "es"
        ? "Mi trayectoria no solo se ha centrado en la técnica; he cultivado habilidades personales como la disciplina, la constancia y la dedicación, que son fundamentales para alcanzar cualquier objetivo. Estoy comprometido con la excelencia y siempre busco superar mis propios límites. Mi meta es expandir mis horizontes y contribuir a proyectos que no solo desafíen mis capacidades, sino que también impacten positivamente en la comunidad tecnológica."
        : "My career has not only focused on technique; I have cultivated personal skills such as discipline, perseverance and dedication, which are essential to achieve any goal. I am committed to excellence and always seek to surpass my own limits. My goal is to expand my horizons and contribute to projects that not only challenge my capabilities, but also positively impact the technology community.";
    
    const parrafo3 = currentLenguaje === "es"
        ? "Estoy emocionado por las oportunidades que se avecinan y por seguir creciendo en este apasionante viaje."
        : "I am excited about the opportunities ahead and continuing to grow on this exciting journey.";
    
    const educacion = currentLenguaje === "es" ? "Educación" : "Education";
    const tecnologias = currentLenguaje === "es" ? "Tecnologías" : "Technologies";
    
    return (
        <div className={`patherAbout ${theme}`}>
            <section>
                <article className="about">
                    <h2>{acerca}</h2>
                    <p>{parrafo1}</p>
                    <p>{parrafo2}</p>
                    <p>{parrafo3}</p>
                </article>
                <article className="education">
                    {education.map((edu, index) => (
                        <div className={`jobFather ${theme}`} key={index}>
                            <div className="verticalLine"></div>
                            <div className="verticalContex">
                                <p>{edu.date} {edu.name}</p>
                                
                                <h3>{edu.title} {edu.place ? `- ${edu.place}` : ''}</h3>
                               
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        </div>
    );
    }

export default About;
