'use client';

import { motion } from 'framer-motion';
import { Bot, Settings, Database, Zap, MessageCircle, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Internal Knowledge Chatbots",
    description: "Transform your company's knowledge base into intelligent, conversational AI assistants that provide instant, accurate answers to employee queries.",
    features: ["Natural Language Processing", "Document Integration", "Multi-language Support", "Real-time Learning"]
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "AI Operations Automation",
    description: "Deploy intelligent operators that streamline workflows, automate repetitive tasks, and optimize business processes with machine learning.",
    features: ["Process Automation", "Predictive Analytics", "Smart Routing", "Performance Optimization"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Knowledge Base Integration",
    description: "Seamlessly connect your existing documentation, databases, and systems to create a unified AI-powered knowledge ecosystem.",
    features: ["API Integrations", "Data Synchronization", "Security Compliance", "Custom Connectors"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our AI Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence solutions designed to transform how your organization operates and communicates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-xl hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <Zap className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className="mt-6 w-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-600/30 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4 glass p-4 rounded-lg">
            <MessageCircle className="w-6 h-6 text-blue-400" />
            <span className="text-gray-300">24/7 Support & Monitoring</span>
          </div>
          
          <div className="flex items-center space-x-4 glass p-4 rounded-lg">
            <TrendingUp className="w-6 h-6 text-purple-400" />
            <span className="text-gray-300">Continuous Learning & Improvement</span>
          </div>
          
          <div className="flex items-center space-x-4 glass p-4 rounded-lg">
            <Settings className="w-6 h-6 text-blue-400" />
            <span className="text-gray-300">Custom Implementation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}