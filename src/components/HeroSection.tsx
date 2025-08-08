'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, Brain, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating AI Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 text-blue-500/20"
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Bot size={40} />
            </motion.div>
            <motion.div
              className="absolute top-32 right-20 text-purple-500/20"
              animate={{ y: [20, -20, 20] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Brain size={35} />
            </motion.div>
            <motion.div
              className="absolute bottom-40 left-20 text-blue-400/20"
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <Zap size={30} />
            </motion.div>
          </div>

          {/* Main Content */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            AI-Powered Intelligence
            <br />
            <span className="text-white">For Your Business</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transform your organization with intelligent chatbots built on your knowledge base 
            and AI operators that revolutionize operational efficiency.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg glow-blue hover:shadow-2xl transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your AI Journey
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              className="border border-blue-500/50 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="glass p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-400">500+</div>
              <div className="text-gray-300">AI Chatbots Deployed</div>
            </div>
            <div className="glass p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-400">95%</div>
              <div className="text-gray-300">Efficiency Improvement</div>
            </div>
            <div className="glass p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-400">24/7</div>
              <div className="text-gray-300">Intelligent Operations</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}