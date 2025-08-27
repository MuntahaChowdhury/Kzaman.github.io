"use client"

import Image from "next/image"

export default function Vision() {
    return (
        <section className="px-16 mb-2">
            <h2 className="text-3xl font-bold mb-4">Vision For The Future</h2>
            <div className="grid grid-cols-[2fr_1fr] gap-15">
                <p className="text-md leading-relaxed">
                    Looking ahead, I am eager to continue growing both personally and professionally.
                    I aim to take on challenges that push me to innovate, learn, and collaborate across
                    diverse teams and projects. By combining creativity with technical expertise, I hope
                    to contribute solutions that make a meaningful impact. Ultimately, my vision is to keep
                    evolving as a professional while helping organizations and communities thrive in an
                    ever-changing world.
                </p>
                <div className="w-full -translate-y-20 -translate-x-5 hue-rotate-310">
                    <Image
                        src={'/images/about/vision.jpg'}
                        alt=""
                        width={800}
                        height={800}
                    />
                </div>
            </div>
        </section>
    )
}