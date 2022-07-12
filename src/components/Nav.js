import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import "../css/nav.css";
import menu from "../assets/base/menu.svg";
import contact from "../assets/base/contact-bubble.svg";
import home from "../assets/base/home-bubble.svg";
import portfolio from "../assets/base/portfolio-bubble.svg";
import about from "../assets/base/about-bubble.svg";
import bubbles from "../assets/base/bubbles.svg";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="nav-container">
      <div className="nav_menu-container">
        <img src={menu} alt="logo" className="logo" onClick={() => openMenu()} />
        <AnimatePresence>
          {open && (
            <>
              <Link to="header" smooth={true} offset={0} duration={500}>
                <motion.img
                  initial={{
                    scale: 0,
                    opacity: 0,
                    x: 0,
                    y: 60,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: -20,
                    y: -100,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.3,
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    x: 0,
                    y: 60,
                  }}
                  src={home}
                  alt="home"
                  className="home"
                  onClick={() => openMenu()}
                />
              </Link>
              <Link to="portfolio" smooth={true} offset={0} duration={500}>
                <motion.img
                  initial={{
                    scale: 0,
                    opacity: 0,
                    x: 50,
                    y: 60,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: -100,
                    y: -150,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.4,
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    x: 50,
                    y: 60,
                  }}
                  src={portfolio}
                  alt="portfolio"
                  className="portfolio"
                  onClick={() => openMenu()}
                />
              </Link>
              <Link to="about" smooth={true} offset={0} duration={500}>
                <motion.img
                  initial={{
                    scale: 0,
                    opacity: 0,
                    x: 50,
                    y: 30,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: -60,
                    y: -60,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    x: 50,
                    y: 20,
                  }}
                  src={about}
                  alt="about"
                  className="about"
                  onClick={() => openMenu()}
                />
              </Link>
              <Link to="contact" smooth={true} offset={0} duration={500}>
                <motion.img
                  initial={{
                    scale: 0,
                    opacity: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: -200,
                    y: -40,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    x: 0,
                    y: 0,
                  }}
                  src={contact}
                  alt="contact"
                  className="contact"
                  onClick={() => openMenu()}
                />
              </Link>
              <motion.img
                initial={{
                  scale: 0,
                  opacity: 0,
                  x: 150,
                  y: 150,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: -10,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                exit={{
                  scale: 0,
                  opacity: 0,
                  x: 150,
                  y: 150,
                }}
                src={bubbles}
                alt="bubbles"
                className="bubbles"
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nav;
