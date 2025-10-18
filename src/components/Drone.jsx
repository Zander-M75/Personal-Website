import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const dronePhotos = [
  {
    id: 1,
    title: 'Sunset Over the Hudson',
    location: 'Hudson River, NJ',
    date: 'Oct 2024',
    thumbnail: null,
  },
  {
    id: 2,
    title: 'Chatham Downtown',
    location: 'Chatham, NJ',
    date: 'Sep 2024',
    thumbnail: null,
  },
  {
    id: 3,
    title: 'Fall Foliage',
    location: 'Morris County, NJ',
    date: 'Oct 2024',
    thumbnail: null,
  },
  {
    id: 4,
    title: 'Beach Aerial',
    location: 'Jersey Shore',
    date: 'Aug 2024',
    thumbnail: null,
  },
  {
    id: 5,
    title: 'City Skyline',
    location: 'NYC',
    date: 'Jul 2024',
    thumbnail: null,
  },
  {
    id: 6,
    title: 'Mountain Vista',
    location: 'Northern NJ',
    date: 'Sep 2024',
    thumbnail: null,
  },
];

export const Drone = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="drone" className="section-padding bg-offwhite dark:bg-navy">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Drone Photography
          </h2>
          <p className="text-lg text-navy/70 dark:text-offwhite/70 mb-6">
            Capturing perspectives from above — landscapes, cityscapes, and everything in between.
          </p>
         
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {dronePhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1 },
              }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mint/30 to-navy/30 group-hover:opacity-80 transition-opacity flex items-center justify-center">
                <div className="text-6xl font-bold text-white/20">
                  {photo.location.charAt(0)}
                </div>
                {/* Uncomment when you have images:
                <img
                  src={photo.thumbnail}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
                */}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold mb-1">{photo.title}</h3>
                  <p className="text-sm text-white/80">{photo.location}</p>
                  <p className="text-xs text-white/60">{photo.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute -top-12 right-0 text-white/70 hover:text-white text-4xl font-light"
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="aspect-video bg-gradient-to-br from-mint/30 to-navy/30 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
                  <div className="text-8xl font-bold text-white/20">
                    {selectedPhoto.location.charAt(0)}
                  </div>
                  {/* Uncomment when you have images:
                  <img
                    src={selectedPhoto.thumbnail}
                    alt={selectedPhoto.title}
                    className="w-full h-full object-contain"
                  />
                  */}
                </div>
                <div className="mt-4 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h3>
                  <p className="text-white/70">{selectedPhoto.location} • {selectedPhoto.date}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

