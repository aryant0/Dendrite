import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Sales Conversation Platform',
      category: 'Conversation AI',
      description: 'Developed NLP-powered conversation automation for enterprise sales teams, increasing response rates by 4x',
      image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&q=80&w=800',
      technologies: ['Natural Language Processing', 'Machine Learning', 'Multi-channel Integration']
    },
    {
      id: 2,
      title: 'Predictive Lead Scoring System',
      category: 'Sales Intelligence',
      description: 'AI-driven lead prioritization engine that boosted conversion rates by 35% for SaaS clients',
      image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&q=80&w=800',
      technologies: ['Predictive Analytics', 'Behavioral Modeling', 'CRM Integration']
    },
    {
      id: 3,
      title: 'Enterprise CRM AI Assistant',
      category: 'CRM Automation',
      description: 'Integrated AI sales assistant directly into enterprise CRM systems, reducing manual data entry by 80%',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      technologies: ['AI Automation', 'API Integration', 'Real-time Analytics']
    }
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-gray-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Success Stories</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-200">
              Transforming Sales Teams with Intelligent Automation
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800"
                  alt="Featured project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Flagship Implementation
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-purple-400">Enterprise Sales Automation Suite</h2>
                <p className="text-gray-300 mb-6">
                  AI-powered sales platform that automated 70% of outreach while maintaining personalization at scale. 
                  Integrated with major CRMs to provide real-time conversation insights and performance analytics.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2 text-gray-100">Key Results:</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>4.8x increase in qualified leads</li>
                    <li>62% reduction in response time</li>
                    <li>35% improvement in conversion rates</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Conversation AI', 'Predictive Analytics', 'CRM Integration', 'Sales Automation'].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-900 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-purple-600 transition-all">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-100">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-900 text-gray-400 px-3 py-1 rounded-full text-sm border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl text-purple-200 mb-8">
            See how AI can revolutionize your sales pipeline
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors"
          >
            Schedule Demo
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;