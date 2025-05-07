import React, { useState } from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const shopCategories = [
    { name: "Men's Fashion", subcategories: ['T-Shirts', 'Shirts', 'Pants', 'Jackets'] },
    { name: "Women's Fashion", subcategories: ['Dresses', 'Tops', 'Skirts', 'Accessories'] },
    { name: 'Accessories', subcategories: ['Watches', 'Bags', 'Jewelry', 'Sunglasses'] },
  ];

  return (
    <nav className="bg-white py-4 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold tracking-tighter">SHOP.CO</a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center space-x-1 hover:text-gray-600"
                onClick={() => setIsShopOpen(!isShopOpen)}
              >
                <span>Shop</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isShopOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Shop Drawer (right-side, width-limited) */}
              <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
                ${isShopOpen ? 'translate-x-0' : 'translate-x-full'} w-[340px] max-w-full`}
              >
                <div className="p-6 h-full overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold">Shop Categories</h3>
                    <button
                      onClick={() => setIsShopOpen(false)}
                      className="text-gray-500 hover:text-black"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  {shopCategories.map((category, index) => (
                    <div key={index} className="mb-6">
                      <h4 className="font-medium mb-2">{category.name}</h4>
                      <div className="space-y-2">
                        {category.subcategories.map((sub, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block text-gray-600 hover:text-black pl-2"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overlay */}
              {isShopOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-40 z-40"
                  onClick={() => setIsShopOpen(false)}
                ></div>
              )}
            </div>
            <a href="#" className="hover:text-gray-600">On Sale</a>
            <a href="#" className="hover:text-gray-600">New Arrivals</a>
            <a href="#" className="hover:text-gray-600">Brands</a>
          </div>

          {/* Search and Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-[300px] pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <div className="flex items-center space-x-4">
              {/* Cart */}
              <button className="hover:text-gray-600 relative group">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
                <div className="absolute right-0 top-full mt-2 w-80 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 text-center text-gray-500">Your cart is empty</div>
                </div>
              </button>

              {/* User */}
              <button className="hover:text-gray-600 relative group">
                <User className="w-6 h-6" />
                <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign In</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Create Account</a>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-y-0 right-0 w-[300px] max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-2xl font-bold">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-black"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <button
                    className="flex items-center justify-between w-full py-2"
                    onClick={() => setIsShopOpen(!isShopOpen)}
                  >
                    <span className="text-lg">Shop</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isShopOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={`pl-4 space-y-4 mt-2 ${isShopOpen ? 'block' : 'hidden'}`}>
                    {shopCategories.map((category, index) => (
                      <div key={index}>
                        <h4 className="font-medium mb-2">{category.name}</h4>
                        <div className="space-y-2 pl-2">
                          {category.subcategories.map((sub, subIndex) => (
                            <a
                              key={subIndex}
                              href="#"
                              className="block text-gray-600 hover:text-black"
                            >
                              {sub}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="#" className="block text-lg py-2">On Sale</a>
                <a href="#" className="block text-lg py-2">New Arrivals</a>
                <a href="#" className="block text-lg py-2">Brands</a>

                <div className="pt-6 space-y-4">
                  <button className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                    Sign In
                  </button>
                  <button className="w-full py-3 border border-black rounded-full hover:bg-gray-100 transition-colors">
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;
