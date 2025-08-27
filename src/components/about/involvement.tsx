"use client"

import Image from "next/image"

export default function InvolvementInCommunity() {
    return (
        <section className="px-16">
            <h2 className="text-3xl font-bold mb-8">Community & Mentorship</h2>
            <div className="grid grid-cols-3 gap-16">
                <div>
                    <Image src={'/images/about/involve1.jpg'} alt="Image" width={640} height={320} className="mb-5 w-full h-55 border-3 border-buttons object-cover" />
                    <h3 className="text-headers font-bold text-lg my-2">Local Coding Workshops</h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                        I organized and led coding workshops for students in the community, helping them explore
                        web development and problem-solving in a hands-on way. Guiding learners through challenges
                        strengthened both my mentorship skills and my own understanding of programming concepts.
                    </p>
                </div>

                <div>
                    <Image src={'/images/about/involve2.jpg'} alt="Image" width={640} height={320} className="mb-5 w-full h-55 border-3 border-buttons object-cover" />
                    <h3 className="text-headers font-bold text-lg my-2">Open-Source Contributions</h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                        Contributing to open-source projects allowed me to collaborate with diverse teams across
                        the globe. These experiences taught me how to communicate effectively, manage tasks, and
                        write clean, maintainable code while making meaningful contributions to the community.
                    </p>
                </div>

                <div>
                    <Image src={'/images/about/involve3.jpg'} alt="Image" width={640} height={320} className="mb-5 w-full h-55 border-3 border-buttons object-cover" />
                    <h3 className="text-headers font-bold text-lg my-2">Heading UI / UX</h3>
                    <p className="text-sm opacity-90 leading-relaxed">The summary of a story here. Integrate the skills unconsciously into its lines, without making it too obvious. The skills will show themselves.</p>
                </div>
            </div>
        </section>
    )
}