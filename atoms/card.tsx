import { ReactNode } from "react";

export const Card = ({
    children,
    className,
} : {
    children: ReactNode,
    className?: string,
}) => (
    <div className={`w-full bg-white rounded-3xl p-4 lg:p-8 ${className || ""}`}>
        {children}
    </div>
);
