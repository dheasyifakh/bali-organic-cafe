const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Bali Organic Café. All rights reserved.</p>
      <p className="text-sm mt-2">Made with ❤️ using React & TailwindCSS</p>
    </footer>
  );
};

export default Footer;
