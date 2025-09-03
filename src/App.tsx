import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
     <div className="font-sans text-gray-800">
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
