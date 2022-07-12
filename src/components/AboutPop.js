import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/aboutPop.css";
import exit from "../assets/base/exit.svg";
import { Link } from "react-scroll";

const AboutPop = ({ estado, set }) => {
  return (
    <>
      <AnimatePresence>
        {estado && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            className="aboutPop-container"
          >
            <div className="aboutPop_about">
              <h3 className="aboutPop_title">¡Sé quien soy, de donde vengo y hacia donde voy!</h3>
              <div className="aboutPop_info-container">
                <div className="aboutPop_info_title-container">
                  <h1 className="aboutPop_info_title_title">Soy Leandro Pereyra, Desarrollador Web</h1>
                  <p className="version">v1.0 - Trainee</p>
                  <p className="aboutPop_info_title_text">Mi padre me dijo una vez:</p>
                  <p className="aboutPop_info_title_text dialog">
                    "Hijo; Las aves aprendieron a volar siendo estas arrojadas del nido. Ahí supieron para qué servían sus alas; Para hacer
                    del aire su elemento. Yo no te arrojaré del nido, sólo te pido que intentes saltar de éste. ¡No temas! Todos tenemos
                    miedos e inseguridades, pero dime si ¿no es hermoso tener en tus manos el valor de haberlo intentado? ¡Te amo!"
                  </p>
                  <p className="aboutPop_info_title_text">
                    Gracias a ese valor que me regaló mi padre en aquel momento, entre muchos otros, soy una persona que le gusta tomar
                    riesgos. Riesgos organizados, planeados, con escenarios posibles. Escenarios aquellos para saber qué puede llegar a
                    pasar y cómo poder solucionarlo. En este tiempo han crecido en mí plumas nuevas. Plumas hechas de conocimiento. Lo
                    llamaremos Desarrollador Web v1.0 - Trainee, porque aún están creciendo.
                  </p>
                  <p className="aboutPop_info_title_text">
                    Te invito a que seas parte del aire que surco, que seas mi experiencia. Que, en momentos de fuertes ráfagas, saber que
                    estás allí para aprender a mantenerme en vuelo mientras se soluciona. Que hermoso es volar a diferentes alturas,
                    temperaturas. Porque no todo es una suave brisa, y es lo que más me gusta, sino me aburro. Quiero ser un experto
                    surcando los aires del Desarrollo Web. Volar con otros para adquirir valores, métodos, prácticas y hacer de todo ello mi
                    experiencia.
                  </p>
                  <p className="aboutPop_info_title_text">
                    Pues, lo dicho; Soy un Desarrollador Web Front-End con experiencia en creación de sitios y aplicaciones web. Autodidacta
                    por naturaleza. Me especializo en <span>React.JS</span> y tengo experiencia trabajando con <span>WordPress</span>,{" "}
                    <span>HTML</span>, <span>CSS</span>, <span>Next.JS</span>. Siempre busco mejorar mis habilidades y seguir creciendo
                    profesionalmente para poder hacer aportes valiosos al grupo de trabajo del que puedo formar parte. Depende de vosotros.
                    Conozcámonos para darnos la oportunidad. ¿Y si terminamos siendo un equipazo? ¿Saltamos?
                  </p>
                </div>
                <Link to="contact" smooth={true} offset={0} duration={500}>
                  <button onClick={set} className="about_button">
                    Conozcámonos
                  </button>
                </Link>
                <div className="aboutPop_skills-container"></div>
                <div className="aboutPop_exit">
                  <img src={exit} alt="exit" onClick={set} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutPop;
