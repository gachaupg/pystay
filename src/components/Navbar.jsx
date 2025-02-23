import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 w-full fixed z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-green-600">
            <Link to="/">
              <img
                className="h-20 0bject-cover"
                src="https://res.cloudinary.com/pitz/image/upload/v1739645008/3d_1_-removebg-preview_vysgjm.png"
                alt=""
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-200 hover:text-green-600">
              Home
            </Link>
            <Link to="/form" className="text-gray-200 hover:text-green-600">
              Products
            </Link>
            <Link to="/orders" className="text-gray-200 hover:text-green-600">
              Orders
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/login">
              <button className=" p-1 rounded text-white bg-orange-500 w-20">Login</button>
            </Link>
            <Link to="/register">
              <button className=" p-1 text-white rounded bg-blue-700 w-20">
                Register
              </button>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <X className="w-6 h-6 text-green-600" />
              ) : (
                <Menu className="w-6 h-6 text-green-600" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <a
            href="#home"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#products"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Products
          </a>
          <a
            href="#orders"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Orders
          </a>
          <div className="flex flex-col px-4 py-2 space-y-2">
            <Link to="/login">
              <button className="border px-4 py-2 rounded bg-orange-500 w-16">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-blue-600 text-white p-1 w-16 rounded">
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
