import React from 'react';
import { motion } from 'framer-motion';
import infoAnimation from '../../helpers/infoAnimation';

export default function FeelsLike({ main }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={infoAnimation}
      custom={2}
      viewport={{ once: true }}
    >
      <p>Feels like </p>
      <p className="text-2xl font-bold">{main.feels_like.toFixed(0)}&#176;</p>
    </motion.div>
  );
}
