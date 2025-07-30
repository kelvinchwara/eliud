import { Mail, Phone, MapPin, Linkedin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #aa8f7a, #A37B5C)' }} className="text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-3">Eliud Mautia</h3>
            <p className="text-gray-100 text-sm mb-3">
              Mathematics Educator dedicated to fostering creativity and 
              higher-order thinking through innovative teaching methods.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/in/eliudmautia-5245274b" 
                className="text-gray-100 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="mailto:mautiaeliud@gmail.com" 
                className="text-gray-100 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              {[
                { name: 'About', to: '/about' },
                { name: 'Experience', to: '/experience' },
                { name: 'Skills', to: '/skills' },
                { name: 'Education', to: '/education' },
                { name: 'Contact', to: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.to} 
                    className="text-gray-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
            <div className="space-y-2 text-gray-100 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <a href="mailto:mautiaeliud@gmail.com" className="hover:text-white transition-colors">
                  mautiaeliud@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <a href="tel:+8613038303477" className="hover:text-white transition-colors">
                  +86 130 3830 3477
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3" />
                <span>Chongqing, China</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-6 pt-4 text-center">
          <p className="text-gray-100 text-xs flex items-center justify-center">
         Eliud Mautia © 2025 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
