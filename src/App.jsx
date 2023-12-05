import "./app.scss"
import Nabar from "./components/Navbar/Nabar";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";
import Hero from "./components/hero/Hero";
const App = () => {
  return (
    <div>
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
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
      {/* <Test></Test> */}
    </div>
  );
}

export default App
