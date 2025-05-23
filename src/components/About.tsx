import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Code, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="rounded-xl bg-dark-700/50 backdrop-blur-md border border-dark-600 p-6 hover:shadow-neon-cyan transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center mb-4 text-neon-cyan">
        {icon}
      </div>
      <h3 className="text-xl font-orbitron mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Research",
      description: "Exploring cutting-edge AI technologies and their applications in solving real-world problems."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Hands-on projects and workshops on ML algorithms, neural networks, and deep learning."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Skills",
      description: "Developing programming skills in Python, TensorFlow, PyTorch, and other AI/ML frameworks."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Building a collaborative community of AI enthusiasts through hackathons and team projects."
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-neon-cyan/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-magenta/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-orbitron font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About <span className="text-neon-cyan">Us</span>
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The AIML Community at Manipal University Jaipur is a student-led organization dedicated to fostering innovation and excellence in the fields of Artificial Intelligence and Machine Learning.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-dark-800/70 backdrop-blur-md border border-dark-600 rounded-xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-4">Our <span className="text-neon-cyan">Mission</span></h3>
              <p className="text-gray-300 mb-4">
                To create a vibrant ecosystem where students can learn, collaborate, and innovate in the field of AI/ML, preparing them for future challenges and opportunities in the tech industry.
              </p>
              <p className="text-gray-300">
                We aim to bridge the gap between theoretical knowledge and practical applications through workshops, projects, and industry collaborations.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-4">Our <span className="text-neon-magenta">Vision</span></h3>
              <p className="text-gray-300 mb-4">
                To be a leading student community that nurtures talent and drives innovation in artificial intelligence and machine learning.
              </p>
              <p className="text-gray-300">
                We envision creating a network of skilled AI professionals who can contribute to solving real-world problems and advancing the field of AI/ML.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;