import React from 'react';
import { motion } from 'framer-motion';

export default function Winds({ wind }) {
  return (
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
  );
}
