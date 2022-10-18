import React from "react";
import { BsCheck } from "react-icons/bs";
const Check = ({ isCompleted }) => {
  return (
    <div
      className={`border-2 mr-5 w-6 h-6 rounded-lg items-center flex border-blue-500 ${
        isCompleted ? "bg-blue-600" : ""
      }`}
    >
      {true && <BsCheck size={33} className="text-gray-400 " />}
    </div>
  );
};

export default Check;
