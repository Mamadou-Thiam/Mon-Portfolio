import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    /* Honeypot : les bots remplissent ce champ, pas les visiteurs. */
    if (String(data.get('website') ?? '')) return;

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !subject || !message) return;

    const body = `Bonjour Mamadou,\n\nNom : ${name}\nEmail : ${email}\nSujet : ${subject}\n\n${message}`;
    const url = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(body)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <section id="contact" className="section rule-top">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Parlons de votre <span className="italic text-accent-indigo">projet</span>
                </>
              }
              subtitle="Un projet, une opportunité ou une question : écrivez-moi, je vous réponds sous 24 à 48 heures."
            />

            <Reveal delay={180}>
              <ul className="mt-10 border-t border-[rgb(var(--rule))]">
                <li className="border-b border-[rgb(var(--rule))] py-4">
                  <a href={`mailto:${profile.email}`} className="group flex items-center gap-4">
                    <Mail className="h-4 w-4 text-accent-indigo" aria-hidden="true" />
                    <span className="text-sm text-slate-300 transition-colors group-hover:text-white">
                      {profile.email}
                    </span>
                  </a>
                </li>
                <li className="border-b border-[rgb(var(--rule))] py-4">
                  <a href={profile.phoneHref} className="group flex items-center gap-4">
                    <Phone className="h-4 w-4 text-accent-indigo" aria-hidden="true" />
                    <span className="text-sm text-slate-300 transition-colors group-hover:text-white">
                      {profile.phone}
                    </span>
                  </a>
                </li>
                <li className="border-b border-[rgb(var(--rule))] py-4">
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-accent-indigo"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                      LinkedIn
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-accent-indigo"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      GitHub
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="border-t border-[rgb(var(--rule))] pt-8" noValidate={false}>
              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <label className="block" htmlFor="name">
                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Nom complet
                  </span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    placeholder="Votre nom"
                    className="field"
                  />
                </label>

                <label className="block" htmlFor="email">
                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Email
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={150}
                    autoComplete="email"
                    placeholder="vous@email.com"
                    className="field"
                  />
                </label>
              </div>

              <label className="mt-8 block" htmlFor="subject">
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Sujet
                </span>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  maxLength={150}
                  placeholder="Ex : développement d'une application web"
                  className="field"
                />
              </label>

              <label className="mt-8 block" htmlFor="message">
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Message
                </span>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={2000}
                  placeholder="Parlez-moi de votre projet..."
                  className="field resize-none"
                />
              </label>

              {/* Honeypot : masqué des utilisateurs et des lecteurs d'écran. */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="website">Ne pas remplir ce champ</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <button type="submit" className="btn-primary">
                  Préparer le message
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <p className="max-w-xs text-xs leading-relaxed text-slate-500">
                  Le formulaire ouvre WhatsApp avec votre message déjà rédigé&nbsp;; vous gardez la main sur l’envoi.
                </p>
              </div>

              <p className="mt-4 min-h-[1.5rem] text-sm text-accent-indigo" role="status" aria-live="polite">
                {sent ? 'Message prêt dans WhatsApp — validez l’envoi dans l’application.' : ''}
              </p>
            </form>
          </Reveal>
        </div>

        <div className="mt-20 border-t border-[rgb(var(--rule))] pt-8 text-center">
          <p className="font-display text-3xl italic tracking-[-0.02em] text-white sm:text-4xl">
            Mamadou <span className="text-accent-indigo">Thiam</span>
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">
            Ingénierie système · Développement · Transmission
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
