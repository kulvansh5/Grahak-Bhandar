import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // For hamburger and close icons
import { FaShoppingCart } from 'react-icons/fa'; // Using a more modern shopping cart icon from react-icons
import { useCart } from '@/context/CartContext'; // Import the CartContext

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling the mobile menu

  const { cart } = useCart(); // Access the cart from context

  // Get the total quantity of items in the cart
  const getTotalQuantity = () => {
    return cart.reduce((total, product) => total + (product.quantity || 1), 0);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the visibility of the mobile menu
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Company Name */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Company Name
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="flex-grow mx-4 hidden sm:block">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search products..."
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Home Link */}
            <Link to="/" className="text-gray-800 hover:text-blue-600">
              Home
            </Link>

            {/* Product Dropdown */}
            <div className="relative">
              <button
                onClick={handleDropdownToggle}
                className="text-gray-800 hover:text-blue-600 focus:outline-none"
              >
                Product
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 w-40 mt-2 bg-white border rounded-md shadow-lg z-10">
                  <Link
                    to="/category/stationery"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                  >
                    Stationery
                  </Link>
                  <Link
                    to="/category/uniforms"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                  >
                    Uniforms
                  </Link>
                  <Link
                    to="/category/accessories"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                  >
                    Accessories
                  </Link>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link to="/about-us" className="text-gray-800 hover:text-blue-600">
              About Us
            </Link>

            {/* Contact Us */}
            <Link to="/contact-us" className="text-gray-800 hover:text-blue-600">
              Contact Us
            </Link>

            {/* Cart Icon with Quantity */}
            <Link to="/cart" className="relative text-gray-800 hover:text-blue-600">
              {/* Updated cart icon with react-icons */}
              <FaShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                  {getTotalQuantity()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={handleMenuToggle}>
              {isMenuOpen ? (
                <FiX className="text-gray-800 w-6 h-6" />
              ) : (
                <FiMenu className="text-gray-800 w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-4">
          {/* Mobile Navigation Links */}
          <Link to="/" className="block text-gray-800 hover:text-blue-600 py-2">
            Home
          </Link>

          {/* Product Dropdown in Mobile */}
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              className="block w-full text-gray-800 hover:text-blue-600 py-2"
            >
              Product
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 w-full mt-2 bg-white border rounded-md shadow-lg z-10">
                <Link
                  to="/category/stationery"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Stationery
                </Link>
                <Link
                  to="/category/uniforms"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Uniforms
                </Link>
                <Link
                  to="/category/accessories"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Accessories
                </Link>
              </div>
            )}
          </div>

          {/* About Us */}
          <Link to="/about-us" className="block text-gray-800 hover:text-blue-600 py-2">
            About Us
          </Link>

          {/* Contact Us */}
          <Link to="/contact-us" className="block text-gray-800 hover:text-blue-600 py-2">
            Contact Us
          </Link>

          {/* Cart Icon with Quantity */}
          <Link to="/cart" className="block text-gray-800 hover:text-blue-600 py-2">
            {/* Updated cart icon with react-icons */}
            <FaShoppingCart className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 py-0.5 text-xs font-semibold">
                {getTotalQuantity()}
              </span>
            )}
          </Link>
        </div>
      )}
    </header>
  );
};
