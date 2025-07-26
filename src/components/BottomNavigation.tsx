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
          className="w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105"
        >
          <Plus size={24} />
        </button>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-t border-primary-200 px-4 py-2">
        <div className="flex justify-around">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const IconComponent = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center py-2 px-3 transition-colors ${
                  isActive ? 'text-primary-600' : 'text-primary-400 hover:text-primary-600'
                }`}
              >
                <IconComponent size={20} />
                <span className="text-xs mt-1 font-body font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;