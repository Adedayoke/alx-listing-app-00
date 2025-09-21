'use client';

import React, { useState } from 'react';
import Pill from '@/components/layout/Pill';
import PropertyCard from '@/components/layout/PropertyCard';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

const filterOptions = [
  'Top Villa',
  'Self Checkin',
  'Free WiFi',
  'Pet Friendly',
  'Pool',
  'Beachfront',
  'Mountain View',
  'City Center'
];

export default function Home() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredProperties = PROPERTYLISTINGSAMPLE.filter(property =>
    activeFilters.length === 0 ||
    activeFilters.some(filter =>
      property.category.some((cat: string) =>
        cat.toLowerCase().includes(filter.toLowerCase())
      )
    )
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Filter Properties</h2>
          <div className="flex flex-wrap gap-3">
            {filterOptions.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilters.includes(filter)}
                onClick={() => toggleFilter(filter)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Available Properties ({filteredProperties.length})
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
