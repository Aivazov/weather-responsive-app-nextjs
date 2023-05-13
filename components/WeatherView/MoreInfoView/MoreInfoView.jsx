import React from 'react';
import { motion } from 'framer-motion';
import FeelsLike from './FeelsLike';
import Humidity from './Humidity';
import Winds from './Winds';

export default function MoreInfoView({ weatherData }) {
  const { name, sys } = weatherData;
  return (
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
        <FeelsLike {...weatherData} />

        <Humidity {...weatherData} />

        <Winds {...weatherData} />
      </div>
    </motion.div>
  );
}
