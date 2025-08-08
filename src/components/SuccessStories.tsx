'use client';

import { motion } from 'framer-motion';
import { Quote, TrendingUp, Users, Clock } from 'lucide-react';

const successStories = [
  {
    company: "TechCorp Solutions",
    industry: "Technology",
    challenge: "Employees spent hours searching through documentation and internal wikis",
    solution: "Deployed AI chatbot integrated with entire knowledge base",
    results: [
      { metric: "Query Resolution Time", value: "5 minutes", improvement: "85% faster" },
      { metric: "Employee Satisfaction", value: "94%", improvement: "+40%" },
      { metric: "Support Tickets", value: "2,000/month", improvement: "-70%" }
    ],
    testimonial: "Lumora Tech's AI chatbot transformed how our team accesses information. What used to take hours now takes minutes.",
    author: "Sarah Chen",
    position: "CTO"
  },
  {
    company: "Global Manufacturing Inc",
    industry: "Manufacturing",
    challenge: "Manual quality control processes and inefficient workflow management",
    solution: "Implemented AI operators for process automation and predictive maintenance",
    results: [
      { metric: "Operational Efficiency", value: "95%", improvement: "+45%" },
      { metric: "Defect Detection", value: "99.2%", improvement: "+25%" },
      { metric: "Downtime Reduction", value: "8 hours/week", improvement: "-60%" }
    ],
    testimonial: "The AI operators have revolutionized our manufacturing processes. We've seen unprecedented efficiency gains.",
    author: "Michael Rodriguez",
    position: "Operations Director"
  },
  {
    company: "HealthFirst Medical",
    industry: "Healthcare",
    challenge: "Medical staff needed quick access to protocols and patient care guidelines",
    solution: "Custom medical knowledge AI assistant with HIPAA compliance",
    results: [
      { metric: "Protocol Access Time", value: "30 seconds", improvement: "92% faster" },
      { metric: "Accuracy Rate", value: "98.5%", improvement: "+15%" },
      { metric: "Staff Training Time", value: "2 weeks", improvement: "-50%" }
    ],
    testimonial: "Having instant access to medical protocols and guidelines has improved our patient care quality significantly.",
    author: "Dr. Amanda Foster",
    position: "Chief Medical Officer"
  }
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how organizations across industries have transformed their operations with our AI solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Company Header */}
              <div className="p-6 border-b border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-2">{story.company}</h3>
                <span className="text-blue-400 text-sm">{story.industry}</span>
              </div>

              {/* Challenge & Solution */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-red-400 font-semibold mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm">{story.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-green-400 font-semibold mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm">{story.solution}</p>
                </div>

                {/* Results */}
                <div className="space-y-3 mb-6">
                  {story.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{result.metric}</span>
                      <div className="text-right">
                        <div className="text-blue-400 font-bold">{result.value}</div>
                        <div className="text-green-400 text-xs">{result.improvement}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="border-t border-blue-500/20 pt-4">
                  <Quote className="w-5 h-5 text-purple-400 mb-2" />
                  <p className="text-gray-300 text-sm italic mb-3">&ldquo;{story.testimonial}&rdquo;</p>
                  <div className="text-right">
                    <div className="text-white font-semibold text-sm">{story.author}</div>
                    <div className="text-gray-400 text-xs">{story.position}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Impact Stats */}
        <motion.div
          className="mt-20 glass p-8 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Overall Impact Across All Clients</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-400">78%</div>
              <div className="text-gray-300 text-sm">Average Efficiency Gain</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-purple-400">10k+</div>
              <div className="text-gray-300 text-sm">Users Served Daily</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-400">2.5M</div>
              <div className="text-gray-300 text-sm">Hours Saved Annually</div>
            </div>
            <div className="text-center">
              <Quote className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-purple-400">96%</div>
              <div className="text-gray-300 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}