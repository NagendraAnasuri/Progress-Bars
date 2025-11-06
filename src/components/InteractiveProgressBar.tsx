import React, { useState } from "react";

const InteractiveProgressBar: React.FC = () => {
  const [value, setValue] = useState<number>(70);

  const progress = Math.min(Math.max(value, 0), 100);

  return (
    <div className="flex flex-col">
      <div className="w-[500px] bg-gray-200 rounded-full h-4 overflow-hidden shadow-sm mx-4 mt-2">
        <div
          className={`h-4 ${
            progress > 70
              ? "bg-green-700"
              : progress > 60
              ? "bg-orange-400"
              : "bg-blue-600"
          } text-center text-[12px] transition-all duration-500 ease-in-out`}
          style={{ width: `${progress}%` }}
        >
          <span className="text-white">{`${progress}%`}</span>
        </div>
      </div>
      <div className="m-4">
        <input
          type="text"
          value={progress}
          onChange={(e) => setValue(Number(e.target.value))}
          placeholder="Enter value (0–100)"
          className="border border-gray-400 rounded px-3 py-2 w-48 text-center focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
    </div>
  );
};

export default InteractiveProgressBar;
