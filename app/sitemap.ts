import type { MetadataRoute } from "next";

import { publicUrl } from "@/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = ["", "/about", "/prize", "/whats-twindix", "/how-assessment-works", "/representatives-and-franchises"].map((path) => ({
        lastModified: new Date(),
        url: `${publicUrl}${path}`,
    }));

    return routes;
}
