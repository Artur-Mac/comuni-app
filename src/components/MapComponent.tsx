import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon, DivIcon } from 'leaflet';
import { MapPin } from '../types';
import { UFPE_CENTER } from '../data/mockData';
import { PIN_CATEGORIES } from '../data/categories';
import * as LucideIcons from 'lucide-react';
import 'leaflet/dist/leaflet.css';

interface MapComponentProps {
  pins: MapPin[];
  onPinClick?: (pin: MapPin) => void;
  onMapClick?: (lat: number, lng: number) => void;
  addingPin?: boolean;
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  pins, 
  onPinClick, 
  onMapClick, 
  addingPin 
}) => {
  const [selectedPin, setSelectedPin] = useState<MapPin | null>(null);

  // Component to handle map clicks
  const MapClickHandler = () => {
    const map = useMap();
    
    useEffect(() => {
      if (addingPin && onMapClick) {
        const handleClick = (e: any) => {
          onMapClick(e.latlng.lat, e.latlng.lng);
        };
        
        map.on('click', handleClick);
        return () => {
          map.off('click', handleClick);
        };
      }
    }, [map, addingPin, onMapClick]);

    return null;
  };

  // Create custom marker icons
  const createCustomIcon = (category: any) => {
    const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.MapPin;
    
    return new DivIcon({
      html: `
        <div style="
          background-color: ${category.color};
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        ">
          <svg width="18" height="18" fill="white" stroke="white" stroke-width="2">
            ${IconComponent ? `<use href="#${category.icon}"/>` : ''}
          </svg>
        </div>
      `,
      className: 'custom-div-icon',
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16]
    });
  };

  return (
    <div className="h-full w-full relative">
      <MapContainer
        center={[UFPE_CENTER.lat, UFPE_CENTER.lng]}
        zoom={17}
        className="h-full w-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapClickHandler />
        
        {pins.map((pin) => (
          <Marker
            key={pin.id}
            position={[pin.latitude, pin.longitude]}
            icon={createCustomIcon(pin.category)}
            eventHandlers={{
              click: () => {
                setSelectedPin(pin);
                onPinClick?.(pin);
              }
            }}
          >
            <Popup>
              <div className="p-2 min-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: pin.category.color }}
                  >
                    <span className="text-white text-xs">
                      {React.createElement(
                        (LucideIcons as any)[pin.category.icon] || LucideIcons.MapPin,
                        { size: 14 }
                      )}
                    </span>
                  </div>
                  <span 
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ 
                      backgroundColor: pin.category.bgColor,
                      color: pin.category.color 
                    }}
                  >
                    {pin.category.name}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{pin.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{pin.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {pin.timestamp.toLocaleDateString('pt-BR')}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium text-blue-600">{pin.upvotes}</span>
                    <span className="text-xs text-gray-500">curtidas</span>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {addingPin && (
        <div className="absolute top-4 left-4 right-4 z-1000 bg-blue-600 text-white p-3 rounded-lg shadow-lg">
          <p className="text-sm">📍 Toque no mapa para adicionar um novo pin</p>
        </div>
      )}
    </div>
  );
};

export default MapComponent;