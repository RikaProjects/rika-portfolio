import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Sertifikat';
export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Projects/>
      <Certificates/>
    </>
  );
}