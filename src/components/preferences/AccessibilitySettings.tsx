'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

import {
  applyPrefs,
  defaultPrefs,
  readPrefs,
  writePrefs,
  type AccessibilityPrefs,
} from './preferences';

type SettingRowProps = {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

function SettingRow({ label, description, checked, onChange, disabled = false }: SettingRowProps) {
  return (
    <label
      className={`flex items-start gap-4 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-sm text-night-800 shadow-sm ${
        disabled ? 'opacity-70' : ''
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-4 w-4 accent-gold-300"
        disabled={disabled}
      />
      <span className="space-y-1">
        <span className="block font-semibold text-night-900">{label}</span>
        <span className="block text-xs text-night-700">{description}</span>
      </span>
    </label>
  );
}

export function AccessibilitySettings() {
  const systemReduce = useReducedMotion();
  const [prefs, setPrefs] = useState<AccessibilityPrefs>(defaultPrefs);

  useEffect(() => {
    const current = readPrefs();
    setPrefs(current);
    applyPrefs(current);
  }, []);

  useEffect(() => {
    const sync = () => {
      setPrefs(readPrefs());
    };

    window.addEventListener('storage', sync);
    window.addEventListener('livprefs-change', sync);

    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('livprefs-change', sync);
    };
  }, []);

  const updatePrefs = (patch: Partial<AccessibilityPrefs>) => {
    setPrefs((prev) => {
      const next = { ...prev, ...patch };
      writePrefs(next);
      applyPrefs(next);
      return next;
    });
  };

  return (
    <div className="space-y-4">
      <SettingRow
        label="Réduire les animations"
        description="Désactive les animations au scroll et limite les micro-animations."
        checked={prefs.reduceMotion || systemReduce}
        onChange={(checked) => updatePrefs({ reduceMotion: checked })}
        disabled={systemReduce}
      />
      {systemReduce ? (
        <p className="text-xs text-night-700">
          Votre appareil demande déjà la réduction des animations. Ce réglage s'applique automatiquement.
        </p>
      ) : null}
      <SettingRow
        label="Désactiver le fond scintillant"
        description="Retire le scintillement animé en arrière-plan."
        checked={prefs.disableSparkles}
        onChange={(checked) => updatePrefs({ disableSparkles: checked })}
      />
      <SettingRow
        label="Désactiver les motifs décoratifs"
        description="Retire les motifs très discrets (étoiles, couronnes, baguettes)."
        checked={prefs.disableMotifs}
        onChange={(checked) => updatePrefs({ disableMotifs: checked })}
      />
    </div>
  );
}
