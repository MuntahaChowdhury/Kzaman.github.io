"use client"

export default function HeroImage() {
    return (
        <section id="banner" className="relative altbody min-h-[90vh]">
            <div className="relative h-[100vh]">
                <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center filter brightness-40"></div>
                <div className="h-full grid grid-cols-1 grid-rows-3 justify-between relative z-10 items-center p-4">
                    <div>&nbsp;</div>
                    <div className="flex flex-col space-y-2 items-center justify-end rise p-4 text-center">
                        <h1 className="text-4xl text-white font-bold">Mohammad Khalequzzaman Chowdhury</h1>
                        <h2 className="font-scripty italic text-2xl text-gray-400"> IT Specialist & Software Engineer</h2>
                    </div>
                    <div><h2 className="text-lg text-white mt-[30vh] tracking-wide font-scripty text-center">&quot;Fancy Tagline Here That Is This Long&quot;</h2></div>
                </div>
            </div>

        </section>
    )
}