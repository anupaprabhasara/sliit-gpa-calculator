import { useState } from 'react';
import { Subject, PresetMode } from '../../../types';
import { presets } from '../../../data/presets';

export function useSubjects() {
  const [mode, setMode] = useState<PresetMode>('custom');
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: 1, name: '', credits: 3, grade: 'A' }
  ]);

  const switchMode = (newMode: PresetMode) => {
    setMode(newMode);
    
    if (newMode !== 'custom') {
      const presetSubjects = presets[newMode];
      setSubjects(presetSubjects.map((preset, index) => ({
        id: index + 1,
        name: preset.name,
        credits: preset.credits,
        grade: 'A'
      })));
    }
  };

  const addSubject = () => {
    if (mode !== 'custom') return; // Only allow adding in custom mode
    setSubjects([...subjects, { 
      id: subjects.length + 1, 
      name: '', 
      credits: 3, 
      grade: 'A' 
    }]);
  };

  const removeSubject = (id: number) => {
    if (mode !== 'custom') return; // Only allow removing in custom mode
    if (subjects.length > 1) {
      setSubjects(subjects.filter(subject => subject.id !== id));
    }
  };

  const updateSubject = (id: number, field: keyof Subject, value: string | number) => {
    setSubjects(subjects.map(subject => 
      subject.id === id ? { ...subject, [field]: value } : subject
    ));
  };

  return {
    subjects,
    mode,
    switchMode,
    addSubject,
    removeSubject,
    updateSubject
  };
}