'use client';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';
import './experience.css';
import Job from './lastjob/Job';
import '@fortawesome/fontawesome-free/css/all.css';

const Experience = () => {

    const { theme } = useStoreTheme();
    const { currentLenguaje } = useStoreLenguaje();
    const experiencia = currentLenguaje === "es" ? "Experiencia laboral" : "Work experience";
    const experiencias = [
        {
            name: "freeelance",
            date: currentLenguaje === "es" ? "Actualmente..." : "Actually...",
            title: currentLenguaje === "es" ? "Desarrollador full-stack Freelance" : "Full-stack developer Freelance",
            description: currentLenguaje === "es" ? "En esta ocasión pude implementar mis conocimientos técnicos para la empresa en la cuál trabajé anteriormente, desarrollando y diseñando un e-commerce web full stack con su respectiva base de datos." : "On this occasion, I was able to apply my technical knowledge for the company I previously worked for, developing and designing a full-stack e-commerce website with its respective database.",
            habilities: currentLenguaje === "es" ? ["desarrollo web", "base de datos", "diseño full-stack"] : ["web development", "database", "full-stack design"],
            type: "laboral",
            link: "https://www.linkedin.com/in/luis-carlos-rodriguez-a885a61a6/"
        },
        {
            name: " ESTRATEGIAS EMPRESARIALES",
            date: "2021 - 2021",
            title: currentLenguaje === "es" ? "Practicas SENA - CONTRATO AUXILIAR DE MESA DE SERVICIOS" : "SENA Internships - SERVICE DESK ASSISTANT CONTRACT",
            description: currentLenguaje === "es" ? "Obtuve experiencia en la atencion al cliente, monitoreo de bases de datos, datacenters, Ocupe el puesto de auxiliar de mesa de ayuda en la la parte de operaciones de tic, implementando nuevas funcionalidades programando robots para su respectivo mantenimiento automatico y sostenibilidad, en la misma empresa me han dado la oportunidad de realizar proyectos por fuera de mi horario laboral para implementar los en la empresa. Logre un amplio conocimiento en el mundo profesional, el funcionamiento de la empresa a nivel nacional..." : "I gained experience in customer service, database monitoring, data centers, I held the position of help desk assistant in the ICT operations department, implementing new functionalities by programming robots for their respective automatic maintenance and sustainability, in the same company I have been given the opportunity to carry out projects outside of my working hours to implement them in the company. I gained extensive knowledge in the professional world, the operation of the company at a national level...",
            habilities: currentLenguaje === "es" ? ["atención al cliente", "comunicación efectiva", "resolución de conflictos","gestión del tiempo", "organización", "trabajo en equipo"] : ["customer service", "communication skills", "conflict resolution","time management", "organization", "team work"],
            type: "laboral",
            link: "https://estrategiasempresariales.co/"
        },       
        {
            name: " ESTRATEGIAS EMPRESARIALES",
            date: "2021 - 2022",
            title: currentLenguaje === "es" ? "CONTRATO AUXILIAR DE MESA DE SERVICIOS" : "SERVICE DESK ASSISTANT CONTRACT",
            description: currentLenguaje === "es" ? "Obtuve experiencia en la atencion al cliente, monitoreo de bases de datos, datacenters, Ocupe el puesto de auxiliar de mesa de ayuda en la la parte de operaciones de tic, implementando nuevas funcionalidades programando robots para su respectivo mantenimiento automatico y sostenibilidad, en la misma empresa me han dado la oportunidad de realizar proyectos por fuera de mi horario laboral para implementar los en la empresa. Logre un amplio conocimiento en el mundo profesional, el funcionamiento de la empresa a nivel nacional..." : "I gained experience in customer service, database monitoring, data centers, I held the position of help desk assistant in the ICT operations department, implementing new functionalities by programming robots for their respective automatic maintenance and sustainability, in the same company I have been given the opportunity to carry out projects outside of my working hours to implement them in the company. I gained extensive knowledge in the professional world, the operation of the company at a national level...",
            habilities: currentLenguaje === "es" ? ["gestión del tiempo", "organización", "trabajo en equipo"] : ["time management", "organization", "team work"],
            type: "laboral",
            link: "https://estrategiasempresariales.co/"
        },
        {
            name: " ESTRATEGIAS EMPRESARIALES",
            date: "2022 - 2022",
            title: currentLenguaje === "es" ? "CONTRATO ANALISTA DE OPERACIONES TECNOLOGICAS" : "TECHNOLOGICAL OPERATIONS ANALYST CONTRACT",
            description: currentLenguaje === "es" ? "Obtuve experiencia en el manejo de Bases de datos relacionales como lo son oracle y logicamatematica para realizar calculos en dichos frameworks poseo un conocimiento en de programacion en scripts en bash de linux y trabajo en equipo." : "I gained experience in managing relational databases such as Oracle and Logica Matematica to perform calculations in these frameworks. I have knowledge of programming in Linux bash scripts and teamwork.",
            habilities: currentLenguaje === "es" ? ["gestión del tiempo", "organización", "trabajo en equipo","oracle","PLSQL"] : ["time management", "organization", "team work","oracle","PLSQL"],
            type: "laboral",
            link: "https://estrategiasempresariales.co/"
        },
        {
            name: " ESTRATEGIAS EMPRESARIALES",
            date: "2022 - 2022",
            title: currentLenguaje === "es" ? "CONTRATO ANALISTA DE OPERACIONES TECNOLOGICAS" : "TECHNOLOGICAL OPERATIONS ANALYST CONTRACT",
            description: currentLenguaje === "es" ? "Obtuve experiencia en el manejo de Bases de datos relacionales como lo son oracle y logicamatematica para realizar calculos en dichos frameworks poseo un conocimiento en de programacion en scripts en bash de linux y trabajo en equipo. contacto Jefe Inmediato: Steven Paladines +57 3155711088" : "I gained experience in managing relational databases such as Oracle and Logica Matematica to perform calculations in these frameworks. I have knowledge of programming in Linux bash scripts and teamwork. Contact Immediate Boss: Steven Paladines +57 3155711088",
            habilities: currentLenguaje === "es" ? ["gestión del tiempo", "organización", "trabajo en equipo","oracle","PLSQL"] : ["time management", "organization", "team work","oracle","PLSQL"],
            type: "laboral",
            link: "https://estrategiasempresariales.co/"
        },
        {
            name: " ESTRATEGIAS EMPRESARIALES",
            date: "2022 - 2023",
            title: currentLenguaje === "es" ? "CONTRATO ANALISTA DESARROLADOR DE SOFTWARE" : "SOFTWARE DEVELOPER ANALYST CONTRACT",
            description: currentLenguaje === "es" ? "Obtuve Experiencia en maquetacion y estructuracion de prototipos funcionales a pedido del cliente, un conocimiento de JPA en SPRINGBOOT (BACKEND), Conocimiento mas amplio en ANGULARJS (FRONTEND) realizando vistas modulares, responsive dedicadas a un mejor concepto de estructuración acorde a los requerimientos presentados, realizacion de esquemas y graficas, utilizacion de frameworks y escalabilidad en software.  contacto Jefe Inmediato: Cesar Giraldo +57 3182289967" : "I gained experience in layout and structuring of functional prototypes at the request of the client, a knowledge of JPA in SPRINGBOOT (BACKEND), broader knowledge in ANGULARJS (FRONTEND) creating modular, responsive views dedicated to a better concept of structuring according to the requirements presented, making diagrams and graphics, use of frameworks and scalability in software. Contact Immediate Boss: Cesar Giraldo +57 3182289967",
            habilities: currentLenguaje === "es" ? ["gestión del tiempo", "organización", "trabajo en equipo","oracle","PLSQL","Angular","Eclipse","Springboot5","Typescript","java"] : ["customer service", "communication skills", "conflict resolution","time management", "organization", "team work","customer service", "communication skills", "conflict resolution","oracle","PLSQL","Angular","Eclipse","Springboot5","Typescript","java"],
            type: "laboral",
            link: "https://estrategiasempresariales.co/"
        },
        {
            name: "La Fortuna SAS",
            date: "2023 - 2023",
            title: currentLenguaje === "es" ? "CONTRATO ANALISTA DESARROLADOR DE SOFTWARE" : "SOFTWARE DEVELOPER ANALYST CONTRACT",
            description: currentLenguaje === "es" ? " Obtuve Experiencia mas amplia en  en ANGULARJS (FRONTEND) realizando vistas modulares, responsive dedicadas a un mejor concepto de estructuración acorde a los requerimientos presentados realizando mejoras y actualizaciones en el apartado visual, utilizacion de frameworks y escalabilidad en software." : "I gained broader experience in ANGULARJS (FRONTEND) creating modular, responsive views dedicated to a better structuring concept according to the requirements presented, making improvements and updates in the visual section, use of frameworks and scalability in software.",
            habilities: currentLenguaje === "es" ? ["atención al cliente", "comunicación efectiva", "resolución de conflictos","gestión del tiempo", "organización", "trabajo en equipo","MongoDB","MariaDB","Angular","PHP","Typescript",] : ["customer service", "communication skills", "conflict resolution","time management", "organization", "team work","customer service", "communication skills", "conflict resolution","MongoDB","MariaDB","Angular","PHP","Typescript",],
            type: "laboral",
            link: "https://acertemos.com/nosotros/"
        }
    ]

    return (
        <div className={`experienceContainer ${theme}`} >
            <h2> <i class="fa-solid fa-briefcase"></i> {experiencia}</h2>
            <ol>
                {
                    experiencias.map(experience => (
                        <li>
                            <Job {...experience} />
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}

export default Experience;
