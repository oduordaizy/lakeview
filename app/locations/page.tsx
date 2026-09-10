import type { Metadata } from 'next';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

export const metadata: Metadata = {
  title: 'Our Locations | LakeView German School',
  description: 'Find Lakeview German School in Kisumu or join our online classes from Narok, Mombasa, or anywhere in Kenya.',
  alternates: { canonical: '/locations' },
};

const locations = [
  {
    id: 'kisumu',
    name: 'Lakeview German School — Kisumu',
    type: 'Physical',
    address: 'Oginga Odinga Street, Kisumu',
    description: 'In-person classes, hands-on instructor support',
    features: ['Physical classroom', 'Face-to-face instruction', 'Hands-on learning', 'Kisumu-based'],
  },
  {
    id: 'narok',
    name: 'Narok Online Class',
    type: 'Online',
    address: 'Live online sessions',
    description: 'Live online sessions serving learners in Narok and surrounding areas',
    features: ['Live online classes', 'Flexible scheduling', 'Learn from home', 'Narok region focus'],
  },
  {
    id: 'mombasa',
    name: 'Mombasa Online Class',
    type: 'Online',
    address: 'Live online sessions',
    description: 'Live online sessions serving learners on the coast',
    features: ['Live online classes', 'Flexible scheduling', 'Learn from home', 'Coastal region focus'],
  },
];

export default function LocationsPage() {
  return (
    <main>
      <SiteHeader />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="section-kicker">Our Locations</div>
          <h1>Wherever You Are in Kenya, Lakeview Comes to You</h1>
          <p>Physical classes in Kisumu, online classes across Kenya</p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="locations-section section-pad">
        <div className="locations-grid">
          {locations.map((location) => (
            <div className="location-card-full" key={location.id}>
              <div className="location-card-image">
                <div className="image-placeholder">
                  <MapPin size={48} />
                  <span>{location.name}</span>
                </div>
              </div>
              <div className="location-card-content">
                <div className="location-type-badge">{location.type}</div>
                <h2>{location.name}</h2>
                <p className="location-address">{location.address}</p>
                <p className="location-description">{location.description}</p>
                <div className="location-features">
                  {location.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                {location.type === 'Physical' ? (
                  <a href="/contact" className="button button-accent-red location-cta">
                    Visit Us in Kisumu <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <a href="/programs" className="button button-accent-red location-cta">
                    Join Online Classes <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section-pad bg-pale-blue">
        <div className="section-header">
          <div className="section-kicker">Our Reach</div>
          <h2>Serving Learners Across Kenya</h2>
          <p>From Kisumu to the coast, we bring German education to you</p>
        </div>
        <div className="map-container">
          <div className="kenya-map">
            <div className="map-pin kisumu">
              <span className="pin-label">Kisumu</span>
            </div>
            <div className="map-pin narok">
              <span className="pin-label">Narok</span>
            </div>
            <div className="map-pin mombasa">
              <span className="pin-label">Mombasa</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="locations-cta section-pad">
        <div className="cta-content">
          <h2>Ready to Start Learning German?</h2>
          <p>Choose the location and format that works best for you</p>
          <a href="/contact" className="button button-accent-red">
            Get Started <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
