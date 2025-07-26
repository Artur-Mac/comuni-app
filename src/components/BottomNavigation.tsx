import React from 'react';
import { Map, HelpCircle, Calendar, Heart, Plus } from 'lucide-react';
import { TabType } from '../types';

interface BottomNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onAddPin: () => void;
}

const tabs: { id: TabType; label: string; icon: React.ElementType }[] = [
  { id: 'map', label: 'Mapa', icon: Map },
  { id: 'help', label: 'Ajuda', icon: HelpCircle },
  { id: 'events', label: 'Eventos', icon: Calendar },
  { id: 'favorites', label: 'Favoritos', icon: Heart }
];

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabChange,
  onAddPin
}) => {
  return (
    <div className="relative">
      {/* Floating Action Button */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={onAddPin}
          aria-label="Adicionar marcador"
          className="w-14 h-14 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white rounded-full shadow-lg active:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-400 animate-bounce-once"
        >
          <Plus size={24} />
        </button>
      </div>


      {/* Navigation Bar */}
      <nav className="bg-white border-t border-primary-200 px-4 py-2">
        <div className="flex justify-around items-center">
          {tabs.map(({ id, label, icon: IconComponent }) => {
            const isActive = activeTab === id;

            return (
              <button
                key={id}
                onClick={() => onTabChange(id)}
                aria-label={`Ir para ${label}`}
                className={`flex flex-col items-center py-2 px-3 transition-colors ${isActive
                    ? 'text-primary-600 font-bold'
                    : 'text-primary-400 hover:text-primary-600'
                  }`}
              >
                <IconComponent size={20} />
                <span className="text-xs mt-1 font-body font-medium">{label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default BottomNavigation;
