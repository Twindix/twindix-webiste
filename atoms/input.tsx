import React from "react";

export const Input: React.FC<{
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    type?: React.HTMLInputTypeAttribute;
    as?: "input" | "textarea";
}> = ({
    as = "input",
    label,
    name,
    placeholder,
    required,
    type = "text",
}) => (
    <label className="flex flex-col gap-2 text-sm lg:text-base text-black/80">
        <span className="font-medium">
            {label}
            {" "}
            {required ? "*" : null}
        </span>
        {as === "textarea" ? (
            <textarea
                className="min-h-[110px] rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
                name={name}
                placeholder={placeholder}
                required={required}
            />
        ) : (
            <input
                className="h-10 rounded-lg border border-black/10 bg-white px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
                name={name}
                placeholder={placeholder}
                required={required}
                type={type}
            />
        )}
    </label>
);
