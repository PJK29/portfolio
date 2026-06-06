import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Projects from '../components/portfolio/Projects';
import Experience from '../components/portfolio/Experience';
import Hobbies from '../components/portfolio/Hobbies';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Hobbies />
      <Contact />
      <Footer />
    </>
  );
}
