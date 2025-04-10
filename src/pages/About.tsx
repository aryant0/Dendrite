import React from 'react';
import { Award, Users, Target, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-gray-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Dendrite.ai</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-200">
              Revolutionizing B2B Sales with AI-Powered Intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Mission</h2>
              <p className="text-lg text-gray-300">
                To transform B2B sales through AI-driven automation and hyper-personalized outreach. We empower sales teams with intelligent conversation tools that increase response rates and accelerate deal cycles.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Vision</h2>
              <p className="text-lg text-gray-300">
                To become the most trusted AI sales assistant, redefining how businesses connect with prospects by blending human intuition with machine intelligence for perfect sales conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">Our Core Principles</h2>
            <p className="text-xl text-gray-400">The foundation of our AI technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center border border-purple-900 hover:border-purple-600 transition-all">
              <Award className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Precision</h3>
              <p className="text-gray-400">AI that understands context and intent perfectly</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center border border-purple-900 hover:border-purple-600 transition-all">
              <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Adaptability</h3>
              <p className="text-gray-400">Solutions that evolve with your sales process</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center border border-purple-900 hover:border-purple-600 transition-all">
              <Target className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Performance</h3>
              <p className="text-gray-400">Proven to increase response rates by 3-5x</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center border border-purple-900 hover:border-purple-600 transition-all">
              <Briefcase className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Transparency</h3>
              <p className="text-gray-400">Clear insights into every AI-driven interaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section - New Addition */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">Our Technology</h2>
            <p className="text-xl text-gray-400">Advanced AI for modern sales teams</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Natural Language Processing</h3>
              <p className="text-gray-300">State-of-the-art models that understand and generate human-like responses</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Conversation Intelligence</h3>
              <p className="text-gray-300">Real-time analysis of dialogue patterns for optimal engagement</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-400">CRM Integration</h3>
              <p className="text-gray-300">Seamless connection with your existing sales ecosystem</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;