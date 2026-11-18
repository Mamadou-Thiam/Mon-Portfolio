import { profile } from '../data/portfolio';
import WhatsAppIcon from './WhatsAppIcon';

/** Bouton de contact flottant, accessible et discret, présent sur toutes les pages. */
function WhatsAppFloat() {
  return (
    <a
      href={profile.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp (nouvel onglet)"
      title="Discuter sur WhatsApp"
      className="fixed bottom-[calc(3.5rem_+_env(safe-area-inset-bottom)_+_1rem)] right-5 z-40 flex h-12 w-12 items-center justify-center border border-[rgb(var(--rule))] bg-base-950 text-[#1FA855] shadow-glow transition-colors duration-200 hover:border-[#1FA855] md:bottom-7 md:right-7"
    >
      <WhatsAppIcon className="h-5 w-5" />
    </a>
  );
}

export default WhatsAppFloat;
