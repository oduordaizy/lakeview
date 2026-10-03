'use client';

import { Users, GraduationCap, Monitor, Smile } from 'lucide-react';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'all', label: 'All', icon: Users },
  { id: 'online', label: 'Online Classes', icon: Monitor },
  { id: 'physical', label: 'Physical Classes', icon: Users },
  { id: 'exam', label: 'Exam Day / Graduations', icon: GraduationCap },
  { id: 'life', label: 'Student Life', icon: Smile },
];

// Fallback images since real photos might not exist yet
const galleryItems = [
  { id: 1, category: 'online', caption: 'Narok Online Class', location: 'Narok', image: '/student-1.png' },
  { id: 2, category: 'physical', caption: 'A1 Class, Kisumu', location: 'Kisumu', image: '/student-2.png' },
  { id: 3, category: 'online', caption: 'Mombasa Online Session', location: 'Mombasa', image: '/student-3.png' },
  { id: 4, category: 'exam', caption: 'B2 Exam Day', location: 'Kisumu', image: '/student-1.png' },
  { id: 5, category: 'life', caption: 'Student Celebration', location: 'Kisumu', image: '/student-2.png' },
  { id: 6, category: 'physical', caption: 'Group Study Session', location: 'Kisumu', image: '/student-3.png' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <main className="flex-1 bg-slate-50 font-sans selection:bg-[#0367B4] selection:text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 bg-[#0D2752] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0367B4]/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2795D3] mb-6 backdrop-blur-sm"
          >
            Gallery
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-5"
          >
            See Our Students <br className="hidden md:block"/> in Action
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto"
          >
            From online classes to graduation celebrations, witness the Lakeview learning journey
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                    isActive 
                    ? 'bg-[#0367B4] text-white shadow-lg' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-[#0D2752] border border-slate-200'
                  }`}
                >
                  <Icon size={18} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-3xl overflow-hidden shadow-soft aspect-[4/3] cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2752] via-[#0D2752]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-1">{item.caption}</h3>
                    <span className="text-sm font-medium text-[#2795D3]">{item.location}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D2752] mb-6">Want to Join Our Community?</h2>
          <p className="text-lg text-slate-600 mb-10">Become part of our growing family of German learners</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D6001C] text-white font-bold text-lg shadow-lg hover:bg-[#b50018] hover:-translate-y-1 transition-all">
            Start Your Journey
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
