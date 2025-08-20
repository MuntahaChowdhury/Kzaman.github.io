"use client"

import { EnvelopeOpenIcon, FacebookLogoIcon, LinkedinLogoIcon, PhoneCallIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react"

export default function ContactPage() {
    return (
        <div className="pb-10 min-h-screen">

            {/* Top bg title */}
            <div className="relative bg-[url('/images/contact/bg.jpg')] bg-cover bg-center h-[40vh] brightness-65">
                <h1 className="absolute z-10 top-[20vh] left-0 font-head text-5xl pl-10 text-white">Let&apos;s Connect</h1>
            </div>

            {/* Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-5 my-3 w-fit gap-8 mx-auto -translate-y-[30px] md:-translate-y-1/3 px-5 md:px-0 text-[#e3e0e0]">
                <div className="order-last md:order-first"></div>
                <div className="p-4 w-40 md:w-52 bg-[#333333] text-xs md:text-md flex flex-col items-center justify-start space-y-3">
                    <EnvelopeOpenIcon weight="fill" color="#C2BCBC" size={40} />
                    <p className="text-center">engrmkchow@gmail.com</p>
                </div>
                <div className="p-4 w-40 md:w-52 bg-[#333333] text-xs md:text-md flex flex-col items-center justify-start space-y-3">
                    <PhoneCallIcon weight="fill" color="#C2BCBC" size={40} />
                    <p className="text-center">+1 (639) 318-7855</p>
                </div>
                <div className="p-4 w-40 md:w-52 bg-[#333333] text-xs md:text-md flex flex-col items-center justify-start space-y-3">
                    <LinkedinLogoIcon weight="fill" color="#C2BCBC" size={40} />
                    <p className="text-center">linkedin.com/ md-kzaman-chowdhury</p>
                </div>
                <div className="pl-4 w-52 flex flex-col justify-start md:justify-end space-y-3">
                    <h2 className="text-lg font-bold text-foreground">Socials</h2>
                    <div className="flex gap-3">
                        <button onClick={() => window.location.href = "www.facebook.com"}><FacebookLogoIcon size={35} weight='fill' className="hover:text-[#575757] text-foreground cursor-pointer duration-300" /></button>
                        <button onClick={() => window.location.href = "www.x.com"}>       <XLogoIcon size={35} weight='fill' className="hover:text-[#575757] text-foreground cursor-pointer duration-300" /></button>
                        <button onClick={() => window.location.href = "www.youtube.com"}> <YoutubeLogoIcon size={35} weight='fill' className="hover:text-[#575757] text-foreground cursor-pointer duration-300" /></button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 px-10">
                {/* Form */}
                <form className="flex flex-col gap-4 text-foreground bg-background brightness-90 p-10 pt-8 border-4 border-foreground shadow-2xl">
                    <h1 className="text-4xl font-head mb-2">Send Me a Message </h1>
                    <div className="flex gap-2 w-full">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                            className="bg-white text-black p-2 text-sm w-full"
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="bg-white text-black p-2 text-sm w-full"
                        />
                    </div>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        required
                        className="bg-white text-black p-2 text-sm"
                    />
                    <textarea
                        id="mesage"
                        name="mesage"
                        placeholder="Your message here"
                        rows={6}
                        required
                        className="bg-white text-black p-2 text-sm italic"
                    />
                </form>


                {/* Resume */}
                <section className="grid grid-rows-2 gap-6 order-first md:order-last">
                    <div className="flex flex-col justify-end items-end">
                        <p className="font-scripty text-4xl font-bold text-headers">Want to View the Resume?</p>
                        <p className="text-sm font-extralight text-foreground opacity-70"> Always up to date with my latest work and experiences. </p>
                    </div>
                    <div className="flex gap-2 justify-end items-start gap-4">
                        <a href="/pdf/resume.pdf" target="_blank" rel="noopener noreferrer" >
                            <button className="cursor-pointer bg-cta  text-lg rounded-3xl py-2 px-8 h-fit">
                                View in Browser
                            </button>
                        </a>
                        <a href="/pdf/resume.pdf" download>
                            <button className="cursor-pointer bg-[#333333] text-[#e3e0e0] text-lg rounded-3xl py-2 px-8 h-fit">Download PDF</button>
                        </a>
                    </div>
                </section>
            </div >


        </div >
    )
}