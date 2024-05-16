import React from "react";
import { FaUserDoctor } from "react-icons/fa6";

const SvgComponent = ({ w, h, stroke }) => {
  return (
    <svg
    width={w}
    height={h}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={1.5}
    stroke={stroke}
    className="h-6 w-6"
    viewBox="0 0 40 40" // Adjust the viewBox to increase the size
  >
    {/* SVG paths for "FaUserDoctor" */}
    <FaUserDoctor size={40}/>
  </svg>
  );
};

export default SvgComponent;
