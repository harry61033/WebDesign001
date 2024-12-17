// Animation utility functions
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

export const countUp = (start: number, end: number, duration: number = 2000) => {
  const steps = 50;
  const stepValue = (end - start) / steps;
  const stepDuration = duration / steps;
  return { stepValue, stepDuration };
};