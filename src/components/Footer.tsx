import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-dark-800 pt-16 pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-magenta/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BrainCircuit className="h-8 w-8 text-neon-cyan" />
              <span className="text-xl font-orbitron font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
                AIML<span className="text-white">Community</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Exploring the frontiers of Artificial Intelligence and Machine Learning through innovation, collaboration, and excellence.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-white hover:text-neon-cyan hover:bg-dark-600 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-white hover:text-neon-cyan hover:bg-dark-600 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-white hover:text-neon-cyan hover:bg-dark-600 transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="mailto:contact@aimlcommunity.com" 
                className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-white hover:text-neon-cyan hover:bg-dark-600 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-orbitron font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-neon-cyan transition-colors">About Us</a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-neon-cyan transition-colors">Events</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-neon-cyan transition-colors">Team</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-neon-cyan transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">Join Us</a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-orbitron font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">Workshops</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">Learning Materials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">Project Repository</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">Research Papers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-orbitron font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neon-cyan mt-0.5" />
                <span>Manipal University Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-neon-cyan mt-0.5" />
                <span>contact@aimlcommunity.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 py-2 px-3 bg-dark-700 border border-dark-600 rounded-l-md focus:outline-none focus:border-neon-cyan text-white"
                />
                <button className="px-4 py-2 bg-neon-cyan text-black font-medium rounded-r-md hover:brightness-110 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-600 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AIML Community MUJ. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-neon-cyan transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;