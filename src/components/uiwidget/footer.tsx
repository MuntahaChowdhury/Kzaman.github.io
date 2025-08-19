"use client"
import { FacebookLogoIcon, LinkedinLogoIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="bg-[#333333]">

            <section className="p-5 md:pr-14 md:pl-10 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-0 text-[#e3e0e0]">
                <div className="text-3xl tracking-wide font-bold flex md:items-center">
                    <Image
                        src={'/images/trlogo.png'}
                        alt="logo"
                        width={50}
                        height={50}
                        className="w-auto h-3/4"
                    />
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <q className="font-scripty text-sm md:text-lg">
                        A quote here to fill the space and make it comforting and personal.
                    </q>
                    <cite className="text-xs italic brightness-90">- First Name, Last</cite>
                </div>
                <div className="flex flex-col items-end col-span-2 md:col-span-1 mt-4 md:mt-0 ">
                    <div className="flex space-x-2 text-xs mt-1">
                        <p className="font-bold font-serif">Email:</p>
                        <a href="mailto:engrmkchow@gmail.com">engrmkchow@gmail.com</a>
                    </div>
                    <div className="flex space-x-2 text-xs mt-1">
                        <p className="font-bold font-serif">Phone:</p>
                        <a href="tel:+16393187855">+1 (639) 318-7855</a>
                    </div>
                    <div className="flex space-x-2 text-xs mt-1">
                        <p className="font-bold font-serif">Location:</p>
                        <p>Saskatoon, Saskatchewan</p>
                    </div>
                    <div className="flex space-x-2 text-xs mt-1">
                        <p className="font-bold font-serif">Download:</p>
                        <p className="underline cursor-pointer underline-offset-2 hover:brightness-80 duration-300">Resume</p>
                    </div>
                    <div className="flex gap-2 mt-3">
                        <button onClick={() => window.location.href = "www.facebook.com"}><FacebookLogoIcon size={20} className="hover:text-white text-gray-400 cursor-pointer duration-300" /></button>
                        <button onClick={() => window.location.href = "www.x.com"}>       <XLogoIcon size={20} className="hover:text-white text-gray-400 cursor-pointer duration-300" /></button>
                        <button onClick={() => window.location.href = "www.youtube.com"}> <YoutubeLogoIcon size={20} className="hover:text-white text-gray-400 cursor-pointer duration-300" /></button>
                        <button onClick={() => window.location.href = "www.linked.com"}>  <LinkedinLogoIcon size={20} className="hover:text-white text-gray-400 cursor-pointer duration-300" /></button>
                    </div>
                </div>
            </section>

            <section className="bg-black/30 text-center text-blue-100 text-xs p-1">
                Copyright 2025 | MKC. All rights reserved
            </section>
        </footer >
    )
}