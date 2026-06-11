import React from 'react';
import { SubjectRow } from './SubjectRow';
import { Subject, PresetMode } from '../../../types';
import { getCreditOptions, getGradeOptions } from '../utils/options';

interface SubjectListProps {
  subjects: Subject[];
  mode: PresetMode;
  onUpdate: (id: number, field: keyof Subject, value: string | number) => void;
  onRemove: (id: number) => void;
}

export const SubjectList: React.FC<SubjectListProps> = ({
  subjects,
  mode,
  onUpdate,
  onRemove,
}) => {
  const creditOptions = getCreditOptions();
  const gradeOptions = getGradeOptions();

  const isCustom = mode === 'custom';

  return (
    <div className="-mx-4 sm:mx-0 overflow-x-auto">
      <div className="min-w-[320px] px-4 sm:pl-0 sm:pr-0.5">
        <div className={`grid ${
          isCustom 
            ? 'grid-cols-[1.5fr,70px,70px,40px] sm:grid-cols-[1fr,100px,105px,40px]' 
            : 'grid-cols-[1.5fr,70px,70px] sm:grid-cols-[1fr,100px,105px]'
        } gap-2 sm:gap-4 mb-3`}>
          <div className="text-xs ml-1 sm:text-sm font-semibold text-purple-300">Module Name</div>
          <div className="text-xs sm:text-sm font-semibold text-purple-300 text-center">Credits</div>
          <div className="text-xs sm:text-sm font-semibold text-purple-300 text-center">Grade</div>
          {isCustom && <div></div>}
        </div>

        <div className="space-y-2 sm:space-y-3">
          {subjects.map((subject) => (
            <SubjectRow
              key={subject.id}
              subject={subject}
              mode={mode}
              creditOptions={creditOptions}
              gradeOptions={gradeOptions}
              onUpdate={onUpdate}
              onRemove={onRemove}
            />
          ))}
        </div>
      </div>
    </div>
  );
};