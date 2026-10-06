import { useState, type FormEvent, type ReactNode } from 'react';
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { profile } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import WhatsAppIcon from './WhatsAppIcon';

const contactCards = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Téléphone', value: profile.phone, href: profile.phoneHref },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '+221 76 133 32 09',
    href: profile.whatsappHref,
  },
  { icon: MapPin, label: 'Localisation', value: profile.location, href: undefined },
];

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const subject = String(data.get('subject') ?? 'Prise de contact');
    const message = String(data.get('message') ?? '');

    const body = `Bonjour Mamadou,\n\nNom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\n${message}`;
    window.open(
      `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(body)}`,
      '_blank',
      'noopener,noreferrer',
    );
    setSent(true);
  };

  return (
    <section id="contact" className="section-shell">
      <div className="pointer-events-none absolute -left-24 top-24 h-96 w-96 rounded-full bg-accent-indigo/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent-sky/10 blur-[130px]" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Construisons quelque chose <span className="text-gradient">de grand ensemble</span>
            </>
          }
          subtitle="Un projet, une opportunité ou simplement envie d'échanger ? Ma boîte mail est toujours ouverte."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Info */}
          <div className="space-y-4">
            {contactCards.map((card, index) => {
              const content = (
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-accent-indigo/40 hover:bg-white/[0.06]">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-accent-indigo/25 bg-accent-indigo/10 text-accent-indigo">
                    <card.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-slate-500">{card.label}</p>
                    <p className="truncate text-sm font-medium text-white">{card.value}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={card.label} delay={index * 80}>
                  {card.href ? (
                    <a href={card.href} className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              );
            })}

            <Reveal delay={260}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-4 text-xs uppercase tracking-widest text-slate-500">Retrouvez-moi</p>
                <div className="flex gap-3">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-accent-indigo/50 hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-accent-indigo/50 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={profile.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 hover:text-emerald-400"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Email"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-accent-indigo/50 hover:text-white"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="right" delay={120}>
            <form
              onSubmit={handleSubmit}
              className="card-premium relative overflow-hidden p-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nom complet" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Votre nom"
                    className="input"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="vous@email.com"
                    className="input"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Sujet" htmlFor="subject">
                  <input
                    id="subject"
                    name="subject"
                    required
                    placeholder="Ex : Développement d'une application web"
                    className="input"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Parlez-moi de votre projet..."
                    className="input resize-none"
                  />
                </Field>
              </div>

              <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
                <Send className="h-4 w-4" />
                Envoyer le message
              </button>

              {sent && (
                <p className="mt-5 flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  Merci ! WhatsApp s'ouvre avec votre message prêt à être envoyé.
                </p>
              )}

              <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <Sparkles className="h-3.5 w-3.5 text-accent-indigo" />
                Réponse habituelle sous 24 à 48 heures.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-slate-400">
        {label}
      </span>
      {children}
    </label>
  );
}

export default Contact;
