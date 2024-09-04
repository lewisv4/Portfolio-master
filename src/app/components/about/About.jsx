'use client';
import './about.css';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';

const About = () => {

    const { theme } = useStoreTheme();
    const { currentLenguaje } = useStoreLenguaje();

    const education = [
        {
            name: currentLenguaje === "es" ? "Tec. Desarrollo de software" : "Tech. Software development",
            place: "UPE",
            date: currentLenguaje === "es" ? "2024 - actual" : "2024 - actually"
        },
        {
            name: currentLenguaje === "es" ? "Desarrollador web" : "Web developer",
            place: "",
            date: "2023 - 2023"
        },
    ];

    const acerca = currentLenguaje === "es" ? "Acerca de mí" : "About me";
    const parrafo1 = currentLenguaje === "es"
        ? "Apasionado del desarrollo web con incesante interés y curiosidad por este hermoso mundo siempre queriendo adquirir nuevos conocimientos y habilidades que me potencien en carrera."
        : "Passionate about web development with an insatiable interest and curiosity for this beautiful world, always eager to acquire new knowledge and skills that empower me in my career.";

    const parrafo2 = currentLenguaje === "es"
        ? "En mi camino de aprendizaje, pude adquirir conocimientos sólidos en el campo, aportando en equipos de trabajo creando soluciones creativas y consistentes mayormente orientadas al front-end."

        : "In my learning journey, I was able to gain solid knowledge in the field, contributing to teamwork by creating creative and consistent solutions, primarily focused on the front-end.";
    const parrafo3 = currentLenguaje === "es"
        ? "A lo largo de mi vida he llevado a cabo disciplinas y actividades que fortalecieron muchos de mis aspectos personales como la disciplina, la constancia y la dedicación para cumplir cualquier objetivo."

        : "Throughout my life, I have engaged in disciplines and activities that strengthened many aspects of my personality, such as discipline, perseverance, and dedication to achieve any goal.";
    const educacion = currentLenguaje === "es" ? "Educación" : "Education";
    const tecnologias = currentLenguaje === "es" ? "Tecnologías" : "Technologies";

    return (
        <div className={`patherAbout ${theme}`} >
            <section>
                <article className='about' >
                    <h2>{acerca}</h2>
                    <p>{parrafo1}</p>
                    <p>{parrafo2}</p>
                    <p>{parrafo3}</p>
                </article>
                <article className='education' >
                    {
                        education.map((edu, index) => (
                            <div className={`jobFather ${theme}`} key={index} >
                                <div className='verticalLine' ></div>
                                <h3>{edu.name}{edu.place.length && ` - ${edu.place}` || ""}</h3>
                                <p>{edu.date}</p>
                            </div>
                        ))
                    }
                </article>
            </section>
        </div>
    )
}

export default About;
