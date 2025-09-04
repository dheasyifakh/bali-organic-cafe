import './App.css'
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
function App() {

  return (
     <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
