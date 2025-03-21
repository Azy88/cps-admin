import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "add" | "delete" | "save";
  icon?: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ variant, icon, children, className, ...props }) => {
  const getButtonClasses = () => {
    switch (variant) {
      case "add":
        return "text-primary border  hover:bg-primary hover:text-white";
      case "delete":
        return "text-meta-1 border border-meta-1 hover:bg-meta-1 hover:text-white";
        case "save":
          return "bg-green-500 text-white  hover:bg-green-600 active:bg-green-700";
        
      default:
        return "text-white  hover:bg-gray-200";
    }
  };

  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded transition duration-200 text-md  ${getButtonClasses()} ${className}`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
