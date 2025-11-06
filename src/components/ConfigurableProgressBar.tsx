import React from "react";

type Size = "sm" | "md" | "lg";
type Color = "primary" | "success" | "warning" | "error";

interface ProgressBarProps {
  value: number;
  maxValue?: number;
  size?: Size;
  color?: Color;
  showLabel?: boolean;
}

const SizeClasses: Record<Size, string> = {
  sm: "h-2",
  md: "h-4",
  lg: "h-6",
};

const ColorClasses: Record<Color, string> = {
  primary: "bg-blue-500",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
};

const ConfigurableProgressBar: React.FC<ProgressBarProps> = ({
  value,
  maxValue = 100,
  size = "md",
  color = "primary",
  showLabel = true,
}) => {
  const percent =
    maxValue > 0 ? Math.min(Math.max((value / maxValue) * 100, 0), 100) : 0;

  return (
    <div
      className={`w-[500px] bg-gray-200 rounded-full overflow-hidden ${SizeClasses[size]} m-4`}
    >
      <div
        className={`h-full flex items-center justify-center text-white text-xs font-medium transition-all duration-500 ease-in-out ${ColorClasses[color]}`}
        style={{ width: `${percent}%` }}
      >
        {showLabel && `${percent}%`}
      </div>
    </div>
  );
};

export default ConfigurableProgressBar;
