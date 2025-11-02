import { Button, Card, Input } from "@/atoms";

import { Social } from "./social";

export const ContactUs = () => (
    <Card className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 justify-between items-center">
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-4 lg:gap-8">
            <div>
                <h2 className="font-semibold text-3xl lg:text-5xl text-gradient1">Contact Us</h2>
                <p className="mt-2 lg:mt-4 font-medium text-sm lg:text-lg text-foreground">We are here to help you! Contact us through any of the following methods.</p>
            </div>
            <form className="flex flex-col gap-4 lg:w-3/4">
                <Input
                    label="Name"
                    name="name"
                    placeholder="Write your name here"
                />
                <Input
                    label="E-mail"
                    name="email"
                    placeholder="exM29026753@gmail.com"
                    type="email"
                    required
                />
                <Input
                    as="textarea"
                    label="Message"
                    name="message"
                    placeholder="Write your message here Write your message here"
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                >
                    Submit
                </Button>
            </form>
        </div>
        <div className="col-span-1 lg:col-span-5 m-auto flex flex-col gap-4 lg:gap-8">
            <div>
                <h3 className="font-semibold text-xl lg:text-3xl text-gradient1">Follow Us on Social Media</h3>
                <p className="mt-2 font-medium text-sm lg:text-lg text-black/60">Stay updated with the latest insights and resources by connecting with us on social media.</p>
            </div>
            <Social />
        </div>
    </Card>
);
