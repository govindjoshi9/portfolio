import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const item = [
  {
    id: 1,
    title: "React Commerce",
    img: "./img.jpg",
    dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ",
  },
  {
    id: 2,
    title: "Blog App",
    img: "./img.jpg",
    dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ",
  },
  
  {
    id: 3,
    title: "YtClone App",
    img: "./img3.jpg",
    dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.dec}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portflio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfilio" ref={ref}>
      <div className="progress">
        <h1>
          Featured Work
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </h1>
      </div>
      {item.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portflio;
