import logo from "../assets/img/logo.png";
const Hero: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-green-100 text-center mb-4 md:mb-40" id="hero">
      <h1 className="text-5xl font-bold text-green-800 mb-4">
        <img src={logo} alt="" width={500}/>
      </h1>
   
      <a
        href="#menu"
        className="bg-green-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-800 transition"
      >
        View Menu
      </a>
      
    </section>
  );
};

export default Hero;