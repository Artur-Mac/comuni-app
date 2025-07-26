import { PinCategory } from '../types';

export const PIN_CATEGORIES: PinCategory[] = [
  {
    id: 'security',
    name: 'Segurança',
    icon: 'Shield',
    color: '#1f2937',     // cinza escuro (segurança, sobriedade)
    bgColor: '#e5e7eb'     // cinza claro
  },
  {
    id: 'snacks',
    name: 'Lanchonetes',
    icon: 'Coffee',
    color: '#d97706',      // laranja médio
    bgColor: '#fef3c7'     // amarelo claro
  },
  {
    id: 'coffee',
    name: 'Café',
    icon: 'Coffee',
    color: '#6b3e26',      // marrom café
    bgColor: '#f3e8e3'     // bege claro
  },
  {
    id: 'events',
    name: 'Eventos',
    icon: 'Calendar',
    color: '#7c3aed',      // roxo vibrante
    bgColor: '#ede9fe'     // lavanda clara
  },
  {
    id: 'accessibility',
    name: 'Acessibilidade',
    icon: 'Accessibility',
    color: '#15803d',      // verde escuro
    bgColor: '#dcfce7'     // verde claro
  },
  {
    id: 'flooding',
    name: 'Alagamento',
    icon: 'CloudRain',
    color: '#2563eb',      // azul forte
    bgColor: '#dbeafe'     // azul claro
  },
  {
    id: 'alerts',
    name: 'Alertas',
    icon: 'AlertTriangle',
    color: '#dc2626',      // vermelho alerta
    bgColor: '#fee2e2'     // vermelho claro
  }
];
