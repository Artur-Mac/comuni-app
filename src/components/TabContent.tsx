import React from 'react';
import { TabType } from '../types';
import { Calendar, Heart, HelpCircle, MapPin } from 'lucide-react';

interface TabContentProps {
  activeTab: TabType;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  if (activeTab === 'map') return null;

  const renderContent = () => {
    switch (activeTab) {
      case 'help':
        return (
          <div className="p-6 text-center">
            <HelpCircle size={48} className="text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Central de Ajuda</h2>
            <p className="text-gray-600 mb-6">
              Solicite ou ofereça ajuda para a comunidade acadêmica
            </p>
            <div className="space-y-3">
              <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Solicitar Ajuda
              </button>
              <button className="w-full py-3 px-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                Oferecer Ajuda
              </button>
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="p-6 text-center">
            <Calendar size={48} className="text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Eventos do Campus</h2>
            <p className="text-gray-600 mb-6">
              Descubra eventos próximos e atividades acadêmicas
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Próximos Eventos:</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Semana Acadêmica - Engenharia</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Palestra - Centro de Informática</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Festival de Cultura</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'favorites':
        return (
          <div className="p-6 text-center">
            <Heart size={48} className="text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Locais Favoritos</h2>
            <p className="text-gray-600 mb-6">
              Seus locais salvos e mais visitados no campus
            </p>
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin size={18} className="text-orange-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-medium text-gray-900">Cantina Central</h3>
                  <p className="text-sm text-gray-600">Lanchonetes</p>
                </div>
                <Heart size={18} className="text-red-500 fill-current" />
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin size={18} className="text-green-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-medium text-gray-900">Rampa de Acesso</h3>
                  <p className="text-sm text-gray-600">Acessibilidade</p>
                </div>
                <Heart size={18} className="text-red-500 fill-current" />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white h-full overflow-y-auto">
      {renderContent()}
    </div>
  );
};

export default TabContent;