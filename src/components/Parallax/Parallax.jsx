import {motion, useScroll, useTransform} from 'framer-motion'
import "./parallax.scss"
import { useRef } from 'react';


const Parallax = ({ type }) => {

      
    const ref =  useRef()
  //   const  {scrollProgress  }= useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });

  // const yTest = useTransform(scrollProgress, [0, 1], ["0%", "500%"]);
  // const yBg = useTransform(scrollProgress, [0, 1], ["0%", "100%"]);


  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1  >
        {type === "services" ? "What We Do" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div className="stars"></motion.div>
    </div>
  );
}

export default Parallax
