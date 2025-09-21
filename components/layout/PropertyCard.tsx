import React from 'react';
import Image from 'next/image';
import { PropertyProps } from '@/interfaces';

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
        />
        {property.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
            {property.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{property.name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-sm text-gray-600">{property.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-2">
          {property.address.city}, {property.address.country}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {property.category.slice(0, 2).map((cat, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
          <span>🛏️ {property.offers.bed} beds</span>
          <span>🚿 {property.offers.shower} showers</span>
          <span>👥 {property.offers.occupants} occupants</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            ${property.price}
            <span className="text-sm text-gray-600">/night</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;