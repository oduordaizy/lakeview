import type { Metadata } from 'next';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { Accordion } from '../../components/ui/accordion';

export const metadata: Metadata = {
  title: 'FAQ | LakeView German School',
  description: 'Find answers to frequently asked questions about our German classes, pricing, schedules, and certification.',
  alternates: { canonical: '/faq' },
};

const faqItems = [
  {
    question: 'Do I need any German knowledge to start A1?',
    answer: 'No. We welcome complete beginners at A1. Our A1 course is designed for students with no prior German experience, taking you from your first "Hallo" to basic everyday communication.',
  },
  {
    question: 'What\'s the difference between online and physical classes?',
    answer: 'Online classes are conducted via live video sessions, allowing you to learn from anywhere in Kenya including Narok and Mombasa. Physical classes are held in person at our Kisumu location on Oginga Odinga Street, offering face-to-face interaction with instructors.',
  },
  {
    question: 'Can I switch from online to physical mid-program?',
    answer: 'Yes, we offer flexibility. You can switch between online and physical formats based on your schedule and preferences, subject to availability. Contact us to discuss your options.',
  },
  {
    question: 'Do you help with visa applications after B2?',
    answer: 'Yes, we provide comprehensive support beyond language learning. Our "Beyond the Classroom" services include visa guidance, document preparation, and connections to help you navigate the process of moving to Germany.',
  },
  {
    question: 'What happens if I miss a class?',
    answer: 'We understand that life happens. We offer make-up sessions and provide access to recorded lessons (for online classes) so you can catch up on missed content. Your instructor will also provide materials to help you stay on track.',
  },
  {
    question: 'How do I pay for classes?',
    answer: 'We accept various payment methods including M-Pesa, bank transfers, and mobile money. Payment is made monthly at the beginning of each month. Contact us for specific payment details and instructions.',
  },
];

export default function FAQPage() {
  return (
    <main>
      <SiteHeader />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="section-kicker">FAQ</div>
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our German classes and services</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-pad">
        <div className="faq-container">
          <div className="faq-intro">
            <h2>Got Questions? We Have Answers.</h2>
            <p>Can't find what you're looking for? Feel free to contact us directly.</p>
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="faq-cta section-pad">
        <div className="cta-content">
          <h2>Still Have Questions?</h2>
          <p>Our team is here to help you find the right path</p>
          <a href="/contact" className="button button-accent-red">
            Contact Us
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
