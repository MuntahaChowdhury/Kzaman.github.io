"use client"

import Image from "next/image"

export default function HobbiesNInterests() {
    return (
        <section className="px-16 mb-16">

            <h2 className="text-3xl font-bold my-6 flex items-center">
                When I Am Not Working,
                I Like To...
            </h2>

            <div className="grid grid-cols-4 px-auto gap-2">
                <div className="flex flex-col justify-start items-center gap-2 capitalize rounded-md px-1 py-4">
                    <Image src={'/images/about/travel.jpg'} alt="Plane" width={70} height={70} />
                    <p className="opacity-80 leading-6 mt-1 text-center text-lg">Travel around the World</p>
                </div>

                <div className="flex flex-col justify-start items-center gap-2 capitalize rounded-md px-1 py-4">
                    <Image src={'/images/about/coffee.jpg'} alt="Plane" width={70} height={70} />
                    <p className="opacity-80 leading-6 mt-1 text-center text-lg">Relax with Coffee</p>
                </div>

                <div className="flex flex-col justify-start items-center gap-2 capitalize rounded-md px-1 py-4">
                    <Image src={'/images/about/football.jpg'} alt="Plane" width={70} height={70} />
                    <p className="opacity-80 leading-6 mt-1 text-center text-lg">Play Team Sports</p>
                </div>

                <div className="flex flex-col justify-start items-center gap-2 capitalize rounded-md px-1 py-4">
                    <Image src={'/images/about/camera.jpg'} alt="Plane" width={70} height={70} />
                    <p className="opacity-80 leading-6 mt-1 text-center text-lg">Make Memories</p>
                </div>

            </div>
        </section>
    )
}