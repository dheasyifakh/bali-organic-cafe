type MenuItem = {
  name: string;
  price: string;
  desc: string;
  img: string;
};

const menuItems: MenuItem[] = [
  { name: "Avocado Smoothie", price: "35K", desc: "Creamy blend of organic avocado & honey.", img: "../assets/img/avocado-smoothie.jpeg" },
  { name: "Vegan Buddha Bowl", price: "55K", desc: "Rice, chickpeas, fresh veggies & tahini.", img: "../assets/img/vegan-budha.jpeg" },
  { name: "Organic Coffee", price: "25K", desc: "Locally roasted beans brewed with love.", img: "../assets/img/coffee.jpeg" },
  { name: "Quinoa Salad", price: "45K", desc: "Nutritious mix of quinoa, greens & citrus.", img: "../assets/img/quinoa-salad.jpeg" },
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-green-50 text-center">
      <h2 className="text-3xl font-bold text-green-800 mb-10">Our Menu</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {menuItems.map((item, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <img src={item.img} alt={item.name} />
            <h3 className="text-xl font-semibold text-green-700">{item.name}</h3>
            <p className="text-gray-500">{item.desc}</p>
            <span className="block mt-3 text-green-800 font-bold">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
