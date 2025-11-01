import Image from "next/image";
import { ReactNode } from "react";

import multipleArrows from "@/app/assets/icons/multiple_arrows.svg";
import { generateValidClassNameHandler } from "@/lib/utils";

export const Button = ({
    ariaLabel,
    children,
    className,
    onClick,
    variant,
    withArrowsIcon,
} : {
    withArrowsIcon?: boolean,
    ariaLabel?: string,
    className?: string,
    onClick?: () => void,
    children: ReactNode,
    variant: "contained" | "outlined",
}) => (
    <button
        aria-label={ariaLabel || ""}
        className={generateValidClassNameHandler(
            "rounded-full border px-2 lg:px-4 xl:px-8 py-2 text-xs xl:text-sm font-medium cursor-pointer relative",
            variant === "contained" && "border-blue-700 bg-blue-700 text-white",
            variant === "outlined" && "border-blue-700 text-blue-700 hover:bg-blue-50",
            className,
        )}
        onClick={onClick}
    >
        {children}
        {withArrowsIcon && (
            <Image
                alt="multiple_arrows"
                className="h-4 absolute right-2 lg:right-4 xl:right-8 top-1/2 -translate-y-1/2"
                src={multipleArrows}
            />
        )}
    </button>
);
