"use client"


export default function QuickStats() {
    return (
        <section className="m-6 mx-10 md:mx-20 mb-10 grid grid-cols-1 md:grid-cols-4 mt-12">
            <div className="p-4 py-10 md:py-14 md:px-12 rise">
                <h2 className="text-5xl font-[body] text-center text-headers font-extrabold">05</h2>
                {/* <div className="mt-3 bg-foreground/90 w-28 h-2 mx-auto" /> */}
                <p className="opacity-60 leading-6 mt-4 text-center text-lg">Projects hosted on the cloud</p>
            </div>

            <div className="p-4 py-10 md:py-14 md:px-12 rise">
                <h2 className="text-5xl font-[body] text-center text-headers font-extrabold">200+</h2>
                {/* <div className="mt-3 bg-foreground/90 w-28 h-2 mx-auto" /> */}
                <p className="opacity-60 leading-6 mt-4 text-center text-lg">Employees under surpervision</p>
            </div>

            <div className="p-4 py-10 md:py-14 md:px-12 rise">
                <h2 className="text-5xl font-[body] text-center text-headers font-extrabold">03</h2>
                {/* <div className="mt-3 bg-foreground/90 w-28 h-2 mx-auto" /> */}
                <p className="opacity-60 leading-6 mt-4 text-center text-lg">Mills operated under self-built software</p>
            </div>

            <div className="p-4 py-10 md:py-14 md:px-12 rise">
                <h2 className="text-5xl font-[body] text-center text-headers font-extrabold">50+</h2>
                {/* <div className="mt-3 bg-foreground/90 w-28 h-2 mx-auto" /> */}
                <p className="opacity-60 leading-6 mt-4 text-center text-lg">Updates managed daily</p>
            </div>

        </section>
    )
}