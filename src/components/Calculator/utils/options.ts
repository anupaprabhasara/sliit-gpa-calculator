import { grades } from '../../../data/grades';

export const getCreditOptions = () => 
  Array.from({ length: 16 }, (_, i) => ({
    value: i + 1,
    label: i + 1
  }));

export const getGradeOptions = () => 
  grades.map(g => ({
    value: g.grade,
    label: g.grade
  }));
