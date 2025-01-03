import React from 'react';
import { motion } from 'framer-motion';
import AnimatedShape from '../components/AnimatedShape';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-20"
        >
          <h1 className="text-6xl font-bold text-indigo-900 mb-6">
            Expérience Visuelle Interactive
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez un monde d'animations fluides et de formes géométriques en harmonie
          </p>
        </motion.div>

        <AnimatedShape color="bg-purple-200/50" delay={0.2} className="top-20 left-10" />
        <AnimatedShape color="bg-indigo-200/50" delay={0.4} className="top-40 right-20" />
        <AnimatedShape color="bg-pink-200/50" delay={0.6} className="bottom-20 left-1/4" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20"
        >
          {[
            {
              title: "Animations Fluides",
              description: "Des transitions douces et naturelles pour une expérience immersive"
            },
            {
              title: "Formes Géométriques",
              description: "Un design moderne basé sur des formes géométriques harmonieuses"
            },
            {
              title: "Interactions",
              description: "Des animations réactives qui s'activent au défilement"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-xl"
            >
              <h3 className="text-xl font-bold text-indigo-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;