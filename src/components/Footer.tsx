import React from "react";
import { Link } from "react-router-dom";
import { BrainCircuit, Mail, Phone, MapPin, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BrainCircuit className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Dendrite.ai
              </span>
            </div>
            <p className="text-gray-400">
              Revolutionizing B2B sales through AI-powered conversation intelligence 
              and predictive analytics.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Solutions</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">AI Sales Automation</li>
              <li className="text-gray-400">Predictive Analytics</li>
              <li className="text-gray-400">CRM Intelligence</li>
              <li className="text-gray-400">Conversation Analytics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2 text-purple-400" />
                +1 (888) AI-SALES
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-purple-400" />
                101 AI Boulevard, Suite 500<br/>
                San Francisco, CA 94107
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/company/dendrite-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/dendrite_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <X className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dendrite.ai. All rights reserved. 
            <a href="/privacy" className="ml-4 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;