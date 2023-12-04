import React from "react";
import { motion } from "framer-motion";
import "./hero.scss";

const testVriant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeatType: "mirror",
      repeat:Infinity
    }
    
  }
};
const SliderVriant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
  
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={testVriant}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={testVriant}>Govind Prasad</motion.h2>
          <motion.h1 variants={testVriant}>Software developer</motion.h1>
          <motion.div variants={testVriant} className="buttons">
            <motion.button variants={testVriant}>Resume</motion.button>
            <motion.button variants={testVriant}>Contact as</motion.button>
          </motion.div>
          <motion.img variants={testVriant} animate="scrollB utton" src="/scroll.png" alt="" />
        </motion.div>
        <motion.div className="slidingText" variants={SliderVriant } initial="initial" animate="animate">MERN Stack Developer</motion.div>
      </div>
      <div className="imageContainer">
        <img src="/coder1.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
