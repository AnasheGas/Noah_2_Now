// pages/ResourceMap.tsx
import React, { useState } from 'react';
import { 
  MapPin, 
  Filter, 
  Search, 
  Navigation, 
  Home, 
  Heart, 
  Droplets, 
  Zap,
  Shield,
  Clock,
  Phone,
  Star
} from 'lucide-react';

const ResourceMap: React.FC = () => {
  const [selectedResource, setSelectedResource] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const resourceTypes = [
    { id: 'all', label: 'All Resources', icon: <MapPin size={20} />, color: 'bg-blue-100 text-blue-700' },
    { id: 'shelter', label: 'Shelters', icon: <Home size={20} />, color: 'bg-red-100 text-red-700' },
    { id: 'medical', label: 'Medical', icon: <Heart size={20} />, color: 'bg-green-100 text-green-700' },
    { id: 'water', label: 'Water/Food', icon: <Droplets size={20} />, color: 'bg-blue-100 text-blue-700' },
    { id: 'power', label: 'Power', icon: <Zap size={20} />, color: 'bg-yellow-100 text-yellow-700' },
    { id: 'safety', label: 'Safety Zones', icon: <Shield size={20} />, color: 'bg-purple-100 text-purple-700' },
  ];

  const resources = [
    {
      id: 1,
      name: 'Central Emergency Shelter',
      type: 'shelter',
      distance: '2.3 mi',
      capacity: 'Medium',
      status: 'Open',
      address: '123 Main St, New York, NY',
      hours: '24/7',
      phone: '(555) 123-4567',
      rating: 4.5,
      description: 'Primary emergency shelter with medical facilities',
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 2,
      name: 'Community Hospital',
      type: 'medical',
      distance: '3.1 mi',
      capacity: 'High',
      status: 'Open',
      address: '456 Oak Ave, New York, NY',
      hours: '24/7',
      phone: '(555) 987-6543',
      rating: 4.8,
      description: 'Full-service hospital with emergency department',
      coordinates: { lat: 40.7589, lng: -73.9851 }
    },
    {
      id: 3,
      name: 'Water Distribution Center',
      type: 'water',
      distance: '1.5 mi',
      capacity: 'Low',
      status: 'Limited',
      address: '789 Pine St, New York, NY',
      hours: '6 AM - 10 PM',
      phone: '(555) 456-7890',
      rating: 4.2,
      description: 'Bottled water and non-perishable food',
      coordinates: { lat: 40.7306, lng: -73.9352 }
    },
    {
      id: 4,
      name: 'Emergency Power Station',
      type: 'power',
      distance: '4.2 mi',
      capacity: 'Medium',
      status: 'Open',
      address: '321 Elm Blvd, New York, NY',
      hours: '24/7',
      phone: '(555) 321-0987',
      rating: 4.0,
      description: 'Charging stations and generator access',
      coordinates: { lat: 40.7831, lng: -73.9712 }
    },
    {
      id: 5,
      name: 'Red Cross Safe Zone',
      type: 'safety',
      distance: '0.8 mi',
      capacity: 'High',
      status: 'Open',
      address: '654 Maple Dr, New York, NY',
      hours: '24/7',
      phone: '(555) 654-3210',
      rating: 4.7,
      description: 'Designated safety zone with supplies',
      coordinates: { lat: 40.7549, lng: -73.9840 }
    },
  ];

  const filteredResources = resources.filter(resource => {
    if (selectedResource !== 'all' && resource.type !== selectedResource) return false;
    if (searchQuery && !resource.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Resource Map</h1>
        <p className="text-gray-600">Locate emergency shelters, medical aid, food, water, and safety zones</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Filters and Search */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-8">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Resource Type Filters */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={20} />
                <h3 className="font-bold text-gray-900">Resource Type</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {resourceTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedResource(type.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-all ${
                      selectedResource === type.id
                        ? `${type.color} border-current`
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {type.icon}
                    <span className="mt-2 text-sm font-medium text-center">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Map Legend */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Map Legend</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Shelters</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Medical</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Water/Food</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Power</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Safety Zones</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  <Navigation size={20} />
                  Navigate to Nearest Shelter
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  <MapPin size={20} />
                  Save Offline Maps
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map View and Resource List */}
        <div className="lg:col-span-2">
          {/* Map Container */}
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl border border-gray-300 p-6 h-96 mb-6 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Mock Map - In a real app, integrate with Google Maps/Mapbox */}
              <div className="text-center">
                <div className="relative inline-block">
                  {/* Map background */}
                  <div className="w-64 h-64 bg-blue-50 border-2 border-blue-300 rounded-lg relative">
                    {/* Map markers */}
                    {resources.map((resource, index) => {
                      const colors = {
                        shelter: 'bg-red-500',
                        medical: 'bg-green-500',
                        water: 'bg-blue-500',
                        power: 'bg-yellow-500',
                        safety: 'bg-purple-500',
                      };
                      return (
                        <div
                          key={resource.id}
                          className={`absolute w-4 h-4 ${colors[resource.type as keyof typeof colors]} rounded-full border-2 border-white shadow-lg`}
                          style={{
                            left: `${20 + (index * 15)}%`,
                            top: `${30 + (index * 12)}%`,
                          }}
                        >
                          <div className="relative">
                            <div className="absolute -top-8 -left-8 w-20 bg-white p-2 rounded-lg shadow-lg border border-gray-200 hidden hover:block">
                              <div className="font-bold text-sm">{resource.name}</div>
                              <div className="text-xs text-gray-600">{resource.distance} away</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4">
                    <div className="text-lg font-bold text-gray-900">Interactive Resource Map</div>
                    <p className="text-gray-600 text-sm">Click on markers for more information</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="absolute bottom-4 right-4 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
              View Full Map
            </button>
          </div>

          {/* Resource List */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Available Resources ({filteredResources.length})
              </h2>
              <div className="text-sm text-gray-600">
                Sorted by distance
              </div>
            </div>

            <div className="space-y-4">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          resource.type === 'shelter' ? 'bg-red-100 text-red-700' :
                          resource.type === 'medical' ? 'bg-green-100 text-green-700' :
                          resource.type === 'water' ? 'bg-blue-100 text-blue-700' :
                          resource.type === 'power' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {resourceTypes.find(t => t.id === resource.type)?.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-lg text-gray-900">{resource.name}</h3>
                            <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                              resource.status === 'Open' ? 'bg-green-100 text-green-800' :
                              resource.status === 'Limited' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {resource.status}
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="text-yellow-500" size={16} fill="currentColor" />
                              <span className="text-sm font-bold">{resource.rating}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3">{resource.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                            <div className="flex items-center gap-1">
                              <Navigation size={16} />
                              <span className="font-semibold">{resource.distance} away</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={16} />
                              <span>{resource.hours}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Phone size={16} />
                              <span>{resource.phone}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Home size={16} />
                              <span>Capacity: {resource.capacity}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                        <Navigation size={18} />
                        Get Directions
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                        Save for Offline
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-600">{resource.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceMap;