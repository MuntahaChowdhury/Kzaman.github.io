"use client"

export default function SendMessageBox() {
    return (
        <form className="flex flex-col gap-4 text-foreground p-10">
            <h1 className="text-4xl !font-normal !text-foreground mb-2">Send Me a Message </h1>
            <div className="flex gap-2 w-full">
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    className="bg-cards text-black p-2 text-sm w-full"
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="bg-cards text-black p-2 text-sm w-full"
                />
            </div>
            <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
                className="bg-cards text-black p-2 text-sm"
            />
            <textarea
                id="mesage"
                name="mesage"
                placeholder="Your message here"
                rows={6}
                required
                className="bg-cards text-black p-2 text-sm italic"
            />
        </form>
    )
}