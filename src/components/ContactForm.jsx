'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { budgetOptions, industries } from '@/data/site';
import { ArrowIcon } from './Button';

const initial = { name: '', email: '', phone: '', company: '', vertical: '', budget: '', message: '', website: '' };

// Optional, but if given it must look like a real number: 7-15 digits, with + ( ) - . and spaces allowed.
const validPhone = (v) => /^\+?[\d\s().-]+$/.test(v) && v.replace(/\D/g, '').length >= 7 && v.replace(/\D/g, '').length <= 15;

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = 'Please enter a valid email.';
  if (values.phone.trim() && !validPhone(values.phone.trim())) errors.phone = 'Please enter a valid phone number.';
  if (values.message.trim().length < 10) errors.message = 'A sentence or two helps us prepare (10+ characters).';
  return errors;
}

export default function ContactForm({ compact = false, onDone }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [serverError, setServerError] = useState('');

  const update = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus('sending');
    setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      setStatus('sent');
      setValues(initial);
    } catch (err) {
      setStatus('error');
      setServerError(err.message);
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === 'sent' ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-6 text-center"
          role="status"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-brand/15 text-brand"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
          <h3 className="heading-xl mb-2 text-[30px]">Message received.</h3>
          <p className="mb-6 text-muted">We&apos;ll be in touch within one business day.</p>
          {onDone ? (
            <button type="button" onClick={onDone} className="text-sm uppercase tracking-[0.1em] text-cream underline-offset-4 hover:underline">
              Close
            </button>
          ) : (
            <button type="button" onClick={() => setStatus('idle')} className="text-sm uppercase tracking-[0.1em] text-cream underline-offset-4 hover:underline">
              Send another message
            </button>
          )}
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={submit} noValidate exit={{ opacity: 0, y: -8 }} className="space-y-4">
          <div className={`grid gap-4 ${compact ? 'sm:grid-cols-2' : 'md:grid-cols-2'}`}>
            <Field label="Name" error={errors.name}>
              <input name="name" value={values.name} onChange={update} autoComplete="name" className="field" placeholder="Your name" />
            </Field>
            <Field label="Work email" error={errors.email}>
              <input name="email" type="email" value={values.email} onChange={update} autoComplete="email" className="field" placeholder="you@brand.com" />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <input name="phone" type="tel" inputMode="tel" value={values.phone} onChange={update} autoComplete="tel" className="field" placeholder="+91 98765 43210" />
            </Field>
            <Field label="Company / Brand">
              <input name="company" value={values.company} onChange={update} autoComplete="organization" className="field" placeholder="Brand name" />
            </Field>
            <Field label="Vertical" className={compact ? 'sm:col-span-2' : 'md:col-span-2'}>
              <select name="vertical" value={values.vertical} onChange={update} className="field appearance-none">
                <option value="">Select one</option>
                {industries.map((i) => (
                  <option key={i.id} value={i.title}>
                    {i.title}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </Field>
          </div>

          <fieldset>
            <legend className="mb-2 text-[13px] text-sand">Monthly ad budget</legend>
            <div className="flex flex-wrap gap-2">
              {budgetOptions.map((b) => (
                <label key={b} className="cursor-pointer">
                  <input type="radio" name="budget" value={b} checked={values.budget === b} onChange={update} className="peer sr-only" />
                  <span className="inline-block rounded-full border border-line px-3.5 py-2 text-[13px] text-muted transition peer-checked:border-brand peer-checked:bg-brand/15 peer-checked:text-cream peer-focus-visible:ring-2 peer-focus-visible:ring-brand hover:border-cream/30">
                    {b}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <Field label="What should we know?" error={errors.message}>
            <textarea
              name="message"
              value={values.message}
              onChange={update}
              rows={compact ? 3 : 5}
              className="field resize-none"
              placeholder="Current revenue, channels, goals, the thing keeping you up at night…"
            />
          </Field>

          {/* Honeypot: hidden from people, tempting to bots */}
          <input type="text" name="website" value={values.website} onChange={update} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          {status === 'error' && (
            <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {serverError}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-[14px] font-medium uppercase tracking-[0.06em] text-white transition hover:bg-brand-hover disabled:cursor-wait disabled:opacity-70"
          >
            {status === 'sending' ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                Send request
                <ArrowIcon className="h-[17px] w-[17px] transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({ label, error, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[13px] text-sand">{label}</span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 block text-[12.5px] text-red-300"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}
