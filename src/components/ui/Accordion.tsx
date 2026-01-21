'use client';

import { useState } from 'react';

import { Card } from './Card';

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <Card key={`${item.question}-${index}`} className="p-4">
            <button
              className="flex w-full items-center justify-between text-left text-base font-semibold"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className="text-gold-400" aria-hidden="true">
                {isOpen ? '-' : '+'}
              </span>
            </button>
            {isOpen ? (
              <p className="mt-3 text-sm leading-relaxed text-night-800">{item.answer}</p>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
}