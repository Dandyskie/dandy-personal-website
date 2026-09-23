import { motion } from 'motion/react';
import { useEffect, useRef, useState, useMemo } from 'react';

const buildKeyframes = (from, steps) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

  const keyframes = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = '',
  children,
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = t => t,
  onAnimationComplete,
  stepDuration = 0.35,
  as: Component = 'p',
  ...props
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(ref.current);
      }
    }, { threshold, rootMargin });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // If children are passed (e.g. image, card container, or nested elements)
  if (children) {
    const yOffset = direction === 'top' ? -25 : (direction === 'bottom' ? 25 : 0);
    return (
      <motion.div
        ref={ref}
        initial={{ filter: 'blur(16px)', opacity: 0, y: yOffset, scale: 0.98 }}
        animate={inView ? { filter: 'blur(0px)', opacity: 1, y: 0, scale: 1 } : { filter: 'blur(16px)', opacity: 0, y: yOffset, scale: 0.98 }}
        transition={{
          duration: 0.75,
          delay: delay / 1000,
          ease: [0.16, 1, 0.3, 1]
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  // Text animation mode
  const elements = animateBy === 'words' ? (text || '').split(' ') : (text || '').split('');

  const defaultFrom = useMemo(() =>
    direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -30 } : { filter: 'blur(10px)', opacity: 0, y: 30 }, [direction]);

  const defaultTo = useMemo(() => [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      y: direction === 'top' ? 4 : -4
    },
    { filter: 'blur(0px)', opacity: 1, y: 0 }
  ], [direction]);

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from(
    { length: stepCount },
    (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1))
  );

  return (
    <Component ref={ref} className={`blur-text ${className} flex flex-wrap`} {...props}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000
        };
        spanTransition.ease = easing;

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </Component>
  );
};

export const BlurReveal = BlurText;
export default BlurText;
