"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative bottom-0 right-0 w-10 align-baseline h-30">
          <GoArrowUpRight height={30} width={30} alt="right icon" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
