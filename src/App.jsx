import "./app.css";
import Nabar from "./components/Navbar/Nabar";
import Parallax from "./components/Parallax/Parallax";
import Portflio from "./components/Portfolio/Portflio";
import Services from "./components/Services/Services";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary-500/30">
      <Cursor />
      <section id="Homepage">
        <Nabar />
        <Hero />
      </section>
      <section id="Services" className="relative z-10">
        <Services />
      </section>
      <section id="Portfolio" className="relative z-10">
        <Portflio />
      </section>
      <section id="Contact" className="relative z-10">
        <Contact />
      </section> 
      <SpeedInsights/>
    </div>
  );
}

export default App;
