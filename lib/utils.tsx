import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const generateValidClassNameHandler = (...classes: ClassValue[]) => {
    const mergedClasses = twMerge(clsx(classes));

    return mergedClasses === "" ? undefined : mergedClasses;
};
