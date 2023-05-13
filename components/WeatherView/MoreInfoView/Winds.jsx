import React from 'react';
import { motion } from 'framer-motion';
import infoAnimation from '../../helpers/infoAnimation';

export default function Winds({ wind }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={infoAnimation}
      custom={3.5}
      viewport={{ once: true }}
    >
      <p>Winds</p>
      <p className="text-2xl font-bold">
        {(wind.speed * 1.609344).toFixed(0)} km/h
      </p>
    </motion.div>
  );
}
