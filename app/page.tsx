'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SearchBar from './components/SearchBar';
import InfoPanel from './components/InfoPanel';
import { IPData } from '@/types';

// Dynamically import Map to avoid SSR issues with Leaflet
const Map = dynamic(() => import('./components/Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-200">
      <p>Loading map...</p>
    </div>
  ),
});

export default function Home() {
  const [ipData, setIpData] = useState<IPData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch user's IP on initial load
  useEffect(() => {
    fetchIPData();
  }, []);

  const fetchIPData = async (query?: string) => {
    setIsLoading(true);
    try {
      const url = query 
        ? `/api/ip?query=${encodeURIComponent(query)}`
        : '/api/ip';
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch IP data');
      }
      
      const data = await response.json();
      setIpData(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to fetch IP data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    fetchIPData(query);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Header */}
      <header className="relative w-full h-[280px] z-10">
        <div className="absolute inset-0">
          <div
            className="hidden md:block w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/pattern-bg-desktop.png)' }}
          />
          <div
            className="md:hidden w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/pattern-bg-mobile.png)' }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center pt-8">
          <h1 className="text-white text-[26px] md:text-[32px] font-medium mb-6 md:mb-7">
            IP Address Tracker
          </h1>
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>
      </header>

      {/* Info Panel - Centered Horizontally with mobile margins */}
      <section className="absolute left-1/2 transform -translate-x-1/2 top-[200px] z-20 w-[calc(100%-32px)] md:w-[90%] max-w-[1110px]">
        <InfoPanel data={ipData} />
      </section>

      {/* Map - Full Screen Background */}
      <section className="absolute top-0 left-0 w-full h-full z-0">
        {ipData && <Map lat={ipData.location.lat} lng={ipData.location.lng} />}
      </section>
    </main>
  );
}