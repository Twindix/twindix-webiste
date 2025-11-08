import { ReactNode } from "react";

export const RichText = ({ text }: { text: string }) => {
    const colorClass: Record<string, string> = {
        blue500: "text-blue-500",
        danger: "text-red-800",
        foreground: "text-foreground",
        primary: "text-primary",
    };

    const pattern = /\[\[br\]\]|\[\[c:([#a-zA-Z0-9-]+)\]\]([\s\S]*?)\[\[\/c\]\]|\[\[b\]\]([\s\S]*?)\[\[\/b\]\]/g;

    const output: ReactNode[] = [];

    let lastIndex = 0;

    let currentMatch: RegExpExecArray | null;

    while ((currentMatch = pattern.exec(text)) !== null) { // eslint-disable-line
        if (currentMatch.index > lastIndex) {
            output.push(text.slice(
                lastIndex,
                currentMatch.index,
            ));
        }

        if (currentMatch[0] === "[[br]]") output.push(<br key={output.length} />);
        else if (currentMatch[1] !== undefined) {
            const token = currentMatch[1];

            const inner = currentMatch[2];

            if (token.startsWith("#")) {
                output.push(
                    <span
                        key={output.length}
                        style={{ color: token }}
                    >
                        {inner}
                    </span>,
                );
            } else {
                const cls = colorClass[token] ?? "text-inherit";

                output.push(
                    <span
                        className={cls}
                        key={output.length}
                    >
                        {inner}
                    </span>,
                );
            }
        } else if (currentMatch[3] !== undefined) {
            const inner = currentMatch[3];

            output.push(
                <strong
                    className="font-bold text-black"
                    key={output.length}
                >
                    {inner}
                </strong>,
            );
        }

        lastIndex = pattern.lastIndex;
    }

    if (lastIndex < text.length) output.push(text.slice(lastIndex));

    return output;
};
