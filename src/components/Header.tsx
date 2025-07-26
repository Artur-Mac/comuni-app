import React from 'react';
import { Search, Filter, User } from 'lucide-react';

interface HeaderProps {
  onFilterClick: () => void;
  onProfileClick: () => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  onFilterClick,
  onProfileClick,
  searchValue,
  onSearchChange
}) => {
  return (
    <div className="bg-white shadow-lg border-b border-primary-200 p-4">
      <div className="flex items-center gap-3">
        {/* Filter Button */}
        <button
          onClick={onFilterClick}
          className="p-2 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors"
        >
          <Filter size={20} className="text-primary-600" />
        </button>

        {/* Search Bar */}
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-primary-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar locais ou pins..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-body"
          />
        </div>

        {/* Profile Button */}
        <button
          onClick={onProfileClick}
          className="p-2 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors"
        >
          <User size={20} className="text-primary-600" />
        </button>
      </div>
    </div>
  );
};

export default Header;