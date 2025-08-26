"use client"

import ContactBoxes from "@/components/contact/contactBoxes"
import SendMessageBox from "@/components/contact/sendMessage"
import ViewResumeOptions from "@/components/contact/viewResume"


export default function ContactPage() {
    return (
        <div className="pb-12 min-h-screen">

            {/* Top bg title */}
            <div className="relative bg-[url('/images/contact/bg.jpg')] bg-cover bg-center h-[40vh] brightness-65">
                <h1 className="absolute z-10 top-[20vh] left-0  text-5xl pl-10 !font-normal !text-white">Let&apos;s Connect</h1>
            </div>

            {/* Boxes */}
            <ContactBoxes />

            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 px-10">
                {/* Form */}
                <SendMessageBox />


                {/* Resume */}
                <ViewResumeOptions />
            </div >


        </div >
    )
}