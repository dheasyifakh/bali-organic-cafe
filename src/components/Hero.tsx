const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-green-100 text-center">
      <h1 className="text-5xl font-bold text-green-800 mb-4">
        Bali Organic Café
      </h1>
      <p className="text-lg text-green-600 mb-6">
        Fresh • Healthy • Sustainable
      </p>
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