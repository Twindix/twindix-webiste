import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const generateValidClassNameHandler = (...inputs: ClassValue[]) => {
    const merged = twMerge(clsx(inputs));

    return merged === "" ? undefined : merged;
};
