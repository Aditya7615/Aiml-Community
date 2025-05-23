import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Users, Calendar } from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const projects = [
  {
    title: "AI Image Recognition System",
    description: "A deep learning model for real-time object detection and classification using TensorFlow.",
    tech: ["Python", "TensorFlow", "OpenCV", "React"],
    team: ["Alex Johnson", "Sarah Chen"],
    date: "March 2024",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "#",
    demo: "#"
  },
  {
    title: "Natural Language Processing Chat Bot",
    description: "An intelligent chatbot powered by advanced NLP algorithms for human-like conversations.",
    tech: ["Python", "PyTorch", "NLTK", "FastAPI"],
    team: ["Raj Patel", "Emma Wilson"],
    date: "February 2024",
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "#",
    demo: "#"
  },
  {
    title: "Machine Learning Stock Predictor",
    description: "A stock price prediction system using machine learning algorithms and historical data analysis.",
    tech: ["Python", "Scikit-learn", "Pandas", "Vue.js"],
    team: ["David Kim", "Priya Sharma"],
    date: "January 2024",
    image: "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      transition={{ duration: 0.6 }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-orbitron font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our <span className="text-neon-magenta">Projects</span>
          </motion.h1>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-neon-magenta to-neon-cyan mx-auto mb-6"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          ></motion.div>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Discover our innovative AI and ML projects developed by our community members.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              className="bg-dark-700/50 backdrop-blur-md border border-dark-600 rounded-xl overflow-hidden hover:shadow-neon-magenta transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-orbitron font-bold mb-3 hover:text-neon-magenta transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-dark-800 rounded-full text-sm text-neon-cyan border border-neon-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-neon-magenta" />
                    <span>{project.team.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-neon-blue" />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-dark-800 text-white hover:bg-dark-600 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-neon-magenta text-white hover:brightness-110 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;