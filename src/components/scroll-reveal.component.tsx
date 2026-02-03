import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollRevealProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delay?: number;
}

export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}
