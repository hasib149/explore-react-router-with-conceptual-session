import React from "react";
import { DotLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center mt-[200px]">
      <DotLoader></DotLoader>
    </div>
  );
};

export default LoadingSpinner;
