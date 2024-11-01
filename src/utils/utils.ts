import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function throttle<T = undefined>(
  handler: (args?: T) => void,
  timeoutMs: number,
) {
  let activeTimeout: number | null = null;

  const throttledFunction = (args?: T) => {
    if (activeTimeout) clearTimeout(activeTimeout);
    activeTimeout = setTimeout(() => {
      handler(args);
    }, timeoutMs);
  };

  return throttledFunction;
}

export function easeInOutQuad(x: number): number {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}
