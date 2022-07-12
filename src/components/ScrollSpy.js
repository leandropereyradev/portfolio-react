import React, { useEffect } from "react";
import "../css/scrollSpy.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ScrollSpy = () => {
  useEffect(() => {
    const article1 = document.getElementById("header");
    const article2 = document.getElementById("portfolio");
    const article3 = document.getElementById("about");
    const article4 = document.getElementById("contact");

    let spies = gsap.utils.toArray(".scrollSpy-container span");

    function setActive(link) {
      spies.forEach((el) => el.classList.remove("active"));
      link.classList.add("active");
    }

    function unsetActive() {
      spies.forEach((el) => el.classList.remove("active"));
    }

    gsap.from(article1, {
      scrollTrigger: {
        trigger: article1,
        start: "top 20%",
        end: "bottom 20%",
        onEnter: () => setActive(spies[3]),
        onEnterBack: () => setActive(spies[3]),
        onLeave: () => unsetActive(spies[3]),
        onLeaveBack: () => unsetActive(spies[3]),
      },
    });
    gsap.from(article2, {
      scrollTrigger: {
        trigger: article2,
        start: "top 20%",
        end: "bottom 20%",
        onEnter: () => setActive(spies[2]),
        onEnterBack: () => setActive(spies[2]),
        onLeave: () => unsetActive(spies[2]),
        onLeaveBack: () => unsetActive(spies[2]),
      },
    });
    gsap.from(article3, {
      scrollTrigger: {
        trigger: article3,
        start: "top 20%",
        end: "bottom 20%",
        onEnter: () => setActive(spies[1]),
        onEnterBack: () => setActive(spies[1]),
        onLeave: () => unsetActive(spies[1]),
        onLeaveBack: () => unsetActive(spies[1]),
      },
    });
    gsap.from(article4, {
      scrollTrigger: {
        trigger: article4,
        start: "top 20%",
        end: "bottom 20%",
        onEnter: () => setActive(spies[0]),
        onEnterBack: () => setActive(spies[0]),
        onLeave: () => unsetActive(spies[0]),
        onLeaveBack: () => unsetActive(spies[0]),
      },
    });
  }, []);

  return (
    <div className="scrollSpy-container">
      <ul>
        <li id="contactSpy">
          <span>Contacto</span>
        </li>
        <li id="aboutSpy">
          <span>Sobre mi</span>
        </li>
        <li id="portfolioSpy">
          <span>Portfolio</span>
        </li>
        <li id="headerSpy">
          <span>Inicio</span>
        </li>
      </ul>
    </div>
  );
};

export default ScrollSpy;
