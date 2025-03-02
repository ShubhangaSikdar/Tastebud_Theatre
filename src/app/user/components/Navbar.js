import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900">
      <Image src="./assets/logo.png" alt="Logo" width={150} height={50} />
      <ul className="flex space-x-6 text-white">
        <li><a href="#" className="hover:text-red-500">Home</a></li>
        <li><a href="#" className="hover:text-red-500">Movies</a></li>
        <li><a href="#" className="hover:text-red-500">Series</a></li>
        <li><a href="#" className="hover:text-red-500">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
