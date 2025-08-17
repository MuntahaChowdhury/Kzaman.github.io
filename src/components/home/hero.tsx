"use client"

export default function HeroImage() {
    return (
        <section id="banner" className="relative altbody min-h-[90vh]">
            <div className="relative h-[100vh]">
                <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center filter brightness-40"></div>

                <div className="relative z-10 flex flex-col space-y-2 items-center justify-end h-full rise p-4">
                    <h1 className="text-4xl text-white font-bold">Mohammad Khalequzzaman Chowdhury</h1>
                    <h2 className="font-scripty italic text-2xl text-gray-400"> IT Specialist & Software Engineer</h2>
                    <h2 className="text-lg text-white mt-[30vh] tracking-wide font-scripty">&quot;Fancy Tagline Here That Is This Long&quot;</h2>
                </div>
            </div>

        </section>
    )
}