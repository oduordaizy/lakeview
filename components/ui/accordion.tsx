'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${openIndex === index ? 'open' : ''}`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="accordion-button"
          >
            <span className="accordion-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="accordion-question">{item.question}</span>
            <ChevronDown
              size={17}
              className={`accordion-icon ${openIndex === index ? 'rotated' : ''}`}
            />
          </button>
          {openIndex === index && (
            <div className="accordion-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
