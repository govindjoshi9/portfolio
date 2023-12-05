import React, { useRef, useTransition } from 'react'
import "./portfolio.scss"
import {motion, useScroll,useSpring} from 'framer-motion'

const item = [
    {
        id: 1,
        title: "React Commerce",
        img: "img",
        dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ",
    },
    {
        id: 2,
        title: "Airbnb clone",
        img: "img",
        dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ",
    },
    {
        id: 3,
        title: "Nextflix clone",
        img: "img",
        dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ",
    },
]

 
const Single = ({ item }) => {
    const ref = useRef()
     const { scrollProgress } = useScroll({
       target: ref,
     });
    const y = useTransition(scrollProgress,[0,1],[-300,300])
    return (
      <section ref={ref}>
        <div className="container">
          <div className="wrapper">
            <img src={item.img} alt="" />
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.dec}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
}
const Portflio = () => {
    const ref = useRef()

    const { scrollProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    })

    const scaleX = useSpring(scrollProgress, {
        stiffness: 100,
        damping: 30,
    });

  return (
      <div className='portfilio' ref={ref}>
          <div className="progress">
              <h1>
                  Featured Work
                  <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
              </h1>
          </div>
          {item.map((item) => (
              <Single item={item} key={item.id} />
          ))}
    </div>
  )
}

export default Portflio
