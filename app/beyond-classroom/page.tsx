import type { Metadata } from 'next';
import { ArrowUpRight, Briefcase, FileText, MessageCircle, ShieldCheck, Users, BookOpen, Globe } from 'lucide-react';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

export const metadata: Metadata = {
  title: 'Beyond the Classroom | LakeView German School',
  description: 'Learning German is step one. We walk with you all the way to Germany with job support, CV guidance, interview prep, and more.',
  alternates: { canonical: '/beyond-classroom' },
};

const supportServices = [
  {
    icon: Briefcase,
    title: 'Job & Ausbildung Applications',
    description: 'Guidance finding and applying to opportunities in Germany',
  },
  {
    icon: FileText,
    title: 'CV & Motivation Letter Guidance',
    description: 'German-standard application documents that stand out',
  },
  {
    icon: MessageCircle,
    title: 'Interview Preparation',
    description: 'Mock interviews and confidence coaching',
  },
  {
    icon: ShieldCheck,
    title: 'Exam & Certification Guidance',
    description: 'Prepping for official CEFR exams',
  },
  {
    icon: Users,
    title: 'Institution/Employer Connections',
    description: 'Network access to German institutions and employers',
  },
  {
    icon: Globe,
    title: 'Visa & Document Guidance',
    description: 'Navigating the paperwork for your move to Germany',
  },
];

export default function BeyondClassroomPage() {
  return (
    <main>
      <SiteHeader />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="section-kicker">Beyond the Classroom</div>
          <h1>Learning German is Step One. We Walk With You All the Way to Germany.</h1>
          <p>Comprehensive support services to help you succeed in your German journey</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section section-pad">
        <div className="intro-content-full">
          <h2>More Than Just Language Classes</h2>
          <p>
            At Lakeview German School, we understand that learning German is just the beginning of your journey. 
            That's why we offer comprehensive support services designed to help you navigate every step from 
            your first class to your new life in Germany. Our experienced team provides personalized guidance 
            on job applications, document preparation, interview skills, and visa processes.
          </p>
        </div>
      </section>

      {/* Support Services Grid */}
      <section className="support-services section-pad bg-pale-blue">
        <div className="section-header">
          <div className="section-kicker">Our Support Services</div>
          <h2>How We Help You Beyond the Classroom</h2>
          <p>Comprehensive guidance for your journey to Germany</p>
        </div>
        <div className="services-grid">
          {supportServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <service.icon size={32} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section-pad">
        <div className="section-header">
          <div className="section-kicker">Your Journey</div>
          <h2>From Classroom to Career</h2>
          <p>A clear pathway from learning German to achieving your goals</p>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Learn German</h3>
              <p>Complete A1-B2 CEFR-aligned courses with our experienced instructors</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Get Certified</h3>
              <p>Prepare for and pass official CEFR exams recognized in Germany</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Build Your Profile</h3>
              <p>Create German-standard CV and motivation letters with our guidance</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Apply & Interview</h3>
              <p>Get job/Ausbildung placement support and interview preparation</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Visa & Move</h3>
              <p>Navigate visa requirements and prepare for your move to Germany</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="beyond-cta section-pad">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Let us help you achieve your goals in Germany</p>
          <a href="/contact" className="button button-accent-red">
            Get in Touch <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
