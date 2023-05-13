import React from 'react';
import Image from 'next/image';

export default function Weather({ weather }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="/"
        width="125"
        height="125"
      />
      <p className="text-3xl">{weather[0].main}</p>
    </div>
  );
}
