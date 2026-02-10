'use client';

import { useState } from 'react';

import { siteContent } from '@/content/siteContent';
import { Button } from '@/components/ui/Button';
import { Field, FormCard } from '@/components/ui/Field';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <FormCard>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setStatus('sending');
          setErrorMessage('');

          const form = event.currentTarget;
          const formData = new FormData(form);
          const payload = Object.fromEntries(formData.entries());

          try {
            const response = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload),
            });

            const result = await response.json().catch(() => ({}));

            if (!response.ok) {
              setErrorMessage(result.error || "Impossible d'envoyer le message.");
              setStatus('error');
              return;
            }

            form.reset();
            setStatus('success');
          } catch (error) {
            setErrorMessage("Impossible d'envoyer le message.");
            setStatus('error');
          }
        }}
        className="space-y-4"
      >
        <label className="sr-only">
          Ne pas remplir
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
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
          <Button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi en cours...' : siteContent.contact.form.buttonLabel}
          </Button>
        </div>
        {status === 'success' ? (
          <p className="text-sm text-night-700" aria-live="polite">
            {siteContent.contact.form.successMessage}
          </p>
        ) : null}
        {status === 'error' ? (
          <p className="text-sm text-red-600" aria-live="polite">
            {errorMessage}
          </p>
        ) : null}
      </form>
    </FormCard>
  );
}
