import React from 'react';
import Weather from './Weather';
import Temperature from './Temperature';

export default function WeatherHeader({ weatherData }) {
  const { weather, main } = weatherData;
  return (
    <div className="relative flex justify-between pt-12">
      <Temperature main={main} />

      <Weather weather={weather} />
    </div>
  );
}
