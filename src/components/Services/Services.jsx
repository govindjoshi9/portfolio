import { motion } from "framer-motion";
import "./service.scss";
const Services = () => {
  return (
    <motion.div className="service">
      <motion.div className="textContantainer">
        <p>
          I Focus on Developing user friendly
          <br />
          UI for organization
        </p>
      </motion.div>
      <motion.div className="titleContainer">
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
      <motion.div className="listcontaianer">
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            tempora, est beatae, id, alias accusamus possimus exercitationem
            blanditiis aperiam minima eveniet eligendi ipsam aliquid vitae. Aut,
            iusto? Unde iste dignissimos amet blanditiis laboriosam, incidunt
            rerum, architecto excepturi consectetur temporibus in, ipsam illo
            deleniti.
                  </p>
                  <button>hot</button>
        </div>
        <div className="box">
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
        </div>
        <div className="box">
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
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
