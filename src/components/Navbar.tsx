// components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Map, 
  Navigation, 
  Thermometer, 
  Users, 
  Info, 
  Settings,
  Menu,
  X,
  AlertTriangle,
  Wifi,
  WifiOff
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'online' | 'offline'>('online');
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Dashboard', path: '/dashboard', icon: <Map size={20} /> },
    { name: 'Evacuation Guide', path: '/evacuation', icon: <Navigation size={20} /> },
    { name: 'Hazard Monitor', path: '/hazards', icon: <Thermometer size={20} /> },
    { name: 'Resource Map', path: '/resources', icon: <Map size={20} /> },
    { name: 'Family Support', path: '/family-support', icon: <Users size={20} /> },
    { name: 'About', path: '/about', icon: <Info size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  const toggleConnection = () => {
    setConnectionStatus(prev => prev === 'online' ? 'offline' : 'online');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg">
              <AlertTriangle className="text-blue-900" size={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold">N.O.A.H.</h1>
              <p className="text-xs text-blue-200">Disaster Response System</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'bg-blue-800 text-white'
                    : 'hover:bg-blue-800/50 text-blue-100'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Connection Status */}
            <button
              onClick={toggleConnection}
              className={`ml-4 flex items-center space-x-2 px-3 py-2 rounded-lg ${
                connectionStatus === 'online' 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {connectionStatus === 'online' ? <Wifi size={20} /> : <WifiOff size={20} />}
              <span className="hidden lg:inline">
                {connectionStatus === 'online' ? 'Online Mode' : 'Offline Mode'}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-700">
            <div className="flex flex-col space-y-2">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                    location.pathname === item.path
                      ? 'bg-blue-800 text-white'
                      : 'hover:bg-blue-800/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <button
                onClick={toggleConnection}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg mt-2 ${
                  connectionStatus === 'online' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {connectionStatus === 'online' ? <Wifi size={20} /> : <WifiOff size={20} />}
                <span>{connectionStatus === 'online' ? 'Online Mode' : 'Offline Mode'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;