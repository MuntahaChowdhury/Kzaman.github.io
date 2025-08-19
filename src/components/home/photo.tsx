"use client"

import Image from "next/image"

export default function Photo() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 min-h-40 gap-4 px-4 md:px-6 lg:px-16 xl:px-24 rise mt-10">
            <div className="relative w-full h-[50vh] md:h-auto col-span-1">
                <Image
                    src="/images/pfp.jpg"
                    alt="Picture"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="col-span-2 min-h-40 md:pl-6 flex flex-col space-y-4">
                <h1 className="text-4xl text-headers font-head font-bold">About Me</h1>
                <div> Passionate about delivering innovative solutions, I combine years of experience in [industry/field] with a commitment to excellence and continuous growth. I thrive on solving complex challenges and helping teams succeed</div>
                <q> Turning challenges into profitable opportunities. </q>
                <div>
                    <h1 className="font-bold text-lg">Focus Areas</h1>
                    <ul className="pl-8">
                        <li>Software Engineering</li>
                        <li>Database Development</li>
                        <li>Project Management</li>
                        <li>Cloud Computing (AWS, Azure, GCP)</li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-2 mt-8">
                    <button className="bg-buttons p-2 text-background rounded-3xl w-full md:w-80 hover:brightness-80 cursor-pointer">Download Resume</button>
                    <button className="bg-cards p-2 rounded-3xl w-full md:w-80 hover:brightness-80 cursor-pointer">View Projects</button>
                    <button className="bg-cta p-2 rounded-3xl w-full md:w-80 hover:brightness-80 cursor-pointer">Learn More</button>
                </div>
            </div>
        </section>
    )
}