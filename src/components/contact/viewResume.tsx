"use client"

export default function ViewResumeOptions() {
    return (
        <section className="grid grid-rows-2 gap-6 order-first md:order-last">
            <div className="flex flex-col justify-end items-end">
                <p className="font-scripty text-4xl font-bold text-headers">Want to View the Resume?</p>
                <p className="text-sm font-extralight text-foreground opacity-70"> Always up to date with my latest work and experiences. </p>
            </div>
            <div className="flex gap-2 justify-end items-start gap-4">
                <a href="/pdf/resume.pdf" target="_blank" rel="noopener noreferrer" >
                    <button className="cursor-pointer bg-cta hover:brightness-80  text-lg rounded-3xl py-2 px-8 h-fit">
                        View in Browser
                    </button>
                </a>
                <a href="/pdf/resume.pdf" download>
                    <button className="cursor-pointer bg-[#333333] text-[#e3e0e0] text-lg rounded-3xl py-2 px-8 h-fit hover:brightness-80">Download PDF</button>
                </a>
            </div>
        </section>
    )
}