import { useStoreTheme } from '@/app/zustand';
import './stack.css';

import Image from 'next/image';
import js from '../../../../public/stackImages/js.svg';
import c from '../../../../public/stackImages/c.webp';
import react from '../../../../public/stackImages/react.svg';
import html from '../../../../public/stackImages/html.svg';
import css from '../../../../public/stackImages/css.svg';
import node from '../../../../public/stackImages/node.svg';
import nextjs from '../../../../public/stackImages/nextjs.svg';
import nextjsdark from '../../../../public/stackImages/nextjsdark.svg';
import sequelize from '../../../../public/stackImages/sequelize.svg';
import tailwind from '../../../../public/stackImages/tailwind.svg';
import redux from '../../../../public/stackImages/redux.svg';
import Angular from '../../../../public/stackImages/Angular.svg';
import java from '../../../../public/stackImages/java.svg';
import jquery from '../../../../public/stackImages/jquery.png';
import Microsoft_Power_Apps from '../../../../public/stackImages/Microsoft_Power_Apps.png';
import Microsoft_Power_Automate from '../../../../public/stackImages/Microsoft_Power_Automate.png';
import Power_BI_Logo from '../../../../public/stackImages/Power_BI_Logo.png';
import springboot from '../../../../public/stackImages/springboot.png';
import Typescript from '../../../../public/stackImages/Typescript.png';
import Bootstrap from '../../../../public/stackImages/Bootstrap.png';
import MySQL from '../../../../public/stackImages/MySQL.png';
import NET from '../../../../public/stackImages/NET.png';
import PHP from '../../../../public/stackImages/PHP.svg';
import oracle from '../../../../public/stackImages/oracle.png';
import microsoft_sql_server from '../../../../public/stackImages/microsoft_sql_server.svg';
import git from '../../../../public/stackImages/git.svg';
import github from '../../../../public/stackImages/github.svg';


const Stack = () => {

  const { theme } = useStoreTheme();
  const techList = [
    { name: "Javascript", src: js },
    { name: "c", src: c },
    { name: "React js", src: react },
    { name: "HTML5", src: html },
    { name: "CSS3", src: css },
    { name: "Node js", src: node },
    { name: "Next js", src: nextjs },
    { name: "Sequelize", src: sequelize },
    { name: "Tailwind", src: tailwind },
    { name: "Redux", src: redux },
    { name: "Angular", src: Angular },
    { name: "Java", src: java },
    { name: "Jquery", src: jquery },
    { name: "Microsoft Power Apps", src: Microsoft_Power_Apps },
    { name: "Microsoft Power Automate", src: Microsoft_Power_Automate },
    { name: "Power BI Logo", src: Power_BI_Logo },
    { name: "Springboot", src: springboot },
    { name: "Typescript", src: Typescript },
    { name: "Bootstrap", src: Bootstrap },
    { name: "MySQL", src: MySQL },
    { name: ".NET", src: NET },
    { name: "PHP", src: PHP },
    { name: "oracle", src: oracle },
    { name: "microsoft sql server", src: microsoft_sql_server },
    { name: "Git", src: git },
    { name: "Github", src: github },

  ];


  return (
    <div className={`stackContainer ${theme}`} >
      <h2>Stack</h2>
      <div className="stackGrid">
        {techList.map((tech, index) => (
          <div className="techContainer" key={index}>
            <Image src={tech.src} alt={tech.name} width={50} height={50} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack
