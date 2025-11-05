import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#2B2B2B] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://www.dataavengers.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.00eff16f.png&w=3840&q=75" 
              alt="Data Avengers Logo" 
              className="h-14"
            />
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-white hover:text-[#f36c3c] active:text-white transition-colors duration-200 font-['Josefin_Sans'] text-xl">Home</a>
            <a href="#" className="text-white hover:text-[#f36c3c] active:text-white transition-colors duration-200 font-['Josefin_Sans'] text-xl">Courses</a>
            <a href="#" className="text-white hover:text-[#f36c3c] active:text-white transition-colors duration-200 font-['Josefin_Sans'] text-xl">Reviews</a>
            <a href="#" className="text-white hover:text-[#f36c3c] active:text-white transition-colors duration-200 font-['Josefin_Sans'] text-xl">About Us</a>
            <a href="#" className="text-white hover:text-[#f36c3c] active:text-white transition-colors duration-200 font-['Josefin_Sans'] text-xl">Blogs</a>
          </div>
          
          {/* Contact Button */}
          <a 
            href="#" 
            className="bg-[#f36c3c] text-white hover:bg-white hover:text-[#f36c3c] active:bg-[#f36c3c] active:text-white transition-colors duration-200 px-8 py-3 rounded-full font-['Josefin_Sans'] text-xl border-2 border-[#f36c3c]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;