"use client"

import Image from "next/image";



export default function Skills() {
    return (
        <section className="px-4 md:px-20 py-8">
            <h1 className="text-4xl  text-headers">Skills</h1>


            {/* ----------------------------------- Tools & Skills ------------------------------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <div className="p-4 grid grid-cols-1 grid-rows-2 gap-6">
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
                        <h2 className="w-full font-bold altbody p-2 hidden md:block">Techincal</h2>
                        <div className="text-xs flex flex-col justify-start gap-2 items-center text-center">
                            <Image src={'/images/logos/oracle.jpg'} alt="oracle logo" width={90} height={90} className="object-cover object-center bg-white" />
                            <p>Oracle</p>
                        </div>
                        <div className="text-xs flex flex-col justify-start gap-2 items-center text-center">
                            <Image src={'/images/logos/apex.jpg'} alt="apex logo" width={90} height={90} className="object-cover object-center bg-white" />
                            <p>Oracle Apex</p>
                        </div>
                        <div className="text-xs flex flex-col justify-start gap-2 items-center text-center">
                            <Image src={'/images/logos/aws.jpg'} alt="aws logo" width={90} height={90} className="object-cover object-center bg-white" />
                            <p>AWS Cloud</p>
                        </div>
                        <div className="text-xs flex flex-col justify-start gap-2 items-center text-center">
                            <Image src={'/images/logos/logo.jpg'} alt="aws logo" width={90} height={90} className="object-cover object-center bg-white" />
                            <p>Another logo</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
                        <h2 className="w-full font-bold altbody p-2 hidden md:block">Soft</h2>
                        <div className="text-xs flex flex-col justify-start gap-2 items-center text-center">
                            <Image src={'/images/skills/organization.jpg'} alt="oracle logo" width={90} height={90} className="object-cover object-center p-2 bg-white" />
                            <p>Organization</p>
                        </div>
                        <div className="text-xs flex flex-col justify-start gap-2 items-center text-center">
                            <Image src={'/images/skills/time.jpg'} alt="apex logo" width={90} height={90} className="object-cover object-center p-2 bg-white" />
                            <p>Time management</p>
                        </div>
                        <div className="text-xs flex flex-col justify-start gap-2 items-center text-center">
                            <Image src={'/images/skills/leadership.jpg'} alt="aws logo" width={90} height={90} className="object-cover object-center p-2 bg-white" />
                            <p>Leadership</p>
                        </div>
                        <div className="text-xs flex flex-col justify-start gap-2 items-center text-center">
                            <Image src={'/images/skills/determination.jpg'} alt="aws logo" width={90} height={90} className="object-cover object-center p-2 bg-white" />
                            <p>Determination</p>
                        </div>
                    </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 px-4 md:px-0">
                    <MakeBars len={80} text="Skill 1" c="cta" />
                    <MakeBars len={65} text="Longer Skill 2" c="buttons" />
                    <MakeBars len={90} text="Mod Skill 3" c="headers" />
                    <MakeBars len={40} text="Some Skill 4" c="cards" />
                    <MakeBars len={30} text="Some Skill 5" c="foreground" />
                    <MakeBars len={60} text="Some Skill 5" c="#d98e51ff" />
                    <div className="mt-3 bg-headers px-3 py-1 font-[amarante] rounded-3xl cursor-pointer hover:brightness-70 hover:outline-offset-3 hover:outline-2 outline-headers duration-100 text-background w-fit h-fit"> See More </div>
                </div>
            </div>

        </section>
    )
}



function MakeBars({ len, c, text }: { len: number; c: "headers" | "buttons" | "cards" | "foreground" | "cta" | "background" | string, text: string }) {
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
                className={`h-3 absolute z-20 top-0 left-0 ${colorMap[c] ?? ""}`}
                style={{
                    width: `${(len / 100) * 70}%`,
                    ...(colorMap[c] ? {} : { backgroundColor: c }),
                }}
            />
            <div className="absolute -top-[6px] left-[75%] whitespace-nowrap">{text}</div>
        </div>
    );
}
