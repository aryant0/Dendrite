import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
  
    const formData = new FormData(form);
    
    fetch("/", {
      method: "POST",
      body: new URLSearchParams(formData as any).toString(),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(() => {
        setShowModal(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        console.log("Form submitted successfully!");
      })
      .catch((error) => console.error("Error submitting form:", error));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[\d]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
      e.preventDefault();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-gray-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Our AI Experts</h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-200">
            Discover how our AI can transform your sales pipeline
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="text-gray-300">
            <h2 className="text-3xl font-bold mb-8 text-purple-400">Connect With Us</h2>
            <p className="text-lg mb-8">
              Ready to 10x your sales productivity? Our AI specialists are standing by.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-purple-400 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1 text-white">Email</h3>
                  <p>contact@dendrite.ai</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-purple-400 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1 text-white">Sales Inquiries</h3>
                  <p>+1 (888) AI-SALES</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-purple-400 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1 text-white">HQ Location</h3>
                  <p>
                    101 AI Boulevard, Suite 500<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>

            {/* AI Demo CTA */}
            <div className="mt-12 p-6 bg-gray-800 rounded-xl border border-purple-900">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Want to see it in action?</h3>
              <p className="mb-4">Schedule a personalized demo of our AI sales assistant.</p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Book Demo
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-white">Get Started</h2>

            <p className="text-gray-400 mb-8">
              Let us show you how AI can transform your sales process.
            </p>
            <form
              onSubmit={handleSubmit}
              name="contactUsForm"
              encType="application/x-www-form-urlencoded"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contactUsForm" />

              <div className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  pattern="[0-9]{10,12}"
                  maxLength={12}
                  inputMode="numeric"
                  onChange={handleChange}
                  title="Please enter a valid phone number"
                  onKeyDown={handleKeyDown}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 text-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Request AI Consultation
              </button>
            </form>

            {/* Success Modal */}
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
                <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center border border-purple-900 max-w-md">
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">Thank You!</h3>
                  <p className="text-gray-300">Our AI sales experts will contact you within 24 hours.</p>
                  <button 
                    onClick={() => setShowModal(false)} 
                    className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;