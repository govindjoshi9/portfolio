import { useRef } from "react";
import {  motion  } from "framer-motion";
import "./service.scss";

const variant = {
  inital: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      StaggerChildren:0.1, 
    }
  }
}


const Services = () => {

    // const ref = useRef()
    // const isInview = useInView(ref, {margin:"-100px"})

  return (
    <motion.div
      className="service"
      variants={variant}
      initial="initial"
      animate="animate"
      // whileInView="animate"
      // ref={ref}
      // animate={ animate}
    >
      <motion.div className="textContantainer" variants={variant}>
        <p>
          I Focus on Developing user friendly
          <hr />
          UI for organization
        </p>
      </motion.div>
      <motion.div className="titleContainer" variants={variant}>
        <div className="title">
          <img src="/people" alt="" />
          <h1>
            <b>Unique</b> Idea
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For your</b> Business.
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listcontaianer" variants={variant}>
        <motion.div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            tempora, est beatae, id, alias accusamus possimus exercitationem
            blanditiis aperiam minima eveniet eligendi ipsam aliquid vitae. Aut,
            iusto? Unde iste dignissimos amet blanditiis laboriosam, incidunt
            rerum, architecto excepturi consectetur temporibus in, ipsam illo
            deleniti.
          </p>
          <button>go</button>
        </motion.div>
        <motion.div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            tempora, est beatae, id, alias accusamus possimus exercitationem
            blanditiis aperiam minima eveniet eligendi ipsam aliquid vitae. Aut,
            iusto? Unde iste dignissimos amet blanditiis laboriosam, incidunt
            rerum, architecto excepturi consectetur temporibus in, ipsam illo
            deleniti.
          </p>
          <button>go</button>
        </motion.div>
        <motion.div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            tempora, est beatae, id, alias accusamus possimus exercitationem
            blanditiis aperiam minima eveniet eligendi ipsam aliquid vitae. Aut,
            iusto? Unde iste dignissimos amet blanditiis laboriosam, incidunt
            rerum, architecto excepturi consectetur temporibus in, ipsam illo
            deleniti.
          </p>
          <button>go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
