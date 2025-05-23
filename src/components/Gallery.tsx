import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageProps {
  src: string;
  alt: string;
  index: number;
}

const GalleryImage: React.FC<ImageProps & { onClick: () => void }> = ({ src, alt, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.03 }}
      className="overflow-hidden rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
      />
    </motion.div>
  );
};

const Gallery: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Workshop Session"
    },
    {
      src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Team Collaboration"
    },
    {
      src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Tech Conference"
    },
    {
      src: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Coding Competition"
    },
    {
      src: "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Lab Session"
    },
    {
      src: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Hackathon"
    }
  ];

  return (
    <section id="gallery" className="relative py-20">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-neon-cyan/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-magenta/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-orbitron font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Event <span className="text-neon-cyan">Gallery</span>
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
            Explore our past events, workshops, and competitions through our gallery of memorable moments.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              index={index}
              onClick={() => setLightboxImage(image.src)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.a
            href="#"
            className="inline-block px-8 py-3 rounded-md bg-dark-700 border border-neon-cyan text-white font-medium hover:bg-dark-600 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            View Full Gallery
          </motion.a>
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-4 right-4 p-2 rounded-full bg-dark-800 text-white hover:bg-dark-700 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery Image"
            className="max-h-[90vh] max-w-full rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;