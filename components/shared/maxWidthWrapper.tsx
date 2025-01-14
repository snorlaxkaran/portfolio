import React from "react";

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-3xl w-full mx-auto">{children}</div>;
};

export default MaxWidthWrapper;
