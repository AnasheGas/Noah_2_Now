// components/EmergencyAlert.tsx
import React from 'react';
import { AlertTriangle, X, Bell } from 'lucide-react';

interface EmergencyAlertProps {
  level: 'info' | 'warning' | 'danger';
  message: string;
  onDismiss?: () => void;
}

const EmergencyAlert: React.FC<EmergencyAlertProps> = ({ level, message, onDismiss }) => {
  const alertConfig = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: <Bell className="text-blue-600" size={24} />
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: <AlertTriangle className="text-yellow-600" size={24} />
    },
    danger: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: <AlertTriangle className="text-red-600" size={24} />
    }
  };

  const config = alertConfig[level];

  return (
    <div className={`${config.bg} border ${config.border} rounded-lg p-4 mb-6 ${config.text}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          {config.icon}
          <div className="flex-1">
            <div className="font-bold">
              {level === 'danger' ? 'EMERGENCY ALERT' : 
               level === 'warning' ? 'WARNING' : 'INFORMATION'}
            </div>
            <p className="mt-1">{message}</p>
          </div>
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className={`${config.text} hover:opacity-75 transition-opacity`}
          >
            <X size={20} />
          </button>
        )}
      </div>
      <div className="mt-3 flex gap-3">
        <button className="px-4 py-2 bg-white border border-current rounded-md font-medium hover:bg-opacity-10 transition-colors">
          View Details
        </button>
        <button className="px-4 py-2 bg-current text-white rounded-md font-medium hover:opacity-90 transition-opacity">
          Take Action
        </button>
      </div>
    </div>
  );
};

export default EmergencyAlert;