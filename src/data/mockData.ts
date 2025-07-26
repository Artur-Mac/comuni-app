import { MapPin, Notification } from '../types';
import { PIN_CATEGORIES } from './categories';

// UFPE Recife campus approximate coordinates
export const UFPE_CENTER = {
  lat: -8.0536,
  lng: -34.9513
};

export const MOCK_PINS: MapPin[] = [
  {
    id: '1',
    title: 'Cantina Central',
    description: 'Principal área de alimentação do campus',
    category: PIN_CATEGORIES.find(c => c.id === 'snacks')!,
    latitude: -8.0535,
    longitude: -34.9510,
    upvotes: 24,
    timestamp: new Date('2025-01-11T10:00:00')
  },
  {
    id: '2',
    title: 'Segurança CIn',
    description: 'Posto de segurança do Centro de Informática',
    category: PIN_CATEGORIES.find(c => c.id === 'security')!,
    latitude: -8.0540,
    longitude: -34.9515,
    upvotes: 18,
    timestamp: new Date('2025-01-11T09:30:00')
  },
  {
    id: '3',
    title: 'Café da Física',
    description: 'Cafeteria no prédio de Física',
    category: PIN_CATEGORIES.find(c => c.id === 'coffee')!,
    latitude: -8.0530,
    longitude: -34.9520,
    upvotes: 31,
    timestamp: new Date('2025-01-11T08:15:00')
  },
  {
    id: '4',
    title: 'Semana Acadêmica',
    description: 'Evento da Engenharia Civil - Anfiteatro',
    category: PIN_CATEGORIES.find(c => c.id === 'events')!,
    latitude: -8.0525,
    longitude: -34.9505,
    upvotes: 42,
    timestamp: new Date('2025-01-11T14:00:00')
  },
  {
    id: '5',
    title: 'Rampa de Acesso',
    description: 'Acesso para cadeirantes - Biblioteca',
    category: PIN_CATEGORIES.find(c => c.id === 'accessibility')!,
    latitude: -8.0545,
    longitude: -34.9518,
    upvotes: 15,
    timestamp: new Date('2025-01-11T07:20:00')
  },
  {
    id: '6',
    title: 'Área Alagada',
    description: 'Rua lateral alagada após chuva',
    category: PIN_CATEGORIES.find(c => c.id === 'flooding')!,
    latitude: -8.0550,
    longitude: -34.9525,
    upvotes: 8,
    timestamp: new Date('2025-01-11T11:45:00')
  }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    message: 'Alerta: Área alagada próxima à biblioteca',
    type: 'warning',
    timestamp: new Date('2025-01-11T11:45:00')
  },
  {
    id: '2',
    message: 'Evento: Semana Acadêmica acontecendo no anfiteatro',
    type: 'info',
    timestamp: new Date('2025-01-11T14:00:00')
  }
];