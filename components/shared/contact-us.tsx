"use client";

import React, { useState } from "react";

import { Button, Card, Input } from "@/atoms";
import { portalBaseUrl } from "@/data";
import { generateValidClassNameHandler } from "@/lib/utils";

import { Social } from "./social";

export const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const [message, setMessage] = useState<string | null>(null);

    const submitFormHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLoading) return;

        const form = e.currentTarget;

        if (!form.checkValidity()) {
            setStatus("error");

            setMessage("Please fill in all required fields.");

            form.reportValidity();

            return;
        }

        const formData = new FormData(form);

        const payload = Object.fromEntries(formData.entries());

        try {
            setIsLoading(true);

            setStatus("idle");

            setMessage(null);

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

            if (!res.ok) {
                setStatus("error");

                setMessage(data?.error ?? "Something went wrong. Please try again.");

                return;
            }

            setStatus("success");

            setMessage(data?.message ?? "Thanks! Your message has been sent.");

            form.reset();
        } catch {
            setStatus("error");

            setMessage("Network error. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 justify-between items-center">
            <div
                className="col-span-1 lg:col-span-7 flex flex-col gap-4 lg:gap-8"
                id="contact_us"
            >
                <div>
                    <h2 className="text-gradient1">Contact Us</h2>
                    <p>We are here to help you! Contact us through any of the following methods.</p>
                </div>
                <form
                    className="flex flex-col gap-4 lg:w-3/4"
                    noValidate
                    onSubmit={submitFormHandler}
                >
                    <Input
                        label="Name"
                        name="name"
                        placeholder="Write your name here"
                        required
                    />
                    <Input
                        label="E-mail"
                        name="email"
                        placeholder="example@gmail.com"
                        type="email"
                        required
                    />
                    <Input
                        as="textarea"
                        label="Message"
                        name="message"
                        placeholder="Write your message here"
                        rows={5}
                        required
                    />
                    <Button
                        aria-busy={isLoading}
                        className="w-full"
                        disabled={isLoading}
                        type="submit"
                        variant="contained"
                    >
                        {isLoading ? "Sending…" : "Submit"}
                    </Button>
                    {status !== "idle" && message && (
                        <div
                            role="status"
                            className={generateValidClassNameHandler(
                                "rounded-lg border p-2 text-sm",
                                status === "success" ? "border-green-200 bg-green-50 text-green-800" : "border-red-200 bg-red-50 text-red-800",
                            )}
                        >
                            {message}
                        </div>
                    )}
                </form>
            </div>
            <div className="col-span-1 lg:col-span-5 m-auto flex flex-col gap-4 lg:gap-8">
                <div>
                    <h3 className="text-gradient1">Follow Us on Social Media</h3>
                    <p>Stay updated with the latest insights and resources by connecting with us on social media.</p>
                </div>
                <Social />
            </div>
        </Card>
    );
};
