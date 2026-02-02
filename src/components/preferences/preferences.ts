export type AccessibilityPrefs = {
  reduceMotion: boolean;
  disableSparkles: boolean;
  disableMotifs: boolean;
};

export const ACCESSIBILITY_STORAGE_KEY = 'livfairytales-accessibility';

export const defaultPrefs: AccessibilityPrefs = {
  reduceMotion: false,
  disableSparkles: false,
  disableMotifs: false,
};

export const readPrefs = (): AccessibilityPrefs => {
  if (typeof window === 'undefined') return defaultPrefs;
  try {
    const raw = window.localStorage.getItem(ACCESSIBILITY_STORAGE_KEY);
    if (!raw) return defaultPrefs;
    const parsed = JSON.parse(raw) as Partial<AccessibilityPrefs>;
    return {
      ...defaultPrefs,
      ...parsed,
    };
  } catch {
    return defaultPrefs;
  }
};

export const writePrefs = (prefs: AccessibilityPrefs) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(ACCESSIBILITY_STORAGE_KEY, JSON.stringify(prefs));
  window.dispatchEvent(new CustomEvent('livprefs-change'));
};

export const applyPrefs = (prefs: AccessibilityPrefs) => {
  if (typeof document === 'undefined') return;
  const systemReduce =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const body = document.body;
  body.classList.toggle('reduce-motion', prefs.reduceMotion || systemReduce);
  body.classList.toggle('no-sparkle', prefs.disableSparkles);
  body.classList.toggle('no-motif', prefs.disableMotifs);
};
