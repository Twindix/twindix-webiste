// components/brand.tsx
import Link from "next/link";

export const Social = () => (
    <div className="flex items-center gap-2">
        <Link
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center rounded-full border-5 border-foreground p-2 hover:bg-foreground hover:text-white transition"
            href="https://linkedin.com"
        >
            <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.84-2.05 3.79-2.05C20 8.65 21 11 21 14.47V21h-4v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21H9z" />
            </svg>
        </Link>
        <Link
            aria-label="X"
            className="inline-flex items-center justify-center rounded-full border-5 border-foreground p-2 hover:bg-foreground hover:text-white transition"
            href="https://x.com"
        >
            <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M18.9 2H22l-7.8 8.9L22.7 22H16l-5-6.5L5 22H2l8.4-9.6L1.6 2H8l4.6 6L18.9 2z" />
            </svg>
        </Link>
        <Link
            aria-label="Instagram"
            className="inline-flex items-center justify-center rounded-full border-5 border-foreground p-2 hover:bg-foreground hover:text-white transition"
            href="https://instagram.com"
        >
            <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.5 1 .4.4.8.9 1 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-1 1.5-.4.4-.9.8-1.5 1-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.5-1-.4-.4-.8-.9-1-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 1-1.5.4-.4.9-.8 1.5-1 .5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.2 0-3.5 0-4.7.1-1.1.1-1.7.3-2.1.5-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.4-.4 1-.5 2.1-.1 1.2-.1 1.5-.1 4.7s0 3.5.1 4.7c.1 1.1.3 1.7.5 2.1.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.2 1 .4 2.1.5 1.2.1 1.5.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.3 2.1-.5.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.4.4-1 .5-2.1.1-1.2.1-1.5.1-4.7s0-3.5-.1-4.7c-.1-1.1-.3-1.7-.5-2.1-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.2-1-.4-2.1-.5-1.2-.1-1.5-.1-4.7-.1m0 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 1.8a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4M18.5 6a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6z" />
            </svg>
        </Link>
        <Link
            aria-label="Facebook"
            className="inline-flex items-center justify-center rounded-full border-5 border-foreground p-2 hover:bg-foreground hover:text-white transition"
            href="https://facebook.com"
        >
            <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.3-2 2-2H17V2.1C16.7 2 15.6 2 14.4 2 11.9 2 10 3.7 10 7v3H7v4h3v8h3z" />
            </svg>
        </Link>
    </div>
);
