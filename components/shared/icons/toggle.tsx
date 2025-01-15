"use client";

import * as React from "react";
import { useTheme } from "next-themes";

const Toggle = () => {
  const { setTheme, resolvedTheme } = useTheme(); // Use `resolvedTheme` for a more reliable current theme value
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  if (!mounted) return null; // Avoid rendering until the component is mounted

  return (
    <div
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full bg-black/10 dark:bg-white/10"
      style={{ width: "40px" }}
    >
      <button
        className="size-full rounded-full flex items-center justify-center p-3"
        onClick={toggleTheme}
      >
        {resolvedTheme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
