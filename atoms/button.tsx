import Image from "next/image";
import { ReactNode } from "react";

import multipleArrows from "@/app/assets/icons/multiple_arrows.svg";
import multipleArrowsWhite from "@/app/assets/icons/multiple_arrows_white.svg";
import { generateValidClassNameHandler } from "@/lib/utils";

export const Button = ({
    ariaLabel,
    children,
    className,
    disabled,
    isMini,
    onClick,
    type,
    variant,
    withArrowsIcon,
} : {
    type?: "button" | "submit" | "reset",
    withArrowsIcon?: boolean,
    ariaLabel?: string,
    className?: string,
    onClick?: () => void,
    children: ReactNode,
    isMini?: boolean,
    disabled?: boolean,
    variant: "contained" | "outlined" | "link",
}) => (
    <button
        aria-label={ariaLabel || ""}
        disabled={disabled}
        type={type || "button"}
        className={generateValidClassNameHandler(
            "group rounded-full border px-2 lg:px-4 xl:px-8 text-xs lg:text-sm font-semibold cursor-pointer relative flex justify-center items-center w-fit transition duration-800",
            variant === "contained" && "border-blue-700 bg-blue-700 text-white",
            variant === "outlined" && "border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white",
            variant === "link" && "hover:underline text-blue-600 border-0 font-medium px-0! h-fit!",
            isMini ? "h-[34px]" : "h-[52px] min-w-full lg:min-w-[400px]",
            disabled && "cursor-not-allowed opacity-50",
            className,
        )}
        onClick={onClick}
    >
        {children}
        {withArrowsIcon && (
            <span className="absolute right-4 transition duration-800 flex items-center">
                <Image
                    alt="multiple_arrows"
                    className="h-4 w-auto group-hover:opacity-0 transition duration-400"
                    src={multipleArrows}
                />
                <Image
                    alt="multiple_arrows_white"
                    className="h-4 w-auto opacity-0 group-hover:opacity-100 transition duration-400"
                    src={multipleArrowsWhite}
                />
            </span>
        )}
    </button>
);
