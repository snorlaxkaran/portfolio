import React from "react";

const Twitter = () => {
  return (
    <div
      className="flex aspect-square cursor-pointer items-center justify-center rounded-full bg-black/10 dark:bg-white/10 p-3"
      style={{ width: "40px" }}
    >
      <a href="https://x.com/sandip_dev_07">
        <svg viewBox="0 0 24 24" className="size-full">
          <path
            fill="currentColor"
            d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Twitter;
