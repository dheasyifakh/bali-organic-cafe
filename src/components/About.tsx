import asset1 from "../assets/img/alissa-schilling-WSlffktNOPY-unsplash.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:items-center md:justify-center md:gap-11 gap-11 lg:flex-row lg:items-start">
        <div className="md:w-1/2  md:pr-12  overflow-hidden">
          <img src={asset1} alt="" width={300}/>

        </div>
        <div className="md:w-1/2 text-justify md:text-left mt-10 md:mt-0 flex flex-col space-y-8  overflow-hidden">
          <h2 className="text-3xl font-bold text-green-800 mb-6">About Us</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Bali Organic Café is a cozy space dedicated to serving fresh,
            locally-sourced, and sustainable meals. We believe in nourishing both
            body and soul with healthy, organic ingredients straight from local
            farmers.
          </p>
        </div>
      </div>
     
    </section>
  );
};

export default About;
