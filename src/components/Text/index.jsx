import React from "react";

const sizeClasses = {
  txtInterLight25: "font-inter font-light",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtInterMedium30: "font-inter font-medium",
  txtInterMedium20: "font-inter font-medium",
  txtPoppinsLight18: "font-light font-poppins",
  txtInterLight20: "font-inter font-light",
  txtPoppinsMedium30: "font-medium font-poppins",
  txtPoppinsSemiBold60: "font-poppins font-semibold",
  txtInterMedium14: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
