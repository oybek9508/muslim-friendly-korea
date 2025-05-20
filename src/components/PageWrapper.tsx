import React, { ReactNode } from "react";

type PageWrapperPropTypes = {
  children: ReactNode;
  scroll?: boolean;
};
const PageWrapper = ({ children, scroll = true }: PageWrapperPropTypes) => {
  return (
    <div
      className={`flex flex-col min-h-screen 
        ${scroll ? "overflow-y-auto" : "overflow-hidden"}
      `}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
