'use client';
import './projects.css';
import vorttex from './vorttex.jpeg';
import pokedex from './pokedex.jpeg';
import labarra from './labarra.jpeg';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';
import '@fortawesome/fontawesome-free/css/all.css';
import Project from './project/Project';
import '@fortawesome/fontawesome-free/css/all.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Projects = () => {

    const { theme } = useStoreTheme();
    const { currentLenguaje } = useStoreLenguaje();
    const projects = [
        // {
        //     title: "La Barra Boulevard",
        //     quantity: 1,
        //     image: labarra,
        //     description: currentLenguaje === "es"
        //         ? "La barra boulevard es hasta ahora mi proyecto más importante. Se trata de un e-commerce full-stack desarrollado para un restaurante de Chile, que cuenta con una navegación muy intuitiva y una gestión de base de datos sólida."
        //         : "A Pokédex developed with the Poke-Api, offering user-friendly features like registration, login forms, and Pokémon creation. Enhanced with sorting, filtering, and search options, it provides a comprehensive and engaging experience.",
        //     stack: ['Javascript', 'Next', 'React'],
        //     github: "https://github.com/MartinsDiego17/La-Barra-Sport-Bar",
        //     deploy: "https://la-barra-boulevard.vercel.app/"
        // },
        {
            title: "Acommerce",
            quantity: 8,
            image: vorttex,
            description: currentLenguaje === "es"
                ? "Acommerce es un E-Commerce referente a una tienda online, donde se puede realizar las funciones de carrito, login, estado de producto , visualizacion de productos, y conectividad de pagos online"
                : "Acommerce is an E-Commerce referring to an online store, where the functions of cart, login, product status, product display, and online payment connectivity can be performed.",
            stack: ['Javascript', 'Next', 'React'],
            github: "https://github.com/lewisv4/nextjs-commerce",
            deploy: "https://pf-final-damian-projects.vercel.app/"
        },
        {
            title: "Pokedex",
            quantity: 1,
            image: pokedex,
            description: currentLenguaje === "es"
                ? "Pokedex elaborada con la Poke-Api, con formularios de registro, inicio de sesión y creación de pokemones. También cuenta con ordenamientos, filtros y búsqueda de pokemones."
                : "A Pokédex developed with the Poke-Api, offering user-friendly features like registration, login forms, and Pokémon creation. Enhanced with sorting, filtering, and search options, it provides a comprehensive and engaging experience.",
            stack: ['Javascript', 'Vite', 'React'],
            github: "https://github.com/lewisv4/PI-Pokemon-main"
        }
    ];
    const [selected, setSelected] = useState(projects[0]);
    const [indice, setIndice] = useState(0);

    const text = currentLenguaje === "es" ? "Proyectos" : "Projects";

    return (
        <div className={`projectsContainer ${theme}`}>
            <h2>{text}</h2>
            {
                projects.map((pro, index) => (
                    <Project {...pro} />
                ))
            }
        </div>
    );
}

export default Projects;
