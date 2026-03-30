import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Fullstack Developer",
    company: "Sci-Vision Solution (OPC) Pvt. Ltd.",
    date: "June 2025 – Feb 2026",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Flux AI"],
    points: [
      "Architected the 'HBC Digicard' CRM, improving client data management efficiency by 40%.",
      "Optimized PostgreSQL relational schemas, achieving a 30% reduction in response times.",
      "Engineered an AI asset pipeline using Flux-Kontext Pro and DigitalOcean."
    ]
  },
  {
    role: "Fullstack Engineer (Trainee)",
    company: "Hindustan Petroleum Corporation Ltd. (HPCL)",
    date: "April 2024 – April 2025",
    tech: ["React.js", "Tailwind CSS", "Node.js", "SQL"],
    points: [
      "Developed high-performance internal web tools digitizing manual workflows.",
      "Modernized legacy portals, improving UI/UX scores by 50% based on feedback.",
      "Collaborated with IT security to meet strict compliance metrics."
    ]
  },
  {
    role: "Junior Frontend Developer",
    company: "Gaura Web Technology",
    date: "Jan 2023 – March 2024",
    tech: ["React.js", "JavaScript (ES6+)", "REST APIs"],
    points: [
      "Enhanced frontend performance by implementing lazy loading and code-splitting.",
      "Integrated complex RESTful APIs into UI components.",
      "Mentored junior interns on version control and responsive CSS."
    ]
  }
];

const Skills = [
  "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "MongoDB", "Docker", "DigitalOcean Spaces", "GSAP", "Three.js"
];

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the Skill badges
      gsap.fromTo(".skill-badge",
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 0.5,
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 85%",
          }
        }
      );

      // Animate Timeline items
      gsap.fromTo(".timeline-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-600">Experience</span>
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          A track record of building scalable systems, intuitive UIs, and robust architectures for ambitious enterprises.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Timeline */}
        <div className="lg:col-span-8 timeline-container relative border-l border-white/10 pl-8 md:pl-12 ml-4">
          <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-primary-500 via-purple-500 to-transparent"></div>
          
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item mb-16 relative">
              {/* Dot */}
              <div className="absolute top-2 -left-[45px] md:-left-[61px] w-6 h-6 rounded-full bg-background border-4 border-primary-500 z-10 shadow-[0_0_15px_rgba(124,58,237,0.5)]"></div>
              
              <div className="bg-card/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-primary-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-lg text-primary-300 font-medium">{exp.company}</h4>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-white/5 text-sm font-semibold text-muted tracking-wide whitespace-nowrap self-start">
                    {exp.date}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-muted leading-relaxed flex items-start">
                      <span className="text-primary-500 mr-2 opacity-70">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs font-mono text-primary-200 bg-primary-900/30 px-3 py-1 rounded-md border border-primary-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills sidebar */}
        <div className="lg:col-span-4 skills-container h-fit sticky top-24">
          <div className="bg-card/30 backdrop-blur-md rounded-3xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Arsenal</h3>
            <div className="flex flex-wrap gap-3">
              {Skills.map((skill, index) => (
                <span 
                  key={index}
                  className="skill-badge px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-colors text-sm font-medium shadow-sm hover:shadow-[0_0_10px_rgba(124,58,237,0.2)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Experience;
