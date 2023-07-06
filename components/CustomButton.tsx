"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
    title,
    btnType,
    containerStyles,
    textStyles,
    handleClick,
    rightIcon,
}: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            {/* title */}
            <span className={`flex-1 ${textStyles}`}>{title}</span>

            {/* right icon */}
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="Right icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    );
};

export default CustomButton;
