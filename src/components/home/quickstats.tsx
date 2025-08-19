"use client"


export default function QuickStats() {
    return (
        <section className="m-6 mx-10 md:mx-20 mb-10 grid grid-cols-1 md:grid-cols-3 mt-12">
            <div className="p-4 py-10 md:py-14 md:px-12 rise bg-background brightness-85">
                <h1 className="font-head text-4xl text-headers font-bold">Fact #1</h1>
                <p className="opacity-60 leading-5 mt-4 text-md italic">A 2-3 line brief elaboration over here. If you want, they could link to the other pages (ex. Projects, Education).</p>
            </div>

            <div className="p-4 py-10 md:py-14 md:px-12 rise bg-background brightness-95 border-t-2 border-b-2 md:border-t-0 md:border-b-0 md:border-l-2 md:border-r-2">
                <h1 className="font-head text-4xl text-headers font-bold">Fact #2</h1>
                <p className="opacity-60 leading-5 mt-4 text-md italic">A 2-3 line brief elaboration over here. If you want, they could link to the other pages (ex. Projects, Education).</p>
            </div>

            <div className="p-4 py-10 md:py-14 md:px-12 rise bg-background brightness-85">
                <h1 className="font-head text-4xl text-headers font-bold">Fact #3</h1>
                <p className="opacity-60 leading-5 mt-4 text-md italic">A 2-3 line brief elaboration over here. If you want, they could link to the other pages (ex. Projects, Education).</p>
            </div>

        </section>
    )
}