import React from 'react';
import { Clock, DollarSign, CheckCircle } from 'lucide-react';

interface PackageDetailsProps {
  duration?: number;
  price?: number;
  highlights?: string[];
}

export const PackageDetails: React.FC<PackageDetailsProps> = ({ duration, price, highlights }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Clock className="w-6 h-6 text-primary" />
        <p className="text-lg">
          <strong>Duration:</strong> {duration || 'N/A'} days
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <DollarSign className="w-6 h-6 text-primary" />
        <p className="text-lg">
          <strong>Starting Price:</strong> ${price?.toLocaleString() || 'N/A'}
        </p>
      </div>
      {highlights && highlights.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Highlights</h3>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

