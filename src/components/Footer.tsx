import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const XLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}>
    <path d="M22.97 2H19.7l-6.3 7.92L7.9 2H1.03L9.4 12.47 1.03 22h3.3l6.9-8.6 5.7 8.6h6.8l-8.8-11.36L22.97 2z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-yellow-200 bg-clip-text text-transparent">M'Global Business Consultancy</h3>
            <p className="text-blue-200 mb-4">
              Transforming businesses through innovative digital solutions.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link to="https://x.com/mglobalbconsult?s=11&t=p6v18hsMnUboiUq__V9F5A" target='_blank' className="text-white hover:text-blue-300">
                <XLogo className="h-5 w-5" />
              </Link>
              <Link to="https://www.facebook.com/share/1ABgx22hrx/?mibextid=wwXIfr" target='_blank' className="text-white hover:text-blue-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="https://www.instagram.com/mglobalbconsult?igsh=MWt1ODdkN3Qxdmdwdw%3D%3D&utm_source=qr" target='_blank' className="text-white hover:text-blue-300">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-yellow-200 bg-clip-text text-transparent">Services</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-blue-200 hover:text-white">Web Design & Development</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white">App Development</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white">Graphic Design</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white">Digital Marketing</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white">Social Media Management</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white">Business Plan design & Registration</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-yellow-200 bg-clip-text text-transparent">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-200 hover:text-white">About Us</Link></li>
              <li><Link to="/team" className="text-blue-200 hover:text-white">Our Team</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white">Careers</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-yellow-200 bg-clip-text text-transparent">Contact Us</h3>
              <p className="text-blue-200 mb-2">
                <a href="mailto:hello@mglobalbusinessconsultancy.com" className="hover:underline">
                  hello@mglobalbusinessconsultancy.com
                </a>
              </p>
              <p className="text-blue-200 mb-2">
                <a href="tel:+254799863070" className="hover:underline">
                  +254 799 863 070
                </a>
              </p>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-6 text-center bg-gradient-to-r from-pink-400 to-yellow-200 bg-clip-text text-transparent">
          <p>© {new Date().getFullYear()} M'Global Business Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;