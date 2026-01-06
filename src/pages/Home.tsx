// pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Navigation, 
  Thermometer, 
  MapPin, 
  Users, 
  Shield, 
  AlertTriangle,
  Wifi,
  Download,
  Bell
} from 'lucide-react';
import EmergencyAlert from '../components/EmergencyAlert';


const Home: React.FC = () => {
  const features = [
    {
      icon: <Navigation className="text-blue-600" size={28} />,
      title: 'Evacuation Guidance',
      description: 'Step-by-step evacuation routes based on real-time hazard data',
      path: '/evacuation',
      color: 'bg-blue-50'
    },
    {
      icon: <Thermometer className="text-red-600" size={28} />,
      title: 'Hazard Monitoring',
      description: 'Real-time heat and hazard risk assessment',
      path: '/hazards',
      color: 'bg-red-50'
    },
    {
      icon: <MapPin className="text-green-600" size={28} />,
      title: 'Resource Mapping',
      description: 'Locate shelters, medical aid, food, and water sources',
      path: '/resources',
      color: 'bg-green-50'
    },
    {
      icon: <Users className="text-purple-600" size={28} />,
      title: 'Family Support',
      description: 'Stay connected with loved ones during emergencies',
      path: '/family-support',
      color: 'bg-purple-50'
    },
    {
      icon: <Shield className="text-yellow-600" size={28} />,
      title: 'Emergency Protocols',
      description: 'Access critical survival guides offline',
      path: '/about',
      color: 'bg-yellow-50'
    },
    {
      icon: <Wifi className="text-indigo-600" size={28} />,
      title: 'Offline Functionality',
      description: 'Works without internet or cellular service',
      path: '/settings',
      color: 'bg-indigo-50'
    }
  ];

  const emergencyContacts = [
    { name: 'Emergency Services', number: '911' },
    { name: 'Red Cross', number: '1-800-RED-CROSS' },
    { name: 'FEMA', number: '1-800-621-FEMA' },
    { name: 'Poison Control', number: '1-800-222-1222' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Emergency Alert Banner */}
      <EmergencyAlert 
        level="warning" 
        message="Severe weather alert for your area. Stay informed."
      />

      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full mb-6">
          <AlertTriangle className="text-white" size={40} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          N.O.A.H. Disaster Response System
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          All-in-one disaster backup system that guides evacuation, monitors risks, 
          maps resources, and supports communities when infrastructure fails.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link
            to="/dashboard"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
          >
            Launch Dashboard
          </Link>
          <button className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-all flex items-center justify-center gap-2">
            <Download size={20} />
            Download Emergency Kit
          </button>
        </div>

        {/* Status Indicators */}
       
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.path}
              className={`${feature.color} p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Emergency Contacts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {emergencyContacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-red-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="font-semibold text-gray-900">{contact.name}</div>
              <div className="text-lg font-bold text-red-600 mt-1">
                {contact.number}
              </div>
              <button className="mt-3 w-full py-2 bg-red-100 text-red-700 rounded-md font-medium hover:bg-red-200 transition-colors">
                Call Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Offline Mode Info */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-3">
              
              <h3 className="text-xl font-bold text-gray-900">Offline Mode Available</h3>
            </div>
            <p className="text-gray-600 max-w-2xl">
              N.O.A.H. continues to function even when internet and cellular services are down. 
              Critical maps, guides, and resources are stored locally on your device.
            </p>
          </div>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Enable Offline Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;