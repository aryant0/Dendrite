import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Bot, Sparkles, ArrowRight, CheckCircle, Quote, BarChart } from "lucide-react";

const services = [
  {
    title: "AI Conversation Automation",
    description: "Automate and personalize sales conversations at scale with NLP-powered AI",
    images: [
      "https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ],
    icon: BrainCircuit,
    color: "from-purple-600 to-fuchsia-600",
    features: ["Natural Language Processing", "Real-time Response Generation", "Multi-channel Deployment"]
  },
  {
    title: "Predictive Lead Scoring",
    description: "Identify high-value prospects using AI-driven behavioral analysis",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
    ],
    icon: BarChart,
    color: "from-indigo-600 to-purple-600",
    features: ["Machine Learning Models", "Conversion Prediction", "Priority Ranking"]
  },
  {
    title: "CRM Intelligence",
    description: "Enhance your sales ecosystem with AI-powered CRM integration",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
    ],
    icon: Sparkles,
    color: "from-blue-600 to-purple-600",
    features: ["Automated Data Entry", "Conversation Sync", "Performance Analytics"]
  },
];

const testimonials = [
  {
    text: "Dendrite.ai increased our response rates by 4x while maintaining perfect brand voice consistency.",
    author: "Sarah Chen",
    position: "VP Sales, TechScale Inc"
  },
  {
    text: "The predictive scoring helped us focus on 35% more qualified leads, boosting our close rate dramatically.",
    author: "Michael Johnson",
    position: "Sales Director, RevOps AI"
  },
  {
    text: "Our SDR team saved 20+ hours/week while maintaining personalized outreach at scale.",
    author: "Emily Rodriguez",
    position: "CRO, SaaS Innovations"
  },
  {
    text: "The CRM integration eliminated manual data entry and gave us real-time conversation insights.",
    author: "David Kim",
    position: "Head of Sales, CloudNexa"
  }
];

const Home = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(services.map(() => 0));
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndexes(prevIndexes =>
        prevIndexes.map(index => (index + 1) % 3)
      );
    }, 5000);

    const testimonialInterval = setInterval(() => {
      setActiveTestimonialIndex(prev =>
        (prev + 1) % testimonials.length
      );
    }, 4000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-purple-900 via-gray-900 to-purple-900 text-white py-20 overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-20 blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(107, 33, 168, 0.3) 0%, rgba(76, 29, 149, 0.1) 100%)'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionize Sales with AI-Driven Conversations
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-200">
            Automate, personalize, and scale your sales outreach with NLP-powered intelligence
          </p>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">AI Sales Solutions</h2>
            <p className="text-xl text-gray-400">Transform your sales process with intelligent automation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence>
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-900 rounded-xl shadow-xl overflow-hidden relative border border-gray-700"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative h-48">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndexes[index]}
                          src={service.images[currentImageIndexes[index]]}
                          alt={service.title}
                          className="w-full h-48 object-cover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </AnimatePresence>
                      <motion.div
                        className="absolute inset-0 bg-black bg-opacity-40 z-10 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="h-16 w-16 text-purple-400" />
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${service.color} text-white mb-4`}>
                        <Icon className="h-4 w-4 mr-2" />
                        {service.title}
                      </div>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-center text-gray-400"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                          >
                            <CheckCircle className="h-5 w-5 text-purple-400 mr-2" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          to="/solutions"
                          className={`inline-flex items-center px-4 py-2 rounded-md text-white bg-gradient-to-r ${service.color} hover:opacity-90 transition-opacity`}
                        >
                          Explore Feature
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-400">Trusted by forward-thinking sales teams</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonialIndex}
                className="bg-gray-800 rounded-xl shadow-lg p-8 relative overflow-hidden border border-gray-700"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Quote className="h-12 w-12 text-purple-400 mb-6 mx-auto" />
                <blockquote className="text-xl text-center text-gray-300 mb-8 relative">
                  "{testimonials[activeTestimonialIndex].text}"
                </blockquote>
                <div className="text-center relative">
                  <h4 className="font-semibold text-purple-200 text-lg">
                    {testimonials[activeTestimonialIndex].author}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[activeTestimonialIndex].position}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === activeTestimonialIndex ? 'bg-purple-400' : 'bg-gray-600'
                  }`}
                  onClick={() => setActiveTestimonialIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <motion.section
        className="bg-gray-800 py-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">Why Dendrite.ai</h2>
            <p className="text-xl text-gray-400">Next-generation AI for modern sales teams</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Conversation AI", description: "Advanced NLP for human-like interactions" },
              { title: "Real-time Analytics", description: "Instant insights into campaign performance" },
              { title: "Seamless Integration", description: "Works with your existing CRM stack" },
              { title: "Enterprise Security", description: "SOC 2 compliant data protection" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-gray-900 p-6 rounded-xl border border-gray-700"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-100">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-purple-900 to-gray-900 text-white py-16 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 opacity-20 blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(107, 33, 168, 0.3) 0%, rgba(76, 29, 149, 0.1) 100%)'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to 10x Your Sales Productivity?</h2>
          <p className="text-xl mb-8 text-purple-200">See our AI in action with a personalized demo</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors duration-200"
          >
            Schedule Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;