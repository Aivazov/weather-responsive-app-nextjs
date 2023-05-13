import React from 'react';
import { motion } from 'framer-motion';

export default function FeelsLike({ main }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <p>Feels like </p>
      <p className="text-2xl font-bold">{main.feels_like.toFixed(0)}&#176;</p>
    </motion.div>
  );
}
