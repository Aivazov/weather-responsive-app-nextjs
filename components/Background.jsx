import Image from 'next/image';
import React from 'react';

export default function Background() {
  return (
    <Image
      src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2022/10/CLI371.weather.double_rainbow_cammie_czuchnicki-920x614.jpg"
      alt="/"
      layout="fill"
      className="object-cover"
    />
  );
}
