import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`
        w-full 
        mx-auto 
        
        px-4 
        sm:px-6 
        md:px-8 
        lg:px-10 
        xl:px-12 
        
        max-w-full
        sm:max-w-[640px]
        md:max-w-[768px]
        lg:max-w-[1024px]
        xl:max-w-[1280px]
        2xl:max-w-[1400px]

        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
