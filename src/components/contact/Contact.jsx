import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const variants = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_g4uj0vc",
        "template_8f985y8",
        formRef.current,
        "Kokh23FNxlr4uQL4z"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setIsSubmitting(false);
          formRef.current.reset();
        },
        (error) => {
          setError(true);
          setIsSubmitting(false);
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-12 max-w-7xl mx-auto relative"
      variants={variants}
      initial="initial"
      ref={ref}
      whileInView="animate"
    >
      {/* Background Blurs */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-primary-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-16 w-full items-center z-10">
        
        <motion.div className="flex-1 flex flex-col gap-10" variants={variants}>
          <motion.h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Let's work <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-600">together</span>
          </motion.h1>
          
          <div className="space-y-6">
            <motion.div className="group" variants={variants}>
              <h2 className="text-lg font-semibold text-primary-400 mb-1 tracking-wide uppercase">Mail</h2>
              <span className="text-white text-xl md:text-2xl group-hover:text-primary-300 transition-colors">govind@example.com</span>
            </motion.div>
            <motion.div className="group" variants={variants}>
              <h2 className="text-lg font-semibold text-primary-400 mb-1 tracking-wide uppercase">Address</h2>
              <span className="text-white text-xl md:text-2xl group-hover:text-primary-300 transition-colors">Hello Street, India</span>
            </motion.div>
            <motion.div className="group" variants={variants}>
              <h2 className="text-lg font-semibold text-primary-400 mb-1 tracking-wide uppercase">Phone</h2>
              <span className="text-white text-xl md:text-2xl group-hover:text-primary-300 transition-colors">+91 12345 67890</span>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex-1 relative w-full w-max-md bg-card/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <motion.div
            className="absolute -top-16 -right-16 opacity-20 pointer-events-none hidden md:block"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <svg width="250px" height="250px" viewBox="0 0 32.666 32.666">
              <motion.path
                strokeWidth={0.5}
                stroke="#8b5cf6"
                d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
              />
            </svg>
          </motion.div>
          
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              <input type="text" required placeholder="Name" name="name" className="w-full bg-transparent border-b border-white/20 p-4 text-white focus:outline-none focus:border-primary-500 transition-colors placeholder:text-muted" />
            </div>
            <div className="relative">
              <input type="email" required placeholder="Email" name="email" className="w-full bg-transparent border-b border-white/20 p-4 text-white focus:outline-none focus:border-primary-500 transition-colors placeholder:text-muted" />
            </div>
            <div className="relative">
              <textarea required rows={5} placeholder="Message" name="message" className="w-full bg-transparent border-b border-white/20 p-4 text-white focus:outline-none focus:border-primary-500 transition-colors placeholder:text-muted resize-none max-h-[200px]" />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-6 w-full py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            <div className="text-center font-medium h-6">
              {error && <span className="text-red-400">Failed to send message. Please try again.</span>}
              {success && <span className="text-emerald-400">Message sent successfully!</span>}
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
