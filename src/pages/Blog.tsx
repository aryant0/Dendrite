import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    feedback: 'Dendrite.ai increased our response rates by 4x. The AI perfectly captures our brand voice while personalizing at scale.',
    designation: 'VP Sales, TechCorp',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    name: 'Raj Patel',
    feedback: 'Our SDR team saved 20+ hours/week with Dendrite\'s automated follow-ups. Conversion rates improved by 35%.',
    designation: 'Sales Director, RevOps',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Emily Wilson',
    feedback: 'The conversation analytics helped us refine our messaging. Now we know exactly which phrases drive meetings.',
    designation: 'CRO, SaaS Ventures',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 4,
    name: 'James Zhang',
    feedback: 'Integrates seamlessly with our CRM. The AI learns from our best performers and replicates their success.',
    designation: 'Founder, AIRevenue',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-gray-900 to-purple-900 text-white py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Proven Results</h1>
        <p className="text-xl md:text-2xl text-purple-200">How sales teams 10x productivity with Dendrite.ai</p>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-gray-900 p-8 rounded-xl shadow-lg border border-purple-900 hover:border-purple-600 transition-all"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-purple-500"
                  />
                  <div className="ml-4 text-left">
                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-purple-400 text-sm">{testimonial.designation}</p>
                  </div>
                </div>
                <div className="flex text-purple-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.feedback}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section - New Addition */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-12">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4-6x', label: 'Higher response rates' },
              { value: '35%', label: 'More meetings booked' },
              { value: '20+', label: 'Hours saved weekly' },
              { value: '90%', label: 'Adoption rate' }
            ].map((metric, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-purple-900">
                <p className="text-4xl font-bold text-purple-400 mb-2">{metric.value}</p>
                <p className="text-gray-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;