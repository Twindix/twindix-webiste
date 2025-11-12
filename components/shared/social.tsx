// components/brand.tsx
import Image from "next/image";
import Link from "next/link";

import facebook from "@/app/assets/icons/facebook.svg";
import instagram from "@/app/assets/icons/instagram.svg";
import linkedIn from "@/app/assets/icons/linkedIn.svg";
import x from "@/app/assets/icons/x.svg";

export const Social = () => (
    <div className="flex items-center gap-1">
        <Link
            aria-label="LinkedIn"
            href="https://www.linkedin.com/company/twindix-official/posts/?feedView=all"
            rel="noopener noreferrer"
            target="_blank"
        >
            <Image
                alt="linkedIn"
                src={linkedIn}
            />
        </Link>
        <Link
            aria-label="X"
            href="https://x.com/TwindixOfficial"
            rel="noopener noreferrer"
            target="_blank"
        >
            <Image
                alt="x"
                src={x}
            />
        </Link>
        <Link
            aria-label="Instagram"
            href="https://www.instagram.com/twindixofficial/"
            rel="noopener noreferrer"
            target="_blank"
        >
            <Image
                alt="instagram"
                src={instagram}
            />
        </Link>
        <Link
            aria-label="Facebook"
            href="https://www.facebook.com/TwindixOfficial?locale=ar_AR"
            rel="noopener noreferrer"
            target="_blank"
        >
            <Image
                alt="facebook"
                src={facebook}
            />
        </Link>
    </div>
);
