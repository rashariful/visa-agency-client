import React, { useEffect, useState } from "react";

const ProgressBar = ({ initialValue, increment, endValue, label }) => {
  const [progress, setProgress] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < endValue) {
          return Math.min(prevProgress + increment, endValue);
        } else {
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, 1000); // Increase the progress every second

    return () => {
      clearInterval(interval);
    };
  }, [increment, endValue]);

  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-[#0067ed1c]">
            {label}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-primary">
            {progress}%
          </span>
        </div>
      </div>
      <div className="flex h-2 mb-4 overflow-hidden text-xs bg-[#0067ed3e] rounded-md">
        <div
          style={{ width: `${progress}%`, transition: "width 0.5s ease-in-out" }}
          className="flex flex-col justify-center shadow-none whitespace-nowrap text-white rounded-full bg-primary"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
