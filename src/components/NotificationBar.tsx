import React from 'react';
import { AlertTriangle, Info, X } from 'lucide-react';
import { Notification } from '../types';

interface NotificationBarProps {
  notification: Notification;
  onDismiss: () => void;
}

const NotificationBar: React.FC<NotificationBarProps> = ({ notification, onDismiss }) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'alert':
        return <AlertTriangle size={16} />;
      case 'warning':
        return <AlertTriangle size={16} />;
      case 'info':
      default:
        return <Info size={16} />;
    }
  };

  const getBgColor = () => {
    switch (notification.type) {
      case 'alert':
        return 'bg-primary-600';
      case 'warning':
        return 'bg-warm-500';
      case 'info':
      default:
        return 'bg-primary-500';
    }
  };

  return (
    <div className={`${getBgColor()} text-white px-4 py-3 flex items-center gap-3 font-body`}>
      <div className="flex-shrink-0">
        {getIcon()}
      </div>
      
      <div className="flex-1 text-sm">
        {notification.message}
      </div>

      <button
        onClick={onDismiss}
        className="flex-shrink-0 p-1 hover:bg-black hover:bg-opacity-20 rounded"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default NotificationBar;