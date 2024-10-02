'use client';
import { useState, useEffect } from 'react';
import './presentation.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Link from 'next/link';
import photoPerfil from './photoPerfil.jpg';
import Image from 'next/image';
import { useStoreLenguaje, useStoreTheme } from '@/app/zustand';

const Presentation = () => {

    const [text, setText] = useState('FULL STACK DEVELOPER');

    const { theme } = useStoreTheme();
    const { currentLenguaje } = useStoreLenguaje();

    const saludo = currentLenguaje === "es" ? "Hola, mi nombre es" : "Hello, my name is";
    const parrafo = currentLenguaje === "es"
        ? 'Apasionado del desarrollo de software con inclinación hacia el desarrollo FullStack'

        : 'Passionate about software development with a focus on FullStack development';
    const descarga = currentLenguaje === "es" ? "Curriculum" : "Curriculum";
    const vistaPrevia = currentLenguaje === "es" ? "Vista previa" : "Preview";
    const openToWork = currentLenguaje === "es" ? "Disponible para trabajar" : "Available to work";

    async function downloadCv() {
        try {
            const response = await fetch('/LUIS-RODRIGUEZ-CV.pdf');
            const fileData = await response.blob();

            const link = document.createElement('a');
            const fileUrl = URL.createObjectURL(fileData);
            link.href = fileUrl;
            link.download = 'LUIS-RODRIGUEZ-CV.pdf';
            link.click();
            URL.revokeObjectURL(fileUrl);
        } catch (error) {
            console.error('Error al descargar el archivo PDF:', error);
        }
    }

    const handlePreview = () => {
        window.open("https://lewisv4.github.io/Curriculum-pages/", "_blank");
    }
    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

// Main
initHeader();
initAnimation();
addListeners();

function initHeader() {
    width = window.innerWidth;
    height = window.innerHeight;
    target = {x: width/1, y: height/1};

    largeHeader = document.getElementById('large-header');
    largeHeader.style.height = height+'px';

    canvas = document.getElementById('demo-canvas');
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');

    // create points
    points = [];
    for(var x = 0; x < width; x = x + width/20) {
        for(var y = 0; y < height; y = y + height/20) {
            var px = x + Math.random()*width/20;
            var py = y + Math.random()*height/20;
            var p = {x: px, originX: px, y: py, originY: py };
            points.push(p);
        }
    }

    // for each point find the 5 closest points
    for(var i = 0; i < points.length; i++) {
        var closest = [];
        var p1 = points[i];
        for(var j = 0; j < points.length; j++) {
            var p2 = points[j]
            if(!(p1 == p2)) {
                var placed = false;
                for(var k = 0; k < 5; k++) {
                    if(!placed) {
                        if(closest[k] == undefined) {
                            closest[k] = p2;
                            placed = true;
                        }
                    }
                }

                for(var k = 0; k < 5; k++) {
                    if(!placed) {
                        if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                            closest[k] = p2;
                            placed = true;
                        }
                    }
                }
            }
        }
        p1.closest = closest;
    }

    // assign a circle to each point
    for(var i in points) {
        var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
        points[i].circle = c;
    }
}

// Event handling
function addListeners() {
    if(!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
    }
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);
}

function mouseMove(e) {
    var posx = posy = 0;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY)    {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    target.x = posx;
    target.y = posy;
}

function scrollCheck() {
    if(document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
}

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    largeHeader.style.height = height+'px';
    canvas.width = width;
    canvas.height = height;
}

// animation
function initAnimation() {
    animate();
    for(var i in points) {
        shiftPoint(points[i]);
    }
}

function animate() {
    if(animateHeader) {
        ctx.clearRect(0,0,width,height);
        for(var i in points) {
            // detect points in range
            if(Math.abs(getDistance(target, points[i])) < 4000) {
                points[i].active = 0.3;
                points[i].circle.active = 0.6;
            } else if(Math.abs(getDistance(target, points[i])) < 20000) {
                points[i].active = 0.1;
                points[i].circle.active = 0.3;
            } else if(Math.abs(getDistance(target, points[i])) < 40000) {
                points[i].active = 0.02;
                points[i].circle.active = 0.1;
            } else {
                points[i].active = 0;
                points[i].circle.active = 0;
            }

            drawLines(points[i]);
            points[i].circle.draw();
        }
    }
    requestAnimationFrame(animate);
}

function shiftPoint(p) {
    TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
        y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
        onComplete: function() {
            shiftPoint(p);
        }});
}

// Canvas manipulation
function drawLines(p) {
    if(!p.active) return;
    for(var i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
        ctx.stroke();
    }
}

function Circle(pos,rad,color) {
    var _this = this;

    // constructor
    (function() {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
    })();

    this.draw = function() {
        if(!_this.active) return;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
        ctx.fill();
    };
}

// Util
function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}



    return (
        <div className='patherPresentation'>
        <section className={`presentationContainer ${theme}`}>
          <article className='namePresentation'>
            <h1>
              <span className='mensajeSaludo'>{saludo}</span><br />
              Luis Carlos Rodriguez
            </h1>
            <h2>{text}</h2>
            <p>{parrafo}</p>
      
            <div className='openAndRedes'>
              <h6>{openToWork}</h6>
              <button>
                <Link href='https://api.whatsapp.com/send?phone=573122401377' target='_BLANK'>
                  <i className="fa-brands fa-whatsapp links"></i><span className='textRed'>+57 312 240 1377</span>
                </Link>
              </button>
              <button>
                <Link href='https://api.whatsapp.com/send?phone=573502032217' target='_BLANK'>
                  <i className="fa-brands fa-whatsapp links"></i><span className='textRed'>+57 350 203 2217</span>
                </Link>
              </button>
              <button>
                <Link href='https://www.linkedin.com/in/luis-carlos-rodriguez-a885a61a6/' target='_BLANK'>
                  <i className="fa-brands fa-linkedin links"></i><span className='textRed'>Linkedin</span>
                </Link>
              </button>
              <button>
                <Link href='https://github.com/lewisv4' target='_BLANK'>
                  <i className="fa-brands fa-github links"></i><span className='textRed'>Github</span>
                </Link>
              </button>
              <button>
                <Link href='mailto:lewisv4re@hotmail.com'>
                  <i className="fa-solid fa-envelope links"></i><span className='textRed'>lewisv4re@hotmail.com</span>
                </Link>
              </button>
              <button>
                <Link href='mailto:lewisv4re@gmail.com'>
                  <i className="fa-solid fa-envelope links"></i><span className='textRed'>lewisv4re@gmail.com</span>
                </Link>
              </button>
            </div>
      
            <div className='detailsPresentation'>
              <button onClick={downloadCv} id={theme}>
                {descarga.toUpperCase()} <i className="fa-regular fa-newspaper iconoCv"></i>
              </button>
              <button onClick={handlePreview} className='buttonPreview' id={theme}>
                {vistaPrevia.toUpperCase()} <i className="fa-regular fa-newspaper iconoCv"></i>
              </button>
            </div>
          </article>
      
          <article className='imagePresentation'>
            <Image src={photoPerfil} alt='Foto de perfil' id={theme} />
          </article>
        </section>
      </div>
      
    )
}

export default Presentation
