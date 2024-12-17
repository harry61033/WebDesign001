import React from 'react';
import PlatformComparison from '../components/platforms/PlatformComparison';
import PlatformFeatures from '../components/platforms/PlatformFeatures';

export default function Platforms() {
  return (
    <div className="pt-16">
      <PlatformComparison />
      <PlatformFeatures />
    </div>
  );
}