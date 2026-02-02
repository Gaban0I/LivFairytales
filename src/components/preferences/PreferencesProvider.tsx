'use client';

import { useEffect } from 'react';

import { applyPrefs, readPrefs } from './preferences';

export function PreferencesProvider() {
  useEffect(() => {
    const sync = () => {
      applyPrefs(readPrefs());
    };

    sync();
    window.addEventListener('storage', sync);
    window.addEventListener('livprefs-change', sync);

    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('livprefs-change', sync);
    };
  }, []);

  return null;
}
