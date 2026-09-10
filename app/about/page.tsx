import type { Metadata } from 'next';
import { ArrowUpRight, HeartHandshake, Sparkles } from 'lucide-react';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

export const metadata: Metadata = {
  title: 'About Us | LakeView German School',
  description: 'Learn about Lakeview German School - our vision, mission, values, and story of empowering learners to speak German with confidence.',
  alternates: { canonical: '/about' },
};

const coreValues = [
  { icon: '★', title: 'Excellence' },
  { icon: '★', title: 'Discipline' },
  { icon: '★', title: 'Integrity' },
  { icon: '★', title: 'Student-Centred Learning' },
  { icon: '★', title: 'Cultural Awareness' },
  { icon: '★', title: 'Innovation & Growth' },
  { icon: '★', title: 'Community & Support' },
  { icon: '★', title: 'Results & Accountability' },
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="section-kicker">About Us</div>
          <h1>Our Story, Vision, and Values</h1>
          <p>Empowering learners to speak German with confidence since our founding</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story section-pad">
        <div className="story-content">
          <div className="section-kicker">Our Story</div>
          <h2>Why Lakeview German School</h2>
          <p>
            Lakeview German School was founded with a clear mission: to make quality German language education accessible to learners in Kenya and beyond. 
            We chose Kisumu as our home base because of its strategic location and vibrant community, but our reach extends far beyond through our online programs.
          </p>
          <p>
            We believe that learning German is more than acquiring a new language—it's opening doors to education, employment, cultural exchange, and new opportunities. 
            Our learner-centred approach combines experienced instructors with practical, real-world applications to ensure every student achieves their goals.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="vision-section section-pad bg-pale-blue">
        <div className="section-header">
          <div className="section-kicker">Our Vision</div>
          <h2>To Become a Leading German Language Learning Institution in Africa</h2>
        </div>
        <div className="vision-text">
          <p>
            Connecting learners to global opportunities through quality language education, cultural understanding, and professional development.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section section-pad">
        <div className="section-header">
          <div className="section-kicker">Our Mission</div>
          <h2>Providing Accessible, High-Quality German Language Education</h2>
        </div>
        <div className="mission-text">
          <p>
            To provide accessible, high-quality and practical German language education that equips learners with the communication skills, confidence, 
            and knowledge needed to succeed in academic, professional, and everyday environments in Germany and the wider German-speaking world.
          </p>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="stand-for-section section-pad">
        <div className="stand-for-quote">
          <h2>"Learning German is more than learning a language — it is a pathway to education, employment, cultural exchange, and new opportunities."</h2>
        </div>
        <div className="stand-for-text">
          <p>
            At Lakeview, we believe in learner-centred teaching that adapts to your needs. Our experienced instructors bring years of expertise 
            to every class, while our flexible online and physical options ensure you can learn on your terms. From A1 foundations to B2 fluency, 
            our CEFR-aligned curriculum prepares you for real success.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section section-pad bg-pale-blue">
        <div className="section-header">
          <div className="section-kicker">Core Values</div>
          <h2>What Guides Us</h2>
        </div>
        <div className="values-grid-8">
          {coreValues.map((value, index) => (
            <div className="value-card" key={index}>
              <span className="value-icon">{value.icon}</span>
              <h3>{value.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="tagline-banner">
        <div className="tagline-content">
          <h2>Learn German. Open Doors. Build Your Future.</h2>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section-pad">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join our community of learners and open doors to your future</p>
          <a href="/contact" className="button button-accent-red">
            Get in Touch <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
