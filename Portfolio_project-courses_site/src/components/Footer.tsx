import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-8 w-8 text-orange-500" />
              <span className="text-white text-xl font-bold">EduMaster</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering careers through world-class education in Data Science and AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#f36c3c] active:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f36c3c] active:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f36c3c] active:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f36c3c] active:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#f36c3c] active:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f36c3c] active:text-white transition-colors duration-200">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f36c3c] active:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f36c3c] active:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f36c3c] active:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#f36c3c] active:text-white transition-colors duration-200">Data Science & AI</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f36c3c] active:text-white transition-colors duration-200">Machine Learning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f36c3c] active:text-white transition-colors duration-200">Deep Learning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f36c3c] active:text-white transition-colors duration-200">Python Programming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#f36c3c] active:text-white transition-colors duration-200">Business Analytics</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                <span className="text-gray-400">123 Tech Park, Silicon Valley, CA 94043</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-3" />
                <span className="text-gray-400">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-3" />
                <span className="text-gray-400">info@edumaster.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} EduMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;