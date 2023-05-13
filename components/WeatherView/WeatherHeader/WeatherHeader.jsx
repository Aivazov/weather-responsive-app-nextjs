import React from 'react';
// import Image from 'next/image';
import Weather from './Weather';
import Temperature from './Temperature';

export default function WeatherHeader({ weatherData }) {
  const { weather, main } = weatherData;
  return (
    <div className="relative flex justify-between pt-12">
      {/* <Weather {...weatherData} /> */}
      <Weather weather={weather} />
      {/* <div className="flex flex-col items-center">
        <Image
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="/"
          width="125"
          height="125"
        />
        <p className="text-3xl">{weather[0].main}</p>
      </div> */}

      <Temperature main={main} />
    </div>
  );
}
