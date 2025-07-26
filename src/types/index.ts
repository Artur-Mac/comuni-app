export interface MapPin {
  id: string;
  title: string;
  description: string;
  category: PinCategory;
  latitude: number;
  longitude: number;
  upvotes: number;
  timestamp: Date;
  userId?: string;
}

export interface PinCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
}

export interface Notification {
  id: string;
  message: string;
  type: 'alert' | 'info' | 'warning';
  timestamp: Date;
}

export type TabType = 'map' | 'help' | 'events' | 'favorites';