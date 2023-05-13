import React from 'react';

export default function Temperature({ main }) {
  return <p className="text-9xl">{main.temp.toFixed()}&#176;</p>;
}
