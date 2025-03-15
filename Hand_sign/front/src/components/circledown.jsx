"use client";

import { motion, useAnimation } from "motion/react";

const defaultTransition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
  loop: Infinity, // Add this to make the animation loop
  repeatType: "reverse", // This will make the animation alternate back and forth
};

const CircleChevronDown = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        userSelect: "none",
        cursor: "pointer",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
        <motion.path
          variants={{
            normal: { translateY: "0%" },
            animate: { translateY: "2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m16 10-4 4-4-4"
        />
      </svg>
    </div>
  );
};

export { CircleChevronDown };
