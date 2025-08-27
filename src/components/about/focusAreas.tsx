"use client"

export default function FocusAreas() {
    return (
        <section className="px-16 mb-20">
            <h2 className="text-3xl font-bold mb-4">My Focus Areas</h2>

            <div className="">
                {/* Intro text */}
                <div className="grid grid-cols-2 mb-10">
                    <p className="text-md leading-relaxed">
                        Over the course of my career, I have developed expertise across several
                        key areas. These specializations reflect both my professional journey
                        and the value I bring to organizations I work with.
                    </p>
                    <div className="w-full flex justify-end pr-30">
                        <div className="mt-3 bg-cards px-10 py-2 font-[amarante] rounded-3xl cursor-pointer 
                                        hover:brightness-70 hover:outline-offset-3 hover:outline-2 outline-cards 
                                        duration-100 text-foreground w-fit h-fit"
                        > See More </div>
                    </div>
                </div>

                {/* Grid of specializations */}
                <div className="grid grid-cols-4 gap-4 gap-y-8">
                    <div className="rounded-lg text-md max-w-50">
                        <h3 className="text-4xl mb-2 pl-2">💽</h3>
                        <p className="opacity-80 text-lg">Database Development</p>
                    </div>

                    <div className="rounded-lg text-md max-w-50">
                        <h3 className="text-4xl mb-2 pl-2">💻</h3>
                        <p className="opacity-80 text-lg">Cloud Computing <br />(AWS, Azure, GCP)</p>
                    </div>

                    <div className="rounded-lg text-md max-w-50">
                        <h3 className="text-4xl mb-2 pl-2">⚙️</h3>
                        <p className="opacity-80 text-lg">Software Engineering</p>
                    </div>

                    <div className="rounded-lg text-md max-w-50">
                        <h3 className="text-4xl mb-2 pl-2">🤝</h3>
                        <p className="opacity-80 text-lg">Project Management</p>
                    </div>
                </div>
            </div>
        </section>
    )
}