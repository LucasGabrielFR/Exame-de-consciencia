import { useState, useEffect } from 'react';

const STORAGE_KEY = 'exame_consciencia_sins';

export function useExamen() {
  const [selectedSins, setSelectedSins] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedSins));
    } catch (error) {
      console.error('Error writing to localStorage', error);
    }
  }, [selectedSins]);

  const toggleSin = (id: string) => {
    setSelectedSins((prev) =>
      prev.includes(id) ? prev.filter((sinId) => sinId !== id) : [...prev, id]
    );
  };

  const clearSins = () => {
    setSelectedSins([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error removing from localStorage', error);
    }
  };

  return {
    selectedSins,
    toggleSin,
    clearSins,
  };
}
