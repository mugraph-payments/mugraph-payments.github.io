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
