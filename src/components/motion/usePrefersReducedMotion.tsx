import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { readPrefs } from '@/components/preferences/preferences';

export function usePrefersReducedMotion() {
  const systemReduce = useReducedMotion();
  const [userReduce, setUserReduce] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => {
      const prefs = readPrefs();
      setUserReduce(prefs.reduceMotion);
    };

    update();
    window.addEventListener('storage', update);
    window.addEventListener('livprefs-change', update);

    return () => {
      window.removeEventListener('storage', update);
      window.removeEventListener('livprefs-change', update);
    };
  }, []);

  if (userReduce === null) {
    return systemReduce;
  }

  return systemReduce || userReduce;
}
