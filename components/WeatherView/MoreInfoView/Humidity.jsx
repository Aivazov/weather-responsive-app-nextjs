import React from 'react';
import { motion } from 'framer-motion';
import infoAnimation from '../../helpers/infoAnimation';

export default function Humidity({ main }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={infoAnimation}
      custom={3}
      viewport={{ once: true }}
    >
      <p>Humidity</p>
      <p className="text-2xl font-bold">{main.humidity}%</p>
    </motion.div>
  );
}
