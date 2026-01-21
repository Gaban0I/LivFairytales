'use client';

import { useState } from 'react';

import { siteContent } from '@/content/siteContent';
import { Button } from '@/components/ui/Button';
import { Field, FormCard } from '@/components/ui/Field';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <FormCard>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-4"
      >
        <Field
          label={siteContent.contact.form.nameLabel}
          name="name"
          placeholder={siteContent.contact.form.namePlaceholder}
        />
        <Field
          label={siteContent.contact.form.emailLabel}
          name="email"
          type="email"
          placeholder={siteContent.contact.form.emailPlaceholder}
        />
        <Field
          label={siteContent.contact.form.subjectLabel}
          name="subject"
          placeholder={siteContent.contact.form.subjectPlaceholder}
        />
        <Field
          label={siteContent.contact.form.messageLabel}
          name="message"
          as="textarea"
          placeholder={siteContent.contact.form.messagePlaceholder}
        />
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit">{siteContent.contact.form.buttonLabel}</Button>
        </div>
        {submitted ? <p className="text-sm text-night-700">{siteContent.contact.form.successMessage}</p> : null}
      </form>
    </FormCard>
  );
}
