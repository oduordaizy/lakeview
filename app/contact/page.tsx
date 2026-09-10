'use client';

import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };

  return (
    <main>
      <SiteHeader />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="section-kicker">Contact & Enroll</div>
          <h1>Start Your German Journey Today</h1>
          <p>Get in touch to enroll or learn more about our programs</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section-pad">
        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We're here to help you find the right German learning path.</p>
            
            <div className="contact-details-list">
              <a href="https://wa.me/254702562730?text=Hi, I'd like to know more about German classes at Lakeview German School" target="_blank" rel="noopener noreferrer" className="contact-item">
                <MessageCircle size={20} />
                <div>
                  <small>WhatsApp</small>
                  <span>0702 562 730</span>
                </div>
                <ArrowUpRight size={16} />
              </a>
              
              <a href="tel:+254103390866" className="contact-item">
                <Phone size={20} />
                <div>
                  <small>Call</small>
                  <span>0103 390 866</span>
                </div>
                <ArrowUpRight size={16} />
              </a>
              
              <a href="mailto:hello@lakeviewgerman.school" className="contact-item">
                <Mail size={20} />
                <div>
                  <small>Email</small>
                  <span>hello@lakeviewgerman.school</span>
                </div>
                <ArrowUpRight size={16} />
              </a>
              
              <div className="contact-item">
                <MapPin size={20} />
                <div>
                  <small>Visit us</small>
                  <span>Oginga Odinga Street, Kisumu</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="whatsapp-cta">
              <a
                href="https://wa.me/254702562730?text=Hi, I'd like to know more about German classes at Lakeview German School"
                className="button button-accent-red whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                Chat with us on WhatsApp
              </a>
            </div>
          </div>

          {/* Enrollment Form */}
          <div className="enrollment-form">
            {sent ? (
              <div className="form-success">
                <span className="success-icon">✓</span>
                <h2>Enrollment Request Received</h2>
                <p>Thanks for your interest! Our team will be in touch shortly to help you get started.</p>
                <button type="button" className="text-link" onClick={() => setSent(false)}>
                  Submit another request <ArrowUpRight size={16} />
                </button>
              </div>
            ) : (
              <>
                <div className="form-heading">
                  <span>Enrollment Form</span>
                  <h2>Tell Us About Yourself</h2>
                  <p>Fill out this form and we'll help you find the perfect class</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <label>
                    Full Name
                    <input name="name" required placeholder="Your full name" />
                  </label>
                  
                  <label>
                    Phone Number
                    <input name="phone" type="tel" required placeholder="07XX XXX XXX" />
                  </label>
                  
                  <label>
                    Preferred Format
                    <select name="format" required defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option value="online">Online Classes</option>
                      <option value="physical">Physical Classes (Kisumu)</option>
                    </select>
                  </label>
                  
                  <label>
                    Preferred Schedule
                    <select name="schedule" required defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option value="daytime">Daytime (9 AM – 2 PM)</option>
                      <option value="evening">Evening (8 PM – 10 PM)</option>
                    </select>
                  </label>
                  
                  <label>
                    Current Level
                    <select name="level" required defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option value="beginner">Beginner (No prior knowledge)</option>
                      <option value="a1">A1 (Beginner)</option>
                      <option value="a2">A2 (Elementary)</option>
                      <option value="b1">B1 (Intermediate)</option>
                    </select>
                  </label>
                  
                  <label>
                    Message (Optional)
                    <textarea name="message" placeholder="Tell us about your goals or any questions..." rows={4} />
                  </label>
                  
                  <button type="submit" className="button button-accent-red form-submit">
                    Submit Enrollment Request <ArrowUpRight size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
