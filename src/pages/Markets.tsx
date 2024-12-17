import React from 'react';
import MarketOverview from '../components/markets/MarketOverview';
import TradingInstruments from '../components/markets/TradingInstruments';

export default function Markets() {
  return (
    <div className="pt-16">
      <MarketOverview />
      <TradingInstruments />
    </div>
  );
}