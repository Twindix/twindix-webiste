import { ReactNode } from "react";

import { generateValidClassNameHandler } from "@/lib/utils";

export const Button = ({
    children,
    className,
    onClick,
    variant,
} : {
    className?: string,
    onClick?: () => void,
    children: ReactNode,
    variant: "contained" | "outlined",
}) => (
    <button
        className={generateValidClassNameHandler(
            "rounded-full border px-2 lg:px-4 xl:px-8 py-2 text-xs xl:text-sm font-medium cursor-pointer",
            variant === "contained" && "border-primary bg-primary text-white",
            variant === "outlined" && "border-primary text-primary hover:bg-blue-50",
            className,
        )}
        onClick={onClick}
    >
        {children}
    </button>
);
