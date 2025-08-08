'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Settings, 
  TrendingUp, 
  Activity,
  Zap,
  LogOut,
  Menu,
  X
} from 'lucide-react';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { label: 'Active Chatbots', value: '12', change: '+3', icon: Bot, color: 'text-blue-400' },
    { label: 'Queries Resolved', value: '2,847', change: '+12%', icon: MessageSquare, color: 'text-purple-400' },
    { label: 'Active Users', value: '1,429', change: '+8%', icon: Users, color: 'text-blue-400' },
    { label: 'Efficiency Gain', value: '87%', change: '+5%', icon: TrendingUp, color: 'text-green-400' },
  ];

  const chatbots = [
    { name: 'HR Assistant', status: 'Active', queries: 342, accuracy: '95%' },
    { name: 'IT Support Bot', status: 'Active', queries: 189, accuracy: '92%' },
    { name: 'Sales Knowledge', status: 'Training', queries: 67, accuracy: '88%' },
    { name: 'Legal Advisor', status: 'Active', queries: 234, accuracy: '97%' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 ai-grid-bg relative overflow-hidden">
      <div className="matrix-rain opacity-30"></div>
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 glass border-r border-blue-500/20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-blue-500/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center glow-blue">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Lumora Tech
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-8 px-4">
          <div className="space-y-2">
            <a href="#" className="flex items-center px-4 py-3 text-blue-400 bg-blue-500/10 rounded-lg">
              <BarChart3 className="w-5 h-5 mr-3" />
              Dashboard
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
              <Bot className="w-5 h-5 mr-3" />
              Chatbots
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
              <Activity className="w-5 h-5 mr-3" />
              Analytics
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
              <Users className="w-5 h-5 mr-3" />
              Users
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </a>
          </div>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button className="flex items-center w-full px-4 py-3 text-gray-300 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="glass border-b border-blue-500/20 h-16 flex items-center justify-between px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <Menu size={20} />
          </button>
          
          <h1 className="text-xl font-semibold text-white">Dashboard</h1>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Welcome, John Doe</span>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                    <p className="text-green-400 text-sm mt-1">{stat.change}</p>
                  </div>
                  <div className={`${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Chatbots List */}
            <div className="xl:col-span-2">
              <motion.div
                className="glass p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-xl font-semibold text-white mb-6">Active Chatbots</h2>
                <div className="space-y-4">
                  {chatbots.map((bot, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-blue-500/10">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{bot.name}</h3>
                          <p className="text-sm text-gray-400">
                            <span className={`inline-block w-2 h-2 rounded-full mr-2 ${bot.status === 'Active' ? 'bg-green-400' : 'bg-yellow-400'}`}></span>
                            {bot.status}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">{bot.queries} queries</p>
                        <p className="text-sm text-blue-400">{bot.accuracy} accuracy</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <div>
              <motion.div
                className="glass p-6 rounded-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all">
                    Deploy New Chatbot
                  </button>
                  <button className="w-full border border-blue-500/50 text-blue-400 py-3 px-4 rounded-lg font-medium hover:bg-blue-500/10 transition-all">
                    View Analytics
                  </button>
                  <button className="w-full border border-purple-500/50 text-purple-400 py-3 px-4 rounded-lg font-medium hover:bg-purple-500/10 transition-all">
                    Training Data
                  </button>
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                className="glass p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <p className="text-sm text-gray-300">HR Assistant resolved 23 queries</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <p className="text-sm text-gray-300">IT Support Bot updated knowledge base</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <p className="text-sm text-gray-300">Sales Knowledge completed training</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <p className="text-sm text-gray-300">New user joined the platform</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}