"use client"


export default function PageHead({ text }: { text: string }) {
    return (
        <section className="relative bg-[url('/images/headbg.jpg')] bg-cover bg-center">
            <h1 className="relative top-0 left-0 text-4xl text-center text-white font-head mb-10 pt-28 pb-10 shadow-xl border-b-2 border-white z-60">{text}</h1>
            <div className="bg-headers absolute top-0 left-0 h-full w-full opacity-95 z-10" />
        </section>

    )
}