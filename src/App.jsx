import "./app.scss"
import Nabar from "./components/Navbar/Nabar";
import Parallax from "./components/Parallax/Parallax";
import Portflio from "./components/Portfolio/Portflio";
import Services from "./components/Services/Services";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
const App = () => {
  return (
    <div>
      <Cursor/>
      <section id="Homepage">
        <Nabar />
        <Hero />
      </section>
      <section id="Services">
          <Parallax type="services" />
      </section>
      <section><Services/></section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portflio/ >
      <section id="Contact"><Contact/></section>
      {/* <Test></Test> */}
    </div>
  );
}

export default App
