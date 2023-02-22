import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WeatherView({ weatherData }) {
  const { weather, main, name, sys, wind } = weatherData;
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[85vh] m-auto p-4 text-gray-300 z-10 overflow-auto scrollbar-hide">
      {/* Top of the Layout */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="/"
            width="125"
            height="125"
          />
          <p className="text-3xl">{weather[0].main}</p>
        </div>
        <p className="text-9xl">{main.temp.toFixed()}&#176;</p>
      </div>

      {/* Bottom of the Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delayChildren: 0.3, staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="bg-black/75 p-8 rounded-lg"
      >
        <p className="text-xl text-center pb-6">
          Weather in {name}, {sys.country}
        </p>
        <div className="flex justify-between text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p>Feels like </p>
            <p className="text-2xl font-bold">
              {main.feels_like.toFixed(0)}&#176;
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p>Humidity</p>
            <p className="text-2xl font-bold">{main.humidity}%</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p>Winds</p>
            <p className="text-2xl font-bold">
              {(wind.speed * 1.609344).toFixed(0)} km/h
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
