import React from "react";
import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";

const textVariants = {
  initial: { x: -50, opacity: 0 },
  animate: {
    x: 0, opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.1 },
  },
};

const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x: "-220%",
    transition: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
  },
};

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      <ThreeScene />
      {/* Background glow effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary-600/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 text-center px-4 max-w-4xl mx-auto mt-[-5%]">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-6"
        >
          <motion.h2 
            variants={textVariants} 
            className="text-primary-500 font-semibold tracking-[0.2em] uppercase text-sm md:text-base"
          >
            Govind Prasad
          </motion.h2>
          <motion.h1 
            variants={textVariants}
            className="text-4xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl"
          >
            Software <br className="hidden md:block" /> Developer
          </motion.h1>
          <motion.p 
            variants={textVariants}
            className="text-muted text-lg md:text-xl max-w-2xl mt-4 leading-relaxed"
          >
            Crafting premium, scalable web applications with modern technologies. 
            Transforming ideas into high-performance digital experiences.
          </motion.p>

          <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="/resume.pdf" 
              download="Govind_Prasad_Resume.pdf"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transform hover:-translate-y-1"
            >
              Download Resume
            </a>
            <a 
              href="#Contact"
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/60 text-white rounded-full font-semibold transition-all transform hover:-translate-y-1 backdrop-blur-sm bg-white/5"
            >
              Hire Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-5 md:bottom-10 left-0 w-[500%] md:w-[200%] whitespace-nowrap text-[12vh] md:text-[20vh] font-bold text-white/[0.03] select-none pointer-events-none"
        variants={sliderVariants} 
        initial="initial" 
        animate="animate"
      >
        MERN Stack Developer • System Architecture • UI/UX Enthusiast •
      </motion.div>
    </div>
  );
};

export default Hero;
