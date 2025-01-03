import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Layers, Palette, Shapes, Sparkles } from 'lucide-react';

const Navigation = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <NavLink to="/" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-500">
              <Home size={24} />
              <span className="font-bold">Accueil</span>
            </NavLink>
            <NavLink to="/geometric" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-500">
              <Shapes size={24} />
              <span>Géométrie</span>
            </NavLink>
            <NavLink to="/transitions" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-500">
              <Layers size={24} />
              <span>Transitions</span>
            </NavLink>
            <NavLink to="/colors" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-500">
              <Palette size={24} />
              <span>Couleurs</span>
            </NavLink>
            <NavLink to="/effects" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-500">
              <Sparkles size={24} />
              <span>Effets</span>
            </NavLink>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;