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
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full items-center z-10">
        
        <motion.div className="flex-1 flex flex-col gap-8 md:gap-10 text-center lg:text-left" variants={variants}>
          <motion.h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Let's work <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-600">together</span>
          </motion.h1>
          
          <div className="space-y-6">
            <motion.div className="group" variants={variants}>
              <h2 className="text-sm font-bold text-primary-400 mb-1 tracking-widest uppercase">Mail</h2>
              <span className="text-white text-lg md:text-2xl group-hover:text-primary-300 transition-colors break-words">joshigovind740@gmail.com</span>
            </motion.div>
            <motion.div className="group" variants={variants}>
              <h2 className="text-sm font-bold text-primary-400 mb-1 tracking-widest uppercase">Address</h2>
              <span className="text-white text-lg md:text-2xl group-hover:text-primary-300 transition-colors">Indore MP, India</span>
            </motion.div>
            <motion.div className="group" variants={variants}>
              <h2 className="text-sm font-bold text-primary-400 mb-1 tracking-widest uppercase">WhatsApp</h2>
              <span className="text-white text-lg md:text-2xl group-hover:text-primary-300 transition-colors">
                <a href="https://wa.me/917489678317" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-primary-500 underline-offset-4">
                  +91 7489678317
                </a>
              </span>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex-1 relative w-full max-w-lg bg-card/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="space-y-1">
              <label className="text-xs font-semibold text-muted ml-1">Full Name</label>
              <input type="text" required placeholder="John Doe" name="name" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-all placeholder:text-muted/30" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-muted ml-1">Email Address</label>
              <input type="email" required placeholder="john@example.com" name="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-all placeholder:text-muted/30" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-muted ml-1">Your Message</label>
              <textarea required rows={4} placeholder="Hi, let's talk about..." name="message" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-all placeholder:text-muted/30 resize-none" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-primary-600/20 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            <div className="text-center font-medium h-6">
              {error && <span className="text-red-400 text-sm">Oops! Something went wrong.</span>}
              {success && <span className="text-emerald-400 text-sm">Message flew successfully! 🚀</span>}
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
