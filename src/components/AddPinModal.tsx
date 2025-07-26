import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PinCategory } from '../types';
import { PIN_CATEGORIES } from '../data/categories';
import * as LucideIcons from 'lucide-react';

interface AddPinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    title: string;
    description: string;
    category: PinCategory;
    latitude: number;
    longitude: number;
  }) => void;
  selectedLocation?: { lat: number; lng: number };
}

const AddPinModal: React.FC<AddPinModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  selectedLocation
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PinCategory | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !selectedCategory || !selectedLocation) {
      return;
    }

    onSubmit({
      title,
      description,
      category: selectedCategory,
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng
    });

    // Reset form
    setTitle('');
    setDescription('');
    setSelectedCategory(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
      <div className="bg-white rounded-t-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Adicionar Pin</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Cantina Central"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição *
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descreva o local ou situação..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoria *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {PIN_CATEGORIES.map((category) => {
                  const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.MapPin;
                  const isSelected = selectedCategory?.id === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 bg-white hover:bg-gray-50'
                      }`}
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: category.color }}
                      >
                        <IconComponent size={12} color="white" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {category.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Location Info */}
            {selectedLocation && (
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Local Selecionado:</h4>
                <p className="text-xs text-gray-600">
                  Lat: {selectedLocation.lat.toFixed(6)}, Lng: {selectedLocation.lng.toFixed(6)}
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={!title || !description || !selectedCategory || !selectedLocation}
              className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Adicionar Pin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPinModal;