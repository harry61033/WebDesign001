import React from 'react';

const instruments = [
  {
    category: 'Forex',
    pairs: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'USD/CHF'],
    spread: 'from 0.1 pips'
  },
  {
    category: 'Commodities',
    pairs: ['XAUUSD', 'XAGUSD', 'USOIL', 'UKOIL'],
    spread: 'from 0.3 pips'
  },
  {
    category: 'Indices',
    pairs: ['US30', 'SPX500', 'UK100', 'GER40'],
    spread: 'from 0.8 points'
  },
  {
    category: 'Cryptocurrencies',
    pairs: ['BTC/USD', 'ETH/USD', 'XRP/USD', 'LTC/USD'],
    spread: 'from 0.5%'
  }
];

export default function TradingInstruments() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Trading Instruments</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instruments.map((instrument) => (
            <div key={instrument.category} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">{instrument.category}</h3>
              <ul className="space-y-2 mb-4">
                {instrument.pairs.map((pair) => (
                  <li key={pair} className="text-gray-600">{pair}</li>
                ))}
              </ul>
              <p className="text-sm text-blue-900 font-semibold">
                Spread: {instrument.spread}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}