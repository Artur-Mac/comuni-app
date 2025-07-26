import React from 'react';
import { X } from 'lucide-react';
import { PIN_CATEGORIES } from '../data/categories';
import * as LucideIcons from 'lucide-react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategories: string[];
  onToggleCategory: (categoryId: string) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  selectedCategories,
  onToggleCategory
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex items-end sm:items-center justify-center">
      <div className="bg-warm-50 w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl max-h-[80vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-primary-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-heading text-primary-900 tracking-wide">FILTRAR CATEGORIAS</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-primary-100 transition-colors"
            >
              <X size={20} className="text-primary-600" />
            </button>
          </div>
        </div>

        {/* Category List */}
        <div className="p-4 sm:p-6 space-y-3">
          {PIN_CATEGORIES.map((category) => {
            const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.MapPin;
            const isSelected = selectedCategories.includes(category.id);

            return (
              <button
                key={category.id}
                onClick={() => onToggleCategory(category.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                  isSelected
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-primary-200 bg-white hover:bg-primary-50'
                }`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: category.bgColor }}
                >
                  <IconComponent size={20} style={{ color: category.color }} />
                </div>

                <div className="flex-1 text-left">
                  <h3 className="font-body font-medium text-primary-900">{category.name}</h3>
                </div>

                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? 'border-primary-500 bg-primary-500' : 'border-primary-300'
                  }`}
                >
                  {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
              </button>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="p-4 sm:px-6 sm:pb-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              PIN_CATEGORIES.forEach((cat) => onToggleCategory(cat.id));
            }}
            className="flex-1 py-3 px-4 bg-primary-100 text-primary-700 rounded-lg font-body font-medium hover:bg-primary-200 transition-colors"
          >
            Selecionar Todos
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-primary-600 text-white rounded-lg font-body font-medium hover:bg-primary-700 transition-colors"
          >
            Aplicar Filtros
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
