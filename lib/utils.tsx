import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { routeUrlsData } from "@/data";

export const generateValidClassNameHandler = (...classes: ClassValue[]) => {
    const mergedClasses = twMerge(clsx(classes));

    return mergedClasses === "" ? undefined : mergedClasses;
};

export const scrollToHomeTargetHandler = (targetId: string, router?: { push: (route: string) => void}) => { // eslint-disable-line
    const targetElement = document.getElementById(targetId);

    if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
    else router?.push(`${routeUrlsData.home}#${targetId}`);
};
