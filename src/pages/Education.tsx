import React from 'react';
import LearningCenter from '../components/education/LearningCenter';
import MarketAnalysis from '../components/education/MarketAnalysis';

export default function Education() {
  return (
    <div className="pt-16">
      <LearningCenter />
      <MarketAnalysis />
    </div>
  );
}