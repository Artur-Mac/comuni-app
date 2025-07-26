import React, { useState, useEffect } from 'react';
import { MapPin, TabType } from './types';
import { MOCK_PINS, MOCK_NOTIFICATIONS } from './data/mockData';
import { PIN_CATEGORIES } from './data/categories';
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import FilterModal from './components/FilterModal';
import AddPinModal from './components/AddPinModal';
import NotificationBar from './components/NotificationBar';
import BottomNavigation from './components/BottomNavigation';
import TabContent from './components/TabContent';

function App() {
  const [pins, setPins] = useState<MapPin[]>(MOCK_PINS);
  const [filteredPins, setFilteredPins] = useState<MapPin[]>(MOCK_PINS);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    PIN_CATEGORIES.map(c => c.id)
  );
  const [activeTab, setActiveTab] = useState<TabType>('map');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showAddPinModal, setShowAddPinModal] = useState(false);
  const [addingPin, setAddingPin] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [currentNotification, setCurrentNotification] = useState(MOCK_NOTIFICATIONS[0]);

  // Filter pins based on search and categories
  useEffect(() => {
    let filtered = pins.filter(pin => 
      selectedCategories.includes(pin.category.id)
    );

    if (searchValue.trim()) {
      const searchLower = searchValue.toLowerCase().trim();
      filtered = filtered.filter(pin =>
        pin.title.toLowerCase().includes(searchLower) ||
        pin.description.toLowerCase().includes(searchLower) ||
        pin.category.name.toLowerCase().includes(searchLower)
      );
    }

    setFilteredPins(filtered);
  }, [pins, selectedCategories, searchValue]);

  const handleToggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const handleAddPin = () => {
    setActiveTab('map');
    setAddingPin(true);
    setSelectedLocation(null);
  };

  const handleMapClick = (lat: number, lng: number) => {
    if (addingPin) {
      setSelectedLocation({ lat, lng });
      setAddingPin(false);
      setShowAddPinModal(true);
    }
  };

  const handleSubmitPin = (data: {
    title: string;
    description: string;
    category: any;
    latitude: number;
    longitude: number;
  }) => {
    const newPin: MapPin = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description,
      category: data.category,
      latitude: data.latitude,
      longitude: data.longitude,
      upvotes: 0,
      timestamp: new Date()
    };

    setPins(prev => [...prev, newPin]);
    setSelectedLocation(null);
  };

  return (
    <div className="h-screen flex flex-col bg-warm-50">
      {/* Header */}
      <Header
        onFilterClick={() => setShowFilterModal(true)}
        onProfileClick={() => console.log('Profile clicked')}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />

      {/* Main Content */}
      <div className="flex-1 relative">
        {activeTab === 'map' ? (
          <MapComponent
            pins={filteredPins}
            onMapClick={handleMapClick}
            addingPin={addingPin}
          />
        ) : (
          <TabContent activeTab={activeTab} />
        )}
      </div>

      {/* Notification Bar */}
      {currentNotification && (
        <NotificationBar
          notification={currentNotification}
          onDismiss={() => setCurrentNotification(null)}
        />
      )}

      {/* Bottom Navigation */}
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onAddPin={handleAddPin}
      />

      {/* Modals */}
      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        selectedCategories={selectedCategories}
        onToggleCategory={handleToggleCategory}
      />

      <AddPinModal
        isOpen={showAddPinModal}
        onClose={() => {
          setShowAddPinModal(false);
          setSelectedLocation(null);
          setAddingPin(false);
        }}
        onSubmit={handleSubmitPin}
        selectedLocation={selectedLocation}
      />
    </div>
  );
}

export default App;