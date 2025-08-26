"use client"

import Image from "next/image"

export default function Photo() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-40 gap-4 px-4 md:px-6 lg:px-16 xl:px-24 rise mt-40 relative py-10">

            <div className="min-h-40 md:pl-6 flex flex-col space-y-4">
                <h1 className="text-4xl">A Bit About Myself</h1>
                <div> Passionate about delivering innovative solutions, I combine years of experience in [industry/field] with a commitment to excellence and continuous growth. I thrive on solving complex challenges and helping teams succeed</div>
                <q> Turning challenges into profitable opportunities. </q>
                <div>
                    <h2 className="text-lg text-headers font-bold">Focus Areas</h2>
                    <ul className="pl-8">
                        <li>Software Engineering</li>
                        <li>Database Development</li>
                        <li>Project Management</li>
                        <li>Cloud Computing (AWS, Azure, GCP)</li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-8">
                    <button className="bg-buttons p-2 text-background rounded-3xl w-full hover:brightness-80 cursor-pointer">Download Resume</button>
                    <button className="bg-cards p-2 rounded-3xl w-full hover:brightness-80 cursor-pointer">View Projects</button>
                    <button className="bg-link p-2 rounded-3xl w-full hover:brightness-80 cursor-pointer">Learn More</button>
                </div>
            </div>

            <div className="w-full h-[50vh] md:h-auto col-span-1 flex items-center">
                <Image
                    src="/images/pfp.jpg"
                    alt="Picture"
                    width={270}
                    height={270}
                    className="object-cover mx-auto h-full -translate-y-8
                               shadow-[15px_15px_0px_var(--headers)] outline-2 outline-offset-3 outline-foreground"
                />
            </div>

            <div className="absolute top-30 -left-100 rotate-200 opacity-10 -z-10 dark:invert-94">
                <Image
                    src={'/images/hero2.jpg'}
                    alt=""
                    width={900}
                    height={900}
                />
            </div>
            
        </section>
    )
}