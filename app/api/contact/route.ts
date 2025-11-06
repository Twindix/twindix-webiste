import { NextResponse } from "next/server";

import { portalBaseUrl } from "@/data";

export const runtime = "nodejs";

export const dynamic = "force-dynamic";

export const POST = async (req: Request) => {
    const payload = await req.json();

    const res = await fetch(
        `${portalBaseUrl}/contact`,
        {
            body: JSON.stringify(payload),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
        },
    );

    const data = await res.json()["catch"](() => ({}));

    return NextResponse.json(
        data,
        { status: res.status },
    );
};
