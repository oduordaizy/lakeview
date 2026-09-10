'use client';

import { Users, GraduationCap, Monitor, Smile } from 'lucide-react';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All', icon: Users },
  { id: 'online', label: 'Online Classes', icon: Monitor },
  { id: 'physical', label: 'Physical Classes', icon: Users },
  { id: 'exam', label: 'Exam Day / Graduations', icon: GraduationCap },
  { id: 'life', label: 'Student Life', icon: Smile },
];

const galleryItems = [
  { id: 1, category: 'online', caption: 'Narok Online Class - March 2026', location: 'Narok' },
  { id: 2, category: 'physical', caption: 'A1 Class, Kisumu - March 2026', location: 'Kisumu' },
  { id: 3, category: 'online', caption: 'Mombasa Online Session - February 2026', location: 'Mombasa' },
  { id: 4, category: 'exam', caption: 'B2 Exam Day - January 2026', location: 'Kisumu' },
  { id: 5, category: 'life', caption: 'Student Celebration - December 2025', location: 'Kisumu' },
  { id: 6, category: 'physical', caption: 'Group Study Session - November 2025', location: 'Kisumu' },
  { id: 7, category: 'online', caption: 'Evening Class - Narok - October 2025', location: 'Narok' },
  { id: 8, category: 'exam', caption: 'A1 Certification - September 2025', location: 'Kisumu' },
  { id: 9, category: 'life', caption: 'Cultural Exchange Day - August 2025', location: 'Kisumu' },
  { id: 10, category: 'physical', caption: 'B1 Intensive Class - July 2025', location: 'Kisumu' },
  { id: 11, category: 'online', caption: 'Mombasa Weekend Class - June 2025', location: 'Mombasa' },
  { id: 12, category: 'life', caption: 'Graduation Ceremony - May 2025', location: 'Kisumu' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <main>
      <SiteHeader />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="section-kicker">Gallery</div>
          <h1>See Our Students in Action</h1>
          <p>From online classes to graduation celebrations, witness the Lakeview learning journey</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="filter-section section-pad">
        <div className="filter-tabs">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon size={18} />
                {category.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section section-pad">
        <div className="gallery-masonry">
          {filteredItems.map((item) => (
            <div className="gallery-item-full" key={item.id}>
              <div className="gallery-image">
                <img
                  src={`/gallery-${item.id}.jpg`}
                  alt={item.caption}
                  className="gallery-img"
                />
              </div>
              <div className="gallery-caption">
                <h3>{item.caption}</h3>
                <span className="gallery-location">{item.location}</span>
              </div>
            </div>
          ))}
        </div>
        {filteredItems.length === 0 && (
          <div className="no-results">
            <p>No photos found in this category.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="gallery-cta section-pad">
        <div className="cta-content">
          <h2>Want to Join Our Community?</h2>
          <p>Become part of our growing family of German learners</p>
          <a href="/contact" className="button button-accent-red">
            Start Your Journey
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
