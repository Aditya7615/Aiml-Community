import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  isLeft?: boolean;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ 
  title, 
  date, 
  time, 
  location, 
  description, 
  image, 
  isLeft = true,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative flex flex-col md:flex-row gap-6 ${isLeft ? '' : 'md:flex-row-reverse'}`}
    >
      {/* Timeline line */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-neon-cyan/30 transform -translate-x-1/2 z-0"></div>
      
      {/* Timeline dot */}
      <div className="hidden md:flex absolute top-10 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-neon-cyan rounded-full z-10 shadow-neon-cyan"></div>
      
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div className="bg-dark-700/50 backdrop-blur-md border border-dark-600 rounded-xl overflow-hidden hover:shadow-neon-cyan transition-all duration-300">
          <div className="h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-orbitron font-bold mb-3">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className={`flex flex-col gap-2 text-sm text-gray-400 ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-neon-cyan" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neon-magenta" />
                <span>{time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neon-blue" />
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Empty space for timeline layout */}
      <div className="hidden md:block w-5/12"></div>
    </motion.div>
  );
};

const Events: React.FC = () => {
  const events = [
    {
      title: "AI Workshop Series",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Hub, MUJ Campus",
      description: "A comprehensive workshop on deep learning fundamentals and practical applications using TensorFlow and PyTorch.",
      image: "https://images.pexels.com/photos/7690215/pexels-photo-7690215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Hackathon: AI Solutions",
      date: "April 5-6, 2025",
      time: "48 Hours",
      location: "Innovation Center, MUJ",
      description: "A 48-hour coding competition to build innovative AI solutions for real-world problems. Open to all MUJ students.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Guest Lecture: Future of AI",
      date: "May 10, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Auditorium, MUJ Campus",
      description: "Join us for an insightful lecture by industry experts on the future trends and ethical considerations in AI development.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Project Showcase",
      date: "June 20, 2025",
      time: "11:00 AM - 5:00 PM",
      location: "Central Lawn, MUJ",
      description: "Showcase of innovative projects developed by AIML Community members throughout the academic year.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="events" className="relative py-20">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-orbitron font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Upcoming <span className="text-neon-magenta">Events</span>
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-neon-magenta to-neon-cyan mx-auto mb-6"
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
            Join us for exciting workshops, hackathons, and learning opportunities to enhance your AI/ML skills and connect with like-minded individuals.
          </motion.p>
        </div>
        
        <div className="space-y-12">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              image={event.image}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.a
            href="#"
            className="inline-block px-8 py-3 rounded-md bg-dark-700 border border-neon-magenta text-white font-medium hover:bg-dark-600 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            View All Events
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Events;