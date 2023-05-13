import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Weather({ weather }) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <Image
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="/"
        width="125"
        height="125"
      />
      <p className="text-3xl">{weather[0].main}</p>
    </motion.div>
  );
}
