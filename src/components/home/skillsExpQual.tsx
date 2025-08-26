"use client"

import Image from "next/image"

export default function SkillSummary() {
    return (
        <section className="py-6 mb-10 px-5 md:px-20 relative z-50">
            <h1 className="text-4xl ml-5">A Look At My Experience</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-10 px-5 relative z-10">

                {/* ----------------------------------- Certifications ------------------------------------------- */}
                <div className="p-4 pb-0 bg-black/5 overflow-y-hidden">
                    <h2 className="text-xl font-serif tracking-wide mb-4">CERTIFICATION</h2>
                    <div className="relative grid grid-cols-[1fr_4fr] auto-rows-[1fr] gap-y-4">
                        <div className="w-1 h-full bg-headers absolute top-1 translate-x-1/2 left-4 -z-1" />

                        {/* ----------------------------------- */}
                        <div className="rounded-full w-10 h-10 bg-cards"></div>
                        <div>
                            <h3 className="font-bold text-xl">2025</h3>
                            <p className="text-sm h-10 line-clamp-2">PMP Certification</p>
                        </div>

                        {/* ----------------------------------- */}
                        <div className="rounded-full w-10 h-10 bg-cards"></div>
                        <div>
                            <h3 className="font-bold text-xl">2014</h3>
                            <p className="text-sm h-10 line-clamp-2">Master&apos;s Degree, Computer Science</p>
                        </div>

                        {/* ----------------------------------- */}
                        <div className="rounded-full w-10 h-10 bg-cards"></div>
                        <div>
                            <h3 className="font-bold text-xl">1995 - 2000</h3>
                            <p className="text-sm h-10 line-clamp-2">Bachelor&apos;s Degree, Computer Science</p>
                        </div>

                        {/* ----------------------------------- */}
                        <div className="rounded-full w-10 h-10 bg-cards"></div>
                        <div className="mt-1 bg-buttons px-3 py-1 font-[amarante] rounded-3xl cursor-pointer hover:brightness-70 hover:outline-offset-3 hover:outline-2 outline-buttons duration-100 text-background w-fit h-fit"> See More </div>

                    </div>
                </div>


                {/* ----------------------------------- Experience ------------------------------------------- */}
                <div className="p-4 pb-0 overflow-y-hidden">
                    <h2 className="text-xl font-serif tracking-wide mb-4">EXPERIENCE</h2>
                    <div className="relative grid grid-cols-[1fr_4fr] auto-rows-[1fr] gap-y-4">
                        <div className="w-1 h-full bg-buttons absolute top-1 translate-x-1/2 left-4 -z-1" />

                        {/* ----------------------------------- */}
                        <div className="rounded-full w-10 h-10 bg-headers"></div>
                        <div>
                            <h3 className="font-bold text-xl">2022 - 2025</h3>
                            <p className="text-sm h-10 line-clamp-2">
                                Something about Job 4, <br />
                                Position, Saskatoon, Saskatchewan
                            </p>
                        </div>

                        {/* ----------------------------------- */}
                        <div className="rounded-full w-10 h-10 bg-headers"></div>
                        <div>
                            <h3 className="font-bold text-xl">2018 - 2022</h3>
                            <p className="text-sm h-10 line-clamp-2">
                                Something about Job 3, <br />
                                Position, Dhaka, Bangladesh
                            </p>
                        </div>

                        {/* ----------------------------------- */}
                        <div className="rounded-full w-10 h-10 bg-headers"></div>
                        <div>
                            <h3 className="font-bold text-xl">2000 - 2018</h3>
                            <p className="text-sm h-10 line-clamp-2">
                                Something about Job 2, <br />
                                Position, Dhaka, Bangladesh
                            </p>
                        </div>

                        {/* ----------------------------------- */}
                        <div className="rounded-full w-10 h-10 bg-headers"></div>
                        <div className="mt-1 bg-cta px-3 py-1 font-[amarante] rounded-3xl cursor-pointer hover:brightness-70 hover:outline-offset-3 hover:outline-2 outline-cta duration-100 text-foreground w-fit h-fit"> See More </div>

                    </div>
                </div>


                {/* ----------------------------------- Tools & Skills ------------------------------------------- */}
                <div className="p-4 grid grid-cols-1 grid-rows-2">
                    <div className="">
                        <h2 className="text-xl font-serif tracking-wide mb-4">SKILLS</h2>
                        <div className="flex flew-wrap gap-4">
                            <Image src={'/images/logos/oracle.jpg'} alt="oracle logo" width={70} height={70} className="object-cover object-center" />
                            <Image src={'/images/logos/apex.jpg'} alt="apex logo" width={70} height={70} className="object-cover object-center" />
                            <Image src={'/images/logos/aws.jpg'} alt="aws logo" width={70} height={70} className="object-cover object-center" />
                        </div>
                        <div className="mt-3 bg-cards px-3 py-1 font-[amarante] rounded-3xl cursor-pointer hover:brightness-70 hover:outline-offset-3 hover:outline-2 outline-cards duration-100 text-foreground w-fit h-fit"> See More </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-3">
                        <MakeBars len={80} text="Skill 1" c="cta" />
                        <MakeBars len={65} text="Longer Skill 2" c="buttons" />
                        <MakeBars len={90} text="Mod Skill 3" c="headers" />
                        <MakeBars len={40} text="Some Skill 4" c="cards" />
                        <div className="mt-3 bg-headers px-3 py-1 font-[amarante] rounded-3xl cursor-pointer hover:brightness-70 hover:outline-offset-3 hover:outline-2 outline-headers duration-100 text-background w-fit h-fit"> See More </div>
                    </div>
                </div>
            </div>

            {/* <div className="absolute -top-4 -right-40 w-[50vw] h-[55vw] bg-transparent shadow-[8px_-8px_10px_var(--foreground)] opacity-60 -z-2 rotate-50" /> */}


        </section>
    )
}



function MakeBars({ len, c, text }: { len: number; c: "headers" | "buttons" | "cards" | "foreground" | "cta" | "background", text: string }) {
    const colorMap: Record<typeof c, string> = {
        headers: "bg-headers",
        buttons: "bg-buttons",
        cards: "bg-cards",
        foreground: "bg-foreground",
        cta: "bg-cta",
        background: "bg-backround",
    };

    return (
        <div className="relative h-3">
            <div className="absolute top-0 left-0 w-[70%] h-3 bg-foreground opacity-40" />
            <div
                className={`h-3 absolute z-20 top-0 left-0 ${colorMap[c]}`}
                style={{ width: `${(len / 100) * 70}%` }}
            />
            <div className="absolute -top-[6px] left-[75%] whitespace-nowrap">{text}</div>
        </div>
    );
}
