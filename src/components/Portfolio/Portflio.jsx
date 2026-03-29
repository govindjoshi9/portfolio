import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "/img.jpg",
    desc: "A full-featured e-commerce platform built with React, Redux, and Tailwind CSS. Features include user authentication, product filtering, and Stripe payment integration.",
    link: "#",
  },
  {
    id: 2,
    title: "Blog Platform",
    img: "/img.jpg",
    desc: "A modern, fast blogging platform using Next.js and MDX. Includes a custom CMS tailored for developers to easily post content and share code snippets.",
    link: "#",
  },
  {
    id: 3,
    title: "YtClone App",
    img: "/img3.jpg",
    desc: "A responsive video sharing platform imitating the core features of YouTube. Developed utilizing MERN stack, ensuring robust backend and engaging frontend.",
    link: "#",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section className="h-screen w-full flex items-center justify-center snap-center relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl h-full">
          <div className="flex-1 w-full relative h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-2xl group border border-white/10" ref={ref}>
            <div className="absolute inset-0 bg-primary-500/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover rounded-3xl transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
            />
          </div>
          <motion.div className="flex-1 flex flex-col items-start gap-6 md:pl-8 z-20" style={{ y }}>
            <h2 className="text-4xl md:text-6xl font-black text-white">{item.title}</h2>
            <p className="text-muted text-lg md:text-xl leading-relaxed">{item.desc}</p>
            <a 
              href={item.link}
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
            >
              See Live Demo
            </a>
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
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative" ref={ref}>
      <div className="sticky top-0 left-0 py-8 text-center z-10 pt-24 pb-8 backdrop-blur-sm bg-background/80 border-b border-white/5">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Works</h1>
        <motion.div 
          style={{ scaleX }} 
          className="h-2 bg-gradient-to-r from-primary-600 to-purple-400 origin-left"
        />
      </div>
      
      <div className="pb-[10vh]">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portflio;
