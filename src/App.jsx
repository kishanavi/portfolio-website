import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
         <div className="max-w-10xl mx-auto px-6">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
         </div>
      <Skills />
         <div className="max-w-10xl mx-auto px-6">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
         </div>
      <Projects />
          <div className="max-w-10xl mx-auto px-6">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
         </div> 
      <Contact />
    </div>
  );
}