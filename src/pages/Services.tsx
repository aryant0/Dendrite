import React from 'react';
import { BrainCircuit, Bot, Sparkles, BarChart, Cpu, Database, Shield, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-gray-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Sales Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-200">
              Transform Your Sales Process with Intelligent Automation
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {/* Conversation Automation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-300">
                <BrainCircuit className="h-16 w-16 text-purple-400 mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-purple-400">Conversation Automation</h2>
                <p className="text-lg mb-6">
                  AI-powered sales conversations that engage prospects 24/7 with natural language processing and real-time response generation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Cpu className="h-5 w-5 text-purple-400 mr-2" />
                    <span>Natural Language Processing (NLP)</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-purple-400 mr-2" />
                    <span>Brand Voice Consistency</span>
                  </li>
                  <li className="flex items-center">
                    <Rocket className="h-5 w-5 text-purple-400 mr-2" />
                    <span>Multi-channel Deployment</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Key Features</h3>
                <ul className="space-y-4 text-gray-300">
                  <li>• Real-time Response Generation</li>
                  <li>• Sentiment Analysis</li>
                  <li>• Conversation History Tracking</li>
                  <li>• Automatic Follow-ups</li>
                  <li>• Multi-language Support</li>
                </ul>
              </div>
            </div>

            {/* Predictive Lead Scoring */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-300">
                <BarChart className="h-16 w-16 text-purple-400 mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-purple-400">Predictive Lead Scoring</h2>
                <p className="text-lg mb-6">
                  Machine learning models that prioritize high-value prospects and predict conversion likelihood with 92% accuracy.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Database className="h-5 w-5 text-purple-400 mr-2" />
                    <span>Behavioral Pattern Analysis</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-purple-400 mr-2" />
                    <span>Data-driven Insights</span>
                  </li>
                  <li className="flex items-center">
                    <Rocket className="h-5 w-5 text-purple-400 mr-2" />
                    <span>Real-time Lead Ranking</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Key Features</h3>
                <ul className="space-y-4 text-gray-300">
                  <li>• Conversion Probability Scoring</li>
                  <li>• CRM Integration</li>
                  <li>• Custom Scoring Models</li>
                  <li>• Historical Data Analysis</li>
                  <li>• Automated Lead Routing</li>
                </ul>
              </div>
            </div>

            {/* CRM Intelligence */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-300">
                <Sparkles className="h-16 w-16 text-purple-400 mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-purple-400">CRM Intelligence</h2>
                <p className="text-lg mb-6">
                  AI-enhanced CRM integration that automates data entry and provides real-time sales pipeline analytics.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Bot className="h-5 w-5 text-purple-400 mr-2" />
                    <span>Automatic Data Enrichment</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-purple-400 mr-2" />
                    <span>Enterprise-grade Security</span>
                  </li>
                  <li className="flex items-center">
                    <Rocket className="h-5 w-5 text-purple-400 mr-2" />
                    <span>Performance Analytics</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Key Features</h3>
                <ul className="space-y-4 text-gray-300">
                  <li>• Automated Contact Updates</li>
                  <li>• Deal Stage Predictions</li>
                  <li>• Sales Forecasting</li>
                  <li>• Custom Dashboard Creation</li>
                  <li>• Cross-platform Sync</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to 10x Your Sales?</h2>
          <p className="text-xl text-purple-200 mb-8">
            See our AI sales assistant in action
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors"
          >
            Schedule Free Demo
            <Rocket className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;