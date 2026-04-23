'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'fade';

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600;
  /** Fraction of element visible before revealing (0–1). Default 0.15. */
  threshold?: number;
  /** Extra root margin so reveal triggers a bit early. Default '0px 0px -10% 0px'. */
  rootMargin?: string;
  /** Only reveal once, don't re-hide on scroll up. Default true. */
  once?: boolean;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

const variantClass: Record<RevealVariant, string> = {
  up: 'reveal-up',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
  fade: 'reveal',
};

export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver is unsupported, just show content.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';
  const combined = `${variantClass[variant]} ${delayClass} ${visible ? 'is-visible' : ''} ${className}`.trim();

  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={combined}>
      {children}
    </Component>
  );
}
