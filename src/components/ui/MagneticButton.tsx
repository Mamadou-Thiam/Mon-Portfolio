import { useRef, type MouseEvent, type ReactNode, type RefObject } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
  external?: boolean;
  ariaLabel?: string;
  strength?: number;
}

function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  external = false,
  ariaLabel,
  strength = 14,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);

  const handleMove = (e: MouseEvent) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    node.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };

  const handleLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = 'translate3d(0, 0, 0)';
  };

  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-ghost';
  const classes = `${variantClass} will-change-transform transition-transform duration-200 ease-out ${className}`;

  const commonProps = {
    className: classes,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    'aria-label': ariaLabel,
  };

  if (href) {
    return (
      <a
        ref={ref as RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...commonProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      {...commonProps}
    >
      {children}
    </button>
  );
}

export default MagneticButton;
