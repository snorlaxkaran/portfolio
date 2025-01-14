import React from "react";

const Linkedin = () => {
  return (
    <div
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full bg-black/10 dark:bg-white/10 p-3"
      style={{ width: "40px" }}
    >
      <a href="https://www.linkedin.com/in/sarkar-sandip/">
        <svg viewBox="0 0 24 24" className="size-full">
          <path
            fill="currentColor"
            d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.88-1.32 2.34-2.5 4-2.5 2.21 0 4 1.79 4 4v7z"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Linkedin;
