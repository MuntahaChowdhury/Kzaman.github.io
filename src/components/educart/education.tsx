"use client"

import Image from "next/image"

export default function EducationSection() {
    return (
        <section className="pt-2 pb-20 px-4 md:pl-20 md:pr-10">
            <div className="text-5xl text-foreground font-bold font-head mb-10">
                <h2>Education</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
                <div className="grid grid-cols-1 grid-rows-auto gap-6">
                    {/* Edu 1 */}
                    <div className="bg-background brightness-90 p-4 rounded grid grid-cols-[5fr_1fr] rise">
                        <h2 className="font-bold text-lg">Master&apos;s degree, Computer Science</h2>
                        <p className="font-bold text-md text-right opacity-60">2014</p>

                        <div>
                            <p className="text-sm mb-2">Jahangirnagar University — Dhaka, Bangladesh</p>
                            <p className="text-sm text-foreground opacity-70">Highilighted courses: Database, Software Development, Algorithms and Data Analysis</p>
                            <p className="text-sm text-foreground opacity-70">Awards: Merit list, In course scholarship</p>
                            <p className="text-sm text-foreground opacity-70">Leadership roles: Name some club or organization here</p>
                            <p className="text-sm text-foreground opacity-70">Projects: Name One here <button className="bg-foreground pt-0 px-2 pb-0.5 text-xs font-head rounded-3xl cursor-pointer font-bold hover:brightness-70 duration-100 text-background">Learn more</button> or Specialization: Database & Backend Development</p>
                        </div>
                        <div className="flex justify-end items-end">
                            <Image
                                src={'/images/educert/jahangirnagar.jpg'}
                                alt="logo"
                                width={75}
                                height={75}
                                className="rounded aspect-square"
                            />
                        </div>
                    </div>

                    {/* Edu 2 */}
                    <div className="bg-background brightness-90 p-4 rounded grid grid-cols-[5fr_1fr] rise">
                        <h2 className="font-bold text-lg">Bachelor&apos;s degree, Mechanical Engineering</h2>
                        <p className="font-bold text-md text-right opacity-60">1995 - 2000</p>

                        <div>
                            <p className="text-sm mb-2">Bangladesh University of Engineering and Technology (BUET) — Dhaka, Bangladesh</p>
                            <p className="text-sm text-foreground opacity-70">Highilighted courses: Database, Software Development, Algorithms and Data Analysis</p>
                            <p className="text-sm text-foreground opacity-70">Awards: Merit list, In course scholarship</p>
                            <p className="text-sm text-foreground opacity-70">Leadership roles: Name some club or organization here</p>
                            <p className="text-sm text-foreground opacity-70">Projects: Name One here <button className="bg-foreground pt-0 px-2 pb-0.5 text-xs font-head rounded-3xl cursor-pointer font-bold hover:brightness-70 duration-100 text-background">Learn more</button> or Specialization: Database & Backend Development</p>
                        </div>
                        <div className="flex justify-end items-end">
                            <Image
                                src={'/images/educert/buet.jpg'}
                                alt="logo"
                                width={75}
                                height={75}
                                className="rounded aspect-square"
                            />
                        </div>
                    </div>
                </div>

                <div className="hidden md:block relative">
                    <Image
                        src={'/images/educert/edubg.jpg'}
                        alt=""
                        fill
                        className="object-cover object-center pr-0 md:pr-10"
                    />
                </div>

            </div>
        </section>

    )
}