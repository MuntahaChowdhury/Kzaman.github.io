"use client"
import { FacebookLogoIcon, LinkedinLogoIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";


export default function ContactForm() {
    return (
        <section className="relative py-16 overflow-hidden relative-80">
            <div className="relative mx-2 md:mx-0 md:mx-auto md:w-3/4">
                <ContactInfoPart />
                <div className="p-10">
                    <h1 className="text-4xl !text-foreground !font-normal mb-2">Contact Me</h1>
                    <p className="md:w-3/5 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget bibendum leo. Ut quis convallis lectus, ac dictum nisi</p>


                    <form className="md:w-3/4 flex flex-col gap-4 mt-6 text-foreground">
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
                            rows={4}
                            required
                            className="bg-cards text-black p-2 text-sm italic"
                        />
                    </form>
                </div>
            </div>
        </section>
    )
}


function ContactInfoPart() {
    return (
        <div className="hidden md:block absolute top-1/2 right-0 translate-x-10 -translate-y-1/2 altbody px-6 py-8 z-20">
            <div>
                <h2 className="font-bold tracking-wide font-serif">Email:</h2>
                <p>engrmkchow@gmail.com</p>
            </div>
            <div className="mt-3">
                <h2 className="font-bold tracking-wide font-serif">Phone:</h2>
                <p>+1 (639) 318-7855</p>
            </div>
            <div className="mt-3">
                <h2 className="font-bold tracking-wide font-serif">Location:</h2>
                <p>Saskatoon, Saskatchewan</p>
            </div>
            <div className="flex gap-2 mt-3">
                <button onClick={() => window.location.href = "www.facebook.com"}><FacebookLogoIcon size={28} className="hover:text-white text-gray-400 cursor-pointer duration-300" /></button>
                <button onClick={() => window.location.href = "www.x.com"}>       <XLogoIcon size={28} className="hover:text-white text-gray-400 cursor-pointer duration-300" /></button>
                <button onClick={() => window.location.href = "www.youtube.com"}> <YoutubeLogoIcon size={28} className="hover:text-white text-gray-400 cursor-pointer duration-300" /></button>
                <button onClick={() => window.location.href = "www.linked.com"}>  <LinkedinLogoIcon size={28} className="hover:text-white text-gray-400 cursor-pointer duration-300" /></button>
            </div>

        </div>
    )
}



