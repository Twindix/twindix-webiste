import { ReactNode } from "react";

export const Card = ({
    children,
    className,
} : {
    children: ReactNode,
    className?: string,
}) => (
    <div className={`w-full bg-white rounded-3xl p-3 lg:p-6 ${className || ""}`}>
        {children}
    </div>
);
