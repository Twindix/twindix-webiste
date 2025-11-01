import clsx, { ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export const generateValidClassNameHandler = (...inputs: ClassValue[]) => {
    const merged = twMerge(clsx(inputs));

    return merged === "" ? undefined : merged;
};

export const convertHexToRgbHandler = (hexColor: string) => {
    const hexCode = hexColor.replace(
        "#",
        "",
    );
    const rgbCode = hexCode.length === 3 ? hexCode.split("").map((c) => c + c).join("") : hexCode;
    const n = parseInt(
        rgbCode,
        16,
    );
    return {
        b: n & 255, // eslint-disable-line
        g: (n >> 8) & 255, // eslint-disable-line
        r: (n >> 16) & 255, // eslint-disable-line
    };
};

export const convertRgbToCssHandler = (r: number, g: number, b: number) => `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

export const generateGradientTextHandler = (
    text: string,
    blackChars: number,
): React.ReactNode[] => {
    const startColor = "#000000";

    const endColor = "#0065FF";

    const s = convertHexToRgbHandler(startColor);

    const e = convertHexToRgbHandler(endColor);

    const chars = Array.from(text);

    const total = chars.length;

    const blackUntil = Math.min(
        Math.max(
            blackChars,
            0,
        ),
        total,
    );
    const blendCount = Math.max(
        total - blackUntil,
        0,
    );

    const output: React.ReactNode[] = [];

    for (let i = 0; i < total; i += 1) {
        const ch = chars[i];

        let color = startColor;

        if (i < blackUntil) color = startColor;
        else if (blendCount > 0) {
            const ratio = (i - blackUntil + 1) / blendCount;

            const r = s.r + (e.r - s.r) * ratio;

            const g = s.g + (e.g - s.g) * ratio;

            const b = s.b + (e.b - s.b) * ratio;

            color = convertRgbToCssHandler(
                r,
                g,
                b,
            );
        }

        output.push(
            <span
                key={`ch-${i}`}
                style={{ color }}
            >
                {ch}
            </span>,
        );
    }

    return output;
};
