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
          <Card
            key={`${item.question}-${index}`}
            className="cursor-pointer p-4"
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            onClick={() => setOpenIndex(isOpen ? null : index)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setOpenIndex(isOpen ? null : index);
              }
            }}
          >
            <div className="flex w-full items-center justify-between text-left text-base font-semibold">
              <span>{item.question}</span>
              <span className="text-gold-400" aria-hidden="true">
                {isOpen ? '-' : '+'}
              </span>
            </div>
            {isOpen ? (
              <p className="mt-3 text-sm leading-relaxed text-night-800">{item.answer}</p>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
}
