import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: { x: -50, y: 50, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const services = [
    {
      title: "Frontend Engineering",
      desc: "Creating pixel-perfect, responsive, and accessible user interfaces using React, Tailwind CSS, and Framer Motion for premium user experiences.",
    },
    {
      title: "Backend Architecture",
      desc: "Designing robust, scalable, and secure RESTful APIs and microservices using Node.js, Express, and MongoDB to power complex applications.",
    },
    {
      title: "Full Stack Development",
      desc: "End-to-end web application development. Taking your unique ideas from conceptualization and design to deployment and maintenance.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-12 max-w-7xl mx-auto"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8" variants={variants}>
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-600">
              Innovative
            </span> Solutions
          </h2>
          <h2 className="text-4xl md:text-6xl font-light text-muted mt-2">
            For Your Business
          </h2>
        </div>
        <div className="flex-1 flex flex-col items-start md:items-end text-left md:text-right">
          <p className="text-muted text-lg max-w-md border-l-2 md:border-l-0 md:border-r-2 border-primary-500 pl-4 md:pl-0 md:pr-4">
            I focus on developing user-friendly, high-performance applications that drive business growth and elevate brand presence.
          </p>
          <button className="mt-6 px-8 py-3 bg-primary-600 hover:bg-primary-500 rounded-full text-white font-medium transition-colors shadow-[0_0_15px_rgba(124,58,237,0.3)]">
            What I Do
          </button>
        </div>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={variants}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 rounded-3xl bg-card border border-white/5 hover:border-primary-500/50 transition-colors"
            whileHover={{ y: -10 }}
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-white mb-4 z-10 relative">{service.title}</h3>
            <p className="text-muted leading-relaxed z-10 relative">
              {service.desc}
            </p>
            <button className="mt-6 text-primary-400 font-medium group-hover:text-primary-300 transition-colors flex items-center gap-2 z-10 relative">
              Learn more
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
