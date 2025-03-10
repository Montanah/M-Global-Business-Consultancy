
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">M'Global</h3>
            <p className="text-blue-200 mb-4">
              Transforming businesses through innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-white hover:text-blue-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-white hover:text-blue-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-white hover:text-blue-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-white hover:text-blue-300">
                {/* Custom TikTok SVG icon */}
                <svg 
                  className="h-5 w-5" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"></path>
                  <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
                  <path d="M15 8v8a4 4 0 0 1-4 4"></path>
                  <path d="M15 8h-4"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-blue-200 hover:text-white">Web Design & Development</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white">App Development</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white">Graphic Design</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white">Digital Marketing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-blue-200 hover:text-white">About Us</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white">Our Team</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white">Careers</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-blue-200 mb-2">contact@mglobal.com</p>
            <p className="text-blue-200 mb-2">+1 (555) 123-4567</p>
            <p className="text-blue-200">123 Business Avenue, Suite 100, New York, NY 10001</p>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} M'Global Business Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
