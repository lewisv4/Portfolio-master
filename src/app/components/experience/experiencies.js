export const getExperiencies = (currentLenguaje) => {
    return [
        {
            name: "La barra boulevard",
            date: "2023 - 2024",
            title: currentLenguaje === "es" ? "Ayudante de cocina" : "Kitchen assistant",
            description: currentLenguaje === "es" ? "en el puesto de ayudante de cocina, desempeñé un rol crucial a la hora de la producción de las tareas en un entorno de alta exigencia. " : "In the role of kitchen assistant, I played a crucial role in task production in a high-demand environment.",
            habilities: currentLenguaje === "es" ? ["gestión del tiempo", "organización", "trabajo en equipo"] : ["time management", "organization", "team work"],
            type: "laboral"
        },
        {
            name: "La barra boulevard",
            date: "2023 - 2024",
            title: currentLenguaje === "es" ? "Mesero" : "waiter",
            description: currentLenguaje === "es" ? "en este puesto, tuve la oportunidad de llevar a cabo tareas relacionadas con la atención al cliente, las cuales me permitieron desarrollar multiples habilidades comunicativas." : "In this position, I had the opportunity to carry out tasks related to customer service, which allowed me to develop multiple communication skills.",
            habilities: currentLenguaje === "es" ? ["atención al cliente", "comunicación efectiva", "resolución de conflictos"] : ["customer service", "communication skills", "conflict resolution"],
            type: "laboral"
        },
        {
            name: "La barra boulevard",
            date: "2024 - 2024",
            title: currentLenguaje === "es" ? "Desarrollador full-stack" : "Full-stack developer",
            description: currentLenguaje === "es" ? "En esta ocasión pude implementar mis conocimientos técnicos para la empresa en la cuál trabajé anteriormente, desarrollando y diseñando un e-commerce web full stack con su respectiva base de datos." : "On this occasion, I was able to apply my technical knowledge for the company I previously worked for, developing and designing a full-stack e-commerce website with its respective database.",
            habilities: currentLenguaje === "es" ? ["desarrollo web", "gestión de base de datos", "diseño full-stack"] : ["web development", "database management", "full-stack design"],
            type: "laboral"
        },
        {
            name: "Prueba",
            date: "2024 - 2024",
            title: currentLenguaje === "es" ? "Trabajo de prueba" : "Test work",
            description: currentLenguaje === "es" ? "En esta ocasión pude implementar mis conocimientos técnicos para la empresa en la cuál trabajé anteriormente, desarrollando y diseñando un e-commerce web full stack con su respectiva base de datos." : "On this occasion, I was able to apply my technical knowledge for the company I previously worked for, developing and designing a full-stack e-commerce website with its respective database.",
            habilities: currentLenguaje === "es" ? ["Lavar platos", "CSS puro", "diseño responsivo"] : ["web development", "database management", "full-stack design"],
            type: "laboral"
        },
    ]
};