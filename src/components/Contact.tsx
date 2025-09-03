const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Contact Us</h2>
      <p className="text-gray-600 mb-6">We’d love to hear from you! Drop us a message.</p>

      <form className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full border border-gray-300 p-3 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10">
        <p className="text-gray-600">📍 Ubud, Bali</p>
        <p className="text-gray-600">📞 +62 812 3456 7890</p>
      </div>
    </section>
  );
};

export default Contact;
