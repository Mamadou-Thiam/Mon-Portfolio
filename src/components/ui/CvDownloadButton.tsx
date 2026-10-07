import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Download, FileText } from 'lucide-react';
import { cvFiles } from '../../data/portfolio';
import MagneticButton from './MagneticButton';

function CvDownloadButton() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      <MagneticButton
        variant="ghost"
        className="group"
        ariaLabel="Télécharger mon CV"
        onClick={() => setOpen((value) => !value)}
      >
        <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
        CV
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </MagneticButton>

      <div
        className={`absolute left-1/2 top-[calc(100%+0.75rem)] z-50 w-64 -translate-x-1/2 origin-top rounded-2xl border border-white/10 bg-base-900/95 p-2 shadow-card backdrop-blur-xl transition-all duration-300 ${
          open ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
        }`}
        role="menu"
        aria-hidden={!open}
      >
        {cvFiles.map((cv) => (
          <a
            key={cv.file}
            href={cv.file}
            download={cv.download}
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-white/[0.06]"
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-accent-indigo">
              <FileText className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium text-white">{cv.label}</span>
              <span className="block text-xs text-slate-400">{cv.hint}</span>
            </span>
            <Download className="ml-auto h-4 w-4 flex-shrink-0 text-slate-500 transition-colors group-hover:text-white" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default CvDownloadButton;
