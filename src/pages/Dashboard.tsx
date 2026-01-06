// pages/Dashboard.tsx
import React, { useState } from 'react';
import { 
  Map, 
  Thermometer, 
  Navigation, 
  Users, 
  AlertTriangle, 
  Battery,
  Wifi,
  Cloud,
  Wind,
  Droplets,
  Shield
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [location, setLocation] = useState('New York, NY');
  const [emergencyLevel, setEmergencyLevel] = useState<'low' | 'moderate' | 'high'>('moderate');

  const hazardData = [
    { type: 'Fire Risk', level: 'High', value: 85, icon: <Thermometer />, color: 'bg-red-500' },
    { type: 'Flood Risk', level: 'Moderate', value: 45, icon: <Droplets />, color: 'bg-blue-500' },
    { type: 'Wind Risk', level: 'Low', value: 25, icon: <Wind />, color: 'bg-green-500' },
    { type: 'Infrastructure', level: 'Stable', value: 90, icon: <Shield />, color: 'bg-purple-500' },
  ];

  const evacuationZones = [
    { name: 'Zone A - Immediate', status: 'Evacuating', people: '1,234' },
    { name: 'Zone B - Warning', status: 'Preparing', people: '2,567' },
    { name: 'Zone C - Advisory', status: 'Monitoring', people: '3,890' },
    { name: 'Zone D - Safe', status: 'Sheltering', people: '4,321' },
  ];

  const resources = [
    { type: 'Shelters', available: 12, capacity: '85%' },
    { type: 'Medical', available: 8, capacity: '92%' },
    { type: 'Food/Water', available: 24, capacity: '67%' },
    { type: 'Power', available: 6, capacity: '45%' },
  ];

  const familyMembers = [
    { name: 'Sarah Johnson', status: 'safe', lastSeen: '2 min ago', location: 'Home' },
    { name: 'Michael Johnson', status: 'warning', lastSeen: '15 min ago', location: 'Work' },
    { name: 'Emily Johnson', status: 'safe', lastSeen: '5 min ago', location: 'School' },
    { name: 'David Johnson', status: 'danger', lastSeen: '45 min ago', location: 'Unknown' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Emergency Dashboard</h1>
        <p className="text-gray-600">Real-time disaster monitoring and response coordination</p>
      </div>

      {/* Location & Emergency Level */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Current Location</h2>
            <Map className="text-blue-600" size={24} />
          </div>
          <div className="text-2xl font-bold text-gray-900">{location}</div>
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <Wifi size={16} />
            <span>GPS: Active | Network: Stable</span>
          </div>
          <button className="mt-4 w-full py-2 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition-colors">
            Update Location
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Emergency Level</h2>
            <AlertTriangle className="text-yellow-600" size={24} />
          </div>
          <div className={`text-2xl font-bold mb-2 ${
            emergencyLevel === 'high' ? 'text-red-600' :
            emergencyLevel === 'moderate' ? 'text-yellow-600' : 'text-green-600'
          }`}>
            {emergencyLevel.charAt(0).toUpperCase() + emergencyLevel.slice(1)} Alert
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className={`h-2.5 rounded-full ${
              emergencyLevel === 'high' ? 'bg-red-600 w-full' :
              emergencyLevel === 'moderate' ? 'bg-yellow-600 w-2/3' : 'bg-green-600 w-1/3'
            }`}></div>
          </div>
          <p className="mt-4 text-gray-600">
            {emergencyLevel === 'high' ? 'Immediate action required' :
             emergencyLevel === 'moderate' ? 'Stay alert and prepared' :
             'Normal operations'}
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">System Status</h2>
            <Cloud className="text-indigo-600" size={24} />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Battery</span>
              <div className="flex items-center gap-2">
                <Battery size={20} />
                <span className="font-bold text-gray-900">78%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Offline Data</span>
              <span className="font-bold text-green-600">Ready</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Last Update</span>
              <span className="font-bold text-gray-900">2 min ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hazard Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Hazard Monitoring</h2>
          <div className="space-y-4">
            {hazardData.map((hazard, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${hazard.color} text-white`}>
                    {hazard.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{hazard.type}</div>
                    <div className={`text-sm font-bold ${
                      hazard.level === 'High' ? 'text-red-600' :
                      hazard.level === 'Moderate' ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {hazard.level}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{hazard.value}%</div>
                  <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className={`h-2 rounded-full ${hazard.color}`}
                      style={{ width: `${hazard.value}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evacuation Status */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Evacuation Status</h2>
            <Navigation className="text-blue-600" size={24} />
          </div>
          <div className="space-y-4">
            {evacuationZones.map((zone, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-gray-900">{zone.name}</div>
                    <div className="text-sm text-gray-600">{zone.people} people</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    zone.status === 'Evacuating' ? 'bg-red-100 text-red-800' :
                    zone.status === 'Preparing' ? 'bg-yellow-100 text-yellow-800' :
                    zone.status === 'Monitoring' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {zone.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all">
            View Evacuation Routes
          </button>
        </div>
      </div>

      {/* Resources & Family Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Available Resources</h2>
          <div className="grid grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">{resource.available}</div>
                <div className="text-gray-700 font-medium">{resource.type}</div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        parseInt(resource.capacity) > 80 ? 'bg-red-600' :
                        parseInt(resource.capacity) > 60 ? 'bg-yellow-600' : 'bg-green-600'
                      }`}
                      style={{ width: resource.capacity }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-gray-700">{resource.capacity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Family Status</h2>
            <Users className="text-purple-600" size={24} />
          </div>
          <div className="space-y-4">
            {familyMembers.map((member, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      member.status === 'safe' ? 'bg-green-500' :
                      member.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <div>
                      <div className="font-bold text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-600">{member.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-bold ${
                      member.status === 'safe' ? 'text-green-600' :
                      member.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {member.status.toUpperCase()}
                    </div>
                    <div className="text-xs text-gray-500">{member.lastSeen}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
            Send Status Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;