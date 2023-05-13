import React from 'react';
import { motion } from 'framer-motion';

export default function Temperature({ main }) {
  return (
    <motion.p
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-9xl"
    >
      {main.temp.toFixed()}&#176;
    </motion.p>
  );
}
