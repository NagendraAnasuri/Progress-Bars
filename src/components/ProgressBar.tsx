import React from "react";

interface ProgressBarProps {
  value?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value = 0 }) => {
  return (
    <div className="w-[500px] bg-gray-200 rounded-full h-4 m-4 overflow-hidden">
      <div
        className={`h-4 text-center text-[12px] transition-all duration-500 ease-in-out ${value > 70 ? "bg-green-700" : value > 40 ? "bg-orange-500" : "bg-red-400"} `}
        style={{
          width: `${value}%`,
        }}
      >
        <span className="text-white">{`${value}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
