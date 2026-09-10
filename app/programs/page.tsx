import type { Metadata } from 'next';
import { ArrowUpRight, Globe, MapPin, MessageCircle } from 'lucide-react';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

export const metadata: Metadata = {
  title: 'Programs & Pricing | LakeView German School',
  description: 'Choose between online and physical German classes. CEFR-aligned training from A1 to B2 at affordable rates.',
  alternates: { canonical: '/programs' },
};

const courseLevels = [
  { level: 'A1', duration: '2 months', focus: 'Foundations — everyday communication' },
  { level: 'A2', duration: '2 months', focus: 'Building confidence in conversation' },
  { level: 'B1', duration: '2 months', focus: 'Independent, work-ready German' },
  { level: 'B2', duration: '2 months', focus: 'Advanced fluency, exam & Ausbildung readiness' },
];

export default function ProgramsPage() {
  return (
    <main>
      <SiteHeader />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="section-kicker">Programs & Pricing</div>
          <h1>Choose the Learning Format That Fits Your Life</h1>
          <p>Online from anywhere, or in person in Kisumu</p>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="comparison-section section-pad">
        <div className="comparison-grid">
          {/* Online Classes Card */}
          <div className="comparison-card">
            <div className="card-image">
              <div className="image-placeholder">
                <Globe size={48} />
                <span>Online Class</span>
              </div>
            </div>
            <div className="card-content">
              <h2>Online Classes</h2>
              <div className="price">KES 10,000<span>/month</span></div>
              <div className="schedule-options">
                <div className="schedule-item">
                  <strong>Daytime:</strong>
                  <span>9 AM – 2 PM</span>
                </div>
                <div className="schedule-item">
                  <strong>Evening:</strong>
                  <span>8 PM – 10 PM</span>
                </div>
              </div>
              <p className="format-note">Live online classes — join from Narok, Mombasa, or anywhere</p>
              <a href="/contact" className="button button-accent-red card-cta">
                Join Online Classes <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Physical Classes Card */}
          <div className="comparison-card featured">
            <div className="card-badge">Popular</div>
            <div className="card-image">
              <div className="image-placeholder">
                <MapPin size={48} />
                <span>Physical Class</span>
              </div>
            </div>
            <div className="card-content">
              <h2>Physical Classes</h2>
              <div className="price">KES 12,000<span>/month</span></div>
              <div className="location-info">
                <strong>Location:</strong>
                <span>Oginga Odinga Street, Kisumu</span>
              </div>
              <p className="format-note">In-person classes with hands-on instructor support</p>
              <a href="/locations" className="button button-accent-red card-cta">
                Visit Us in Kisumu <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure Table */}
      <section className="course-structure section-pad bg-pale-blue">
        <div className="section-header">
          <div className="section-kicker">Course Structure</div>
          <h2>Your Path from A1 to B2</h2>
          <p>Total program: A1–B2 in 8 months</p>
        </div>
        <div className="structure-table">
          <div className="table-header">
            <div>Level</div>
            <div>Duration</div>
            <div>Focus</div>
          </div>
          {courseLevels.map((course, index) => (
            <div className="table-row" key={course.level}>
              <div className="level-cell">
                <span className="level-code">{course.level}</span>
              </div>
              <div>{course.duration}</div>
              <div>{course.focus}</div>
            </div>
          ))}
        </div>
        <div className="highlight-box">
          <p>Every level is CEFR-aligned, so your certificate is recognized for study, work, and visa applications in Germany.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="programs-cta section-pad">
        <div className="cta-content">
          <h2>Not Sure Which Class Fits You?</h2>
          <p>Talk to us and we'll help you find the perfect fit</p>
          <a
            href="https://wa.me/254702562730?text=Hi, I'd like to know more about German classes at Lakeview German School"
            className="button button-accent-red"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={17} /> Chat with us on WhatsApp
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
