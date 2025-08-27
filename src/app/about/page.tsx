"use client"

import FocusAreas from "@/components/about/focusAreas"
import HobbiesNInterests from "@/components/about/hobbies"
import Vision from "@/components/about/vision"
import MyStory from "@/components/about/myStory"
import PageHead from "@/components/uiwidget/pagehead"
import InvolvementInCommunity from "@/components/about/involvement"



export default function AboutPage() {
    return (
        <div className="pb-16 min-h-screen relative">
            <PageHead text="About Me" />

            <div className="relative z-20">
                <MyStory />

                <section className="px-16 mb-16">
                    <h2 className="text-3xl font-bold mb-4">Personal Philosophy</h2>

                    <div className="grid grid-cols-[2fr_1fr] gap-15">
                        <p className="text-md leading-relaxed">
                            I approach every project with curiosity and determination, striving to learn continuously
                            and improve with each challenge. Hard work, consistency, and a willingness to embrace
                            new ideas guide the way I operate. For me, success isn’t just measured by results, but
                            by the growth, impact, and value I create along the journey.
                        </p> 
                        <div className="w-full">
                            <q className="font-bold text-xl">Do not go where the path may lead, go instead where there is no path and leave a trail.</q>
                            <p className="mt-2 italic opacity-70">— Ralph Waldo Emerson</p>
                        </div>
                    </div>
                </section>
                <FocusAreas />
                <HobbiesNInterests />
                <Vision />
                <InvolvementInCommunity />
            </div>
        </div>
    )
}