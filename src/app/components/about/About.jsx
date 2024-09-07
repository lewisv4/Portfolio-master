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
        ? `Soy un chico apasionado del desarrollo de ${validarEdad(fechaNacimiento)} años de edad con incesante interés y curiosidad por este hermoso mundo, siempre queriendo adquirir nuevos conocimientos y habilidades que me potencien en mi carrera.`
        : `I'm a passionate boy of ${validarEdad(fechaNacimiento)} years of age with incessant interest and curiosity for this beautiful world, always wanting to acquire new knowledge and skills to enhance my career.`;
    
    const parrafo2 = currentLenguaje === "es"
        ? "En mi camino de aprendizaje, pude adquirir conocimientos sólidos en el campo, aportando en equipos de trabajo, creando soluciones creativas y consistentes, mayormente orientadas al front-end."
        : "In my learning journey, I gained solid knowledge in the field, contributing to teamwork by creating creative and consistent solutions, primarily focused on the front-end.";
    
    const parrafo3 = currentLenguaje === "es"
        ? "A lo largo de mi vida he llevado a cabo disciplinas y actividades que fortalecieron muchos de mis aspectos personales, como la disciplina, la constancia y la dedicación para cumplir cualquier objetivo."
        : "Throughout my life, I have engaged in disciplines and activities that strengthened many aspects of my personality, such as discipline, perseverance, and dedication to achieving any goal.";
    
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
