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
            <HelpCircle size={48} className="text-primary-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading text-primary-900 mb-2 tracking-wide">CENTRAL DE AJUDA</h2>
            <p className="text-primary-600 mb-6 font-body">
              Solicite ou ofereça ajuda para a comunidade acadêmica
            </p>
            <div className="space-y-3">
              <button className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg font-body font-medium hover:bg-primary-700 transition-colors">
                Solicitar Ajuda
              </button>
              <button className="w-full py-3 px-4 bg-warm-600 text-white rounded-lg font-body font-medium hover:bg-warm-700 transition-colors">
                Oferecer Ajuda
              </button>
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="p-6 text-center">
            <Calendar size={48} className="text-primary-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading text-primary-900 mb-2 tracking-wide">EVENTOS DO CAMPUS</h2>
            <p className="text-primary-600 mb-6 font-body">
              Descubra eventos próximos e atividades acadêmicas
            </p>
            <div className="bg-primary-50 rounded-lg p-4 text-left">
              <h3 className="font-body font-semibold text-primary-900 mb-2">Próximos Eventos:</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-sm font-body text-primary-700">Semana Acadêmica - Engenharia</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-warm-500 rounded-full"></div>
                  <span className="text-sm font-body text-primary-700">Palestra - Centro de Informática</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-700 rounded-full"></div>
                  <span className="text-sm font-body text-primary-700">Festival de Cultura</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'favorites':
        return (
          <div className="p-6 text-center">
            <Heart size={48} className="text-primary-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading text-primary-900 mb-2 tracking-wide">LOCAIS FAVORITOS</h2>
            <p className="text-primary-600 mb-6 font-body">
              Seus locais salvos e mais visitados no campus
            </p>
            <div className="space-y-3">
              <div className="bg-white border border-primary-200 rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-warm-100 rounded-full flex items-center justify-center">
                  <MapPin size={18} className="text-warm-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-body font-medium text-primary-900">Cantina Central</h3>
                  <p className="text-sm font-body text-primary-600">Lanchonetes</p>
                </div>
                <Heart size={18} className="text-primary-500 fill-current" />
              </div>
              
              <div className="bg-white border border-primary-200 rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <MapPin size={18} className="text-primary-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-body font-medium text-primary-900">Rampa de Acesso</h3>
                  <p className="text-sm font-body text-primary-600">Acessibilidade</p>
                </div>
                <Heart size={18} className="text-primary-500 fill-current" />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-warm-50 h-full overflow-y-auto">
      {renderContent()}
    </div>
  );
};

export default TabContent;