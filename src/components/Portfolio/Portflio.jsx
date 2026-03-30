import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Doctor Review & Coupon Management System",
    img: "/doctor_review.png",
    desc: "A system designed to collect patient reviews for doctors and hospitals, incentivizing feedback through discount coupons. Features include QR-based review collection, coupon validation, multi-role access (MR, Receptionist, Admin), and a centralized admin control.",
    link: "https://review-app.apps.scivision.in/",
    credentials: { id: "1111", password: "1111" }
  },
  {
    id: 2,
    title: "AI-Based Doctor Presentation Generator",
    img: "/ai_presentation.png",
    desc: "Enables users to create AI-powered video presentations for doctors using images. Features image-to-video AI conversion, automated presentation generation, and an easy-to-use interface for quick content creation (useful for digital marketing).",
    link: "https://talking-video.apps2.scivision.in/",
    credentials: { id: "1111", password: "1111" }
  },
  {
    id: 3,
    title: "Patient Distribution & Feedback System",
    img: "/pharmacy_distribution.png",
    desc: "Designed for pharmaceutical companies to manage patient distribution and feedback collection through a hierarchical workflow (Zone → Area → MR). Includes patient tracking and delivery management specifically for regulated medicine distribution.",
    link: "https://regestrone.apps.scivision.in/",
    credentials: { id: "1111", password: "1111" }
  },
  {
    id: 4,
    title: "Media Compression Desktop Tool",
    img: "/media_compression.png",
    desc: "A desktop-based media compression tool that processes files locally without uploading them to the cloud. Features 100% local processing, supports image and video compression, fast and lightweight architecture, and no data sharing.",
    link: "https://medica-compress.vercel.app/",
    credentials: null
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
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-7xl h-full">
          <div className="flex-1 w-full relative h-[45vh] lg:h-[65vh] rounded-[2rem] overflow-hidden shadow-2xl group border border-white/10" ref={ref}>
            <div className="absolute inset-0 bg-primary-500/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
            />
          </div>
          <motion.div className="flex-1 flex flex-col items-start gap-5 lg:pl-8 z-20" style={{ y }}>
            <h2 className="text-3xl md:text-5xl font-black text-white">{item.title}</h2>
            <p className="text-muted text-base md:text-lg leading-relaxed">{item.desc}</p>
            {item.credentials && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 w-full md:w-auto mt-2">
                <p className="text-sm font-medium text-primary-300 mb-2 uppercase tracking-wider">Demo Credentials</p>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span className="font-mono bg-black/40 px-2 py-1 rounded">ID: {item.credentials.id}</span>
                  <span className="font-mono bg-black/40 px-2 py-1 rounded">Pass: {item.credentials.password}</span>
                </div>
              </div>
            )}
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300 shadow-md shadow-white/10 hover:shadow-primary-500/30"
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
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Featured Projects</h1>
        <motion.div 
          style={{ scaleX }} 
          className="h-1.5 bg-gradient-to-r from-primary-600 to-purple-400 origin-left"
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
