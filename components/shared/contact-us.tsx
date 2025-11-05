import { Button, Card, Input } from "@/atoms";

import { Social } from "./social";

export const ContactUs = () => (
    <Card className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-12 justify-between items-center">
        <div
            className="col-span-1 lg:col-span-7 flex flex-col gap-4 lg:gap-8"
            id="contact_us"
        >
            <div>
                <h2 className="text-gradient1">Contact Us</h2>
                <p>We are here to help you! Contact us through any of the following methods.</p>
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
                    className="w-full"
                    type="submit"
                    variant="contained"
                >
                    Submit
                </Button>
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
