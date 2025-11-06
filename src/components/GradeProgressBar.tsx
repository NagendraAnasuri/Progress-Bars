import React from "react";

interface Grades {
  dist: number;
  average: number;
  pass: number;
  fail: number;
}

interface Colors {
  dist: string;
  average: string;
  pass: string;
  fail: string;
}

interface ProgressBarProps {
  value?: number;
  grades?: Grades;
  colors?: Colors;
}

const GradeProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  grades = { dist: 70, average: 55, pass: 40, fail: 0 },
  colors = { dist: "green", average: "orange", pass: "blue", fail: "red" },
}) => {
  let backgroundColor;

  if (value >= grades.dist) backgroundColor = colors.dist;
  else if (value >= grades.average) backgroundColor = colors.average;
  else if (value >= grades.pass) backgroundColor = colors.pass;
  else backgroundColor = colors.fail;

  return (
    <div className="w-[500px] bg-gray-200 rounded-full h-4 m-4 overflow-hidden">
      <div
        className="h-4 text-center text-[12px] transition-all duration-500 ease-in-out"
        style={{ width: `${value}%`, backgroundColor }}
      >
        <span className="text-white">{`${value}%`}</span>
      </div>
    </div>
  );
};

export default GradeProgressBar;
