import React from 'react';
import MoreInfoView from './MoreInfoView/MoreInfoView';
import WeatherHeader from './WeatherHeader/WeatherHeader';

export default function WeatherView({ weatherData }) {
  // const { weather, main, name, sys, wind } = weatherData;
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[85vh] m-auto p-4 text-gray-300 z-10 overflow-auto scrollbar-hide">
      {/* Top of the Layout */}
      <WeatherHeader weatherData={weatherData} />

      {/* Bottom of the Layout */}
      <MoreInfoView weatherData={weatherData} />
    </div>
  );
}
