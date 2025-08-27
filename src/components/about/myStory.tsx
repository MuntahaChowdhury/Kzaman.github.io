"use client"

import Image from "next/image"

export default function MyStory() {
    return (
        <section className="relative grid grid-cols-[1.5fr_1fr] px-16 mb-16">
            <div className="leading-relaxed pr-18 text-justify">
                <h2 className="text-3xl font-bold mb-4 mb-4">My Story</h2>
                <p className="mb-4">
                    I am an experienced business leader with a proven track record in strategy, operations, and organizational growth. Over the course of my career, I’ve
                    held senior leadership roles where I focused on driving performance, building strong teams, and guiding companies through periods of change and expansion.
                </p>
                <p className="mb-4">
                    My strengths include developing long-term business strategies, improving efficiency, and fostering collaboration across departments. I enjoy
                    mentoring professionals, streamlining processes, and identifying opportunities for innovation that create lasting value.
                </p>
                <p className="mb-4">
                    Outside of work, I am passionate about continuous learning, building strong community relationships, and sharing my knowledge and experience with the
                    next generation of leaders.
                </p>
            </div>

            <div className="relative">
                <div className="absolute top-0 left-0 brightness">
                    <Image
                        src="/images/about/pfpbg.jpg"
                        alt="Profile background"
                        width={400}
                        height={400}
                        className="dark:hidden brightness-90"
                    />

                    <Image
                        src="/images/about/pfpbg_dark.jpg"
                        alt="Profile background dark"
                        width={400}
                        height={400}
                        className="hidden dark:block brightness-90"
                    />

                </div>
                <div className="h-[70vh]">
                    <Image
                        src="/images/pfp.jpg"
                        alt="Picture"
                        width={270}
                        height={270}
                        className="object-cover mx-auto h-full -translate-y-4 -translate-x-6
                                           outline-2 outline-offset-3 outline-foreground"
                    />
                </div>
            </div>
        </section>
    )
}