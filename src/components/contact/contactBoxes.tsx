"use client"
import { EnvelopeOpenIcon, FacebookLogoIcon, LinkedinLogoIcon, PhoneCallIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react"

export default function ContactBoxes() {
    return (
        <section className="grid grid-cols-2 md:grid-cols-5 my-3 w-fit gap-8 mx-auto -translate-y-[30px] md:-translate-y-1/3 px-5 md:px-0 text-[#e3e0e0]">
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
        </section>
    )
}