// components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Shield, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Emergency Protocols', path: '/about#protocols' },
    { name: 'Evacuation Routes', path: '/evacuation' },
    { name: 'Hazard Map', path: '/hazards' },
    { name: 'Family Check-in', path: '/family-support' },
    { name: 'Offline Guide', path: '/settings' },
    { name: 'Report Hazard', path: '/dashboard' },
  ];

  const partnerLogos = [
    { name: 'FEMA', url: '#' },
    { name: 'Red Cross', url: '#' },
    { name: 'NOAA', url: '#' },
    { name: 'USGS', url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <Shield className="text-blue-900" size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">N.O.A.H.</h2>
                <p className="text-blue-200 text-sm">Disaster Response System</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              All-in-one disaster backup system for communities when infrastructure and communication fail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Heart size={16} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Emergency Contacts</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-blue-300 mt-1" size={18} />
                <div>
                  <div className="font-semibold">Emergency Hotline</div>
                  <div className="text-gray-300">1-800-NOA-HELP</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-blue-300 mt-1" size={18} />
                <div>
                  <div className="font-semibold">Email Support</div>
                  <div className="text-gray-300">support@noahresponse.org</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-300 mt-1" size={18} />
                <div>
                  <div className="font-semibold">Headquarters</div>
                  <div className="text-gray-300">123 Safety Way, Washington DC</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-lg font-bold mb-6">Trusted Partners</h3>
            <div className="grid grid-cols-2 gap-4">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-white/10 p-4 rounded-lg text-center hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <Globe className="mx-auto mb-2 text-blue-300" size={24} />
                  <div className="font-semibold">{partner.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} N.O.A.H. Disaster Response System. All rights reserved. 
            This is a demonstration system for emergency preparedness.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            In case of real emergency, please call 911 or your local emergency services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;