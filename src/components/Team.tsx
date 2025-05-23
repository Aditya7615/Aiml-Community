import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  image, 
  github, 
  linkedin, 
  twitter,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
      className="bg-dark-700/40 backdrop-blur-md border border-dark-600 rounded-xl overflow-hidden hover:shadow-neon-cyan transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80"></div>
      </div>
      
      <div className="p-6 text-center">
        <h3 className="text-xl font-orbitron font-bold mb-1">{name}</h3>
        <p className="text-neon-cyan mb-4">{role}</p>
        
        <div className="flex justify-center gap-4">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-dark-800 flex items-center justify-center text-white hover:text-neon-cyan hover:scale-110 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-dark-800 flex items-center justify-center text-white hover:text-neon-cyan hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-dark-800 flex items-center justify-center text-white hover:text-neon-cyan hover:scale-110 transition-all duration-300"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "President",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Sarah Chen",
      role: "Vice President",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Raj Patel",
      role: "Technical Lead",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Emma Wilson",
      role: "Events Coordinator",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "David Kim",
      role: "Research Lead",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Priya Sharma",
      role: "Content Creator",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      twitter: "https://twitter.com"
    },
    {
      name: "James Wilson",
      role: "Workshop Facilitator",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Aisha Ahmed",
      role: "Outreach Coordinator",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  ];

  return (
    <section id="team" className="relative py-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-neon-magenta/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-orbitron font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our <span className="text-neon-blue">Team</span>
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mb-6"
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
            Meet our passionate team of AI enthusiasts and leaders who drive the AIML Community forward through innovation, collaboration, and excellence.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              github={member.github}
              linkedin={member.linkedin}
              twitter={member.twitter}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;