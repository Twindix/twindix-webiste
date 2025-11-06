import type { MetadataRoute } from "next";

import { publicUrl } from "@/data";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [{
            allow: "/",
            userAgent: "*",
        }],
        sitemap: `${publicUrl}/sitemap.xml`,
    };
}
