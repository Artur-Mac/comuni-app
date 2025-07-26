import React from 'react';
import { Map, HelpCircle, Calendar, Heart, Plus } from 'lucide-react';
import { TabType } from '../types';

interface BottomNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onAddPin: () => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabChange,
  onAddPin
}) => {
  const tabs = [
    { id: 'map' as TabType, label: 'Mapa', icon: Map },
    { id: 'help' as TabType, label: 'Ajuda', icon: HelpCircle },
    { id: 'events' as TabType, label: 'Eventos', icon: Calendar },
    { id: 'favorites' as TabType, label: 'Favoritos', icon: Heart }
  ];

  return (
    <div className="relative">
      {/* Floating Action Button */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={onAddPin}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        >
          <Plus size={24} />
        </button>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const IconComponent = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center py-2 px-3 transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <IconComponent size={20} />
                <span className="text-xs mt-1 font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;