"use client"

import { GlobeIcon } from "@phosphor-icons/react"
import Image from "next/image"

export default function HeroImage() {
    return (
        <section id="banner" className="relative min-h-[90vh] rise">
            <div className="h-[100vh] flex flex-col space-y-2 items-center justify-center px-32 py-20 relative z-10">
                <h2 className="font-extrabold text-headers text-3xl w-full mt-36">Hi, I&apos;m</h2>
                <p className="text-5xl w-full capitalize font-extrabold">Mohammad Khalequzzaman <br /> Chowdhury</p>
                <p className="text-xl text-gray-400 w-full flex items-end">Welcome to my Portfolio! <GlobeIcon size={30} color="lightgray" /></p>
            </div>
            <div className="absolute -top-40 right-0 opacity-30 dark:invert-93">
                <Image
                    src={'/images/hero2.jpg'}
                    alt=""
                    width={900}
                    height={600}
                />
            </div>
        </section>
    )
}





{/* <section id="banner" className="relative altbody min-h-[90vh]">
            <div className="relative h-[100vh]">
                <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center filter brightness-40"></div>
                <div className="h-full grid grid-cols-1 grid-rows-3 justify-between relative z-10 items-center p-4">
                    <div>&nbsp;</div>
                    <div className="flex flex-col space-y-2 items-center justify-end rise p-4 text-center">
                        <h1 className="text-4xl text-white font-bold">Mohammad Khalequzzaman Chowdhury</h1>
                        <h2 className="font-scripty italic text-2xl text-gray-400"> IT Specialist & Software Engineer</h2>
                    </div>
                    <div><h2 className="text-lg text-white mt-[30vh] tracking-wide font-scripty text-center">&quot;Fancy Tagline Here That Is This Long&quot;</h2></div>
                </div>
            </div>
        </section> */}