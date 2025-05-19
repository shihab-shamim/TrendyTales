import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react"; // You can use heroicons or others too

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <Link to="/dashboard" className="block px-4 py-2 hover:bg-blue-100 rounded">
        Dashboard
      </Link>
      <Link to="/profile" className="block px-4 py-2 hover:bg-blue-100 rounded">
        Profile
      </Link>
      <Link to="/settings" className="block px-4 py-2 hover:bg-blue-100 rounded">
        Settings
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">User Dashboard</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4">{navLinks}</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 border-t shadow-md">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Dashboard;
