"use client"

import Image from "next/image"


export default function PageHead({ text }: { text: string }) {
    return (
        <section className="relative rise">
            <h1 className="relative top-0 left-0 text-5xl text-left pt-24 pb-16 px-16">{text}</h1>
            <div className="absolute -top-10 -z-80 -right-15 rotate-115 opacity-20 dark:invert-94">
                <Image
                    src={'/images/hero3.jpg'}
                    alt=""
                    width={700}
                    height={700}
                    className=""
                />
            </div>
        </section>

    )
}