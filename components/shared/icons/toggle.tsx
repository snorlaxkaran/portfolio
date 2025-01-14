"use client";

import * as React from "react";

import { useTheme } from "next-themes";

const Toggle = () => {
  const { theme, setTheme } = useTheme(); // Destructure `theme` to know the current theme

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light"); // Toggle between "light" and "dark"
  };

  return (
    <div
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full bg-black/10 dark:bg-white/10"
      style={{ width: "40px" }}
    >
      <button
        className="size-full rounded-full flex items-center justify-center p-3"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-sun"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-moon"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default Toggle;
