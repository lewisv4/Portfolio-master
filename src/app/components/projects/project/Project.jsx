'use client';
import Image from 'next/image';
import './project.css';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const Project = ({ title, image, description, quantity, stack, deploy, github }) => {

    const { currentLenguaje } = useStoreLenguaje();
    const { theme } = useStoreTheme();
    const textButton = currentLenguaje === "es" ? "Código" : "Code";

    return (
        <div className={`projectContainer ${theme}`}>
            <section>
                <article className='imageProject' >
                    <Image src={image} />
                </article>

                <article className='dataProject' >
                    <h3>{title}</h3>
                    <div className="habilities">
                        {
                            stack.length &&
                            stack.map(hab => (
                                <span className={hab}>{hab}</span>
                            ))
                        }
                    </div>
                    <p>{description}</p>
                    <div className="buttonsProject">
                        {
                            deploy &&
                            <button>
                                <a href={deploy} target='_blank' ><FaLink />Demo</a>
                            </button>
                        }
                        <button>
                            <a href={deploy} target='_blank' ><FaGithub />{textButton}</a>
                        </button>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Project; 
