import React from 'react';
import { motion } from 'framer-motion';

const Geometric = () => {
  const shapes = [
    { color: 'bg-indigo-400', delay: 0 },
    { color: 'bg-purple-400', delay: 0.2 },
    { color: 'bg-pink-400', delay: 0.4 },
    { color: 'bg-blue-400', delay: 0.6 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20"
        >
          {shapes.map((shape, index) => (
            <motion.div
              key={index}
              initial={{ rotate: 0, scale: 0 }}
              whileInView={{ rotate: 360, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: shape.delay,
                ease: "easeOut"
              }}
              className="aspect-square relative"
            >
              <div className={`absolute inset-0 ${shape.color} rounded-2xl transform hover:rotate-45 transition-transform duration-500`} />
            </motion.div>
          ))}
        </motion.div>

        <div className="py-20">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-lg transform -rotate-6" />
                <div className="relative bg-white p-6 rounded-lg shadow-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Section {index + 1}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geometric;