"use client"

import Image from "next/image"

export default function CertificationSection() {
    return (
        <section className="relative py-10">
            <div className="w-full h-full absolute top-0 left-0">
                    <Image
                        src={'/images/educert/certbg.jpg'}
                        alt=""
                        fill
                        className="w-full h-full object-cover object-center brightness-30"
                    />
                </div>
            <div className="text-5xl text-center text-white  tracking-wider font-bold mb-14 relative">
                <h2>Certification</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 auto-rows-auto px-8 md:px-20">

                {/* Cert 1 */}
                <div className="bg-background brightness-90 p-4 rounded-lg border-1 border-gray-500 shadow-lg flex flex-col items-center">
                    <div className="flex justify-end items-end">
                        <Image src={'/images/educert/pmp.jpg'} alt="logo" width={80} height={80} className="rounded aspect-square object-contain p-1 bg-white" />
                    </div>
                    <div className="flex gap-2 w-full justify-between mt-2">
                        <h2 className="font-bold text-md">Project Management Professional (PMP)® </h2>
                        <p className="font-bold text-md text-right opacity-60">2025</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xs mb-1">Online | Project Management Institute</p>
                        <p className="text-xs opacity-70">License Number: 1014583717 <button className="bg-foreground pt-0 px-2 pb-0.5 text-[10px]  rounded-3xl cursor-pointer font-bold hover:brightness-70 duration-100 text-background">View certificate</button></p>
                        <p className="text-xs opacity-70">Key Focus Areas:</p>
                        <ul className="pl-9 text-xs text-foreground opacity-70">
                            <li>Agile project management, </li>
                            <li>Risk management, </li>
                            <li>Stakeholder communication</li>
                        </ul>
                        <p className="text-xs opacity-70">Credential Validity: Lifetime</p>
                    </div>

                </div>

                {/* Cert 2 */}
                <div className="bg-background brightness-90 p-4 rounded-lg border-1 border-gray-500 shadow-lg flex flex-col items-center">
                    <div className="flex justify-end items-end">
                        <Image src={'/images/educert/googleit.jpg'} alt="logo" width={80} height={80} className="rounded aspect-square object-contain p-1 bg-white" />
                    </div>
                    <div className="flex gap-2 w-full justify-between mt-2">
                        <h2 className="font-bold text-md">Google IT Support Certificate </h2>
                        <p className="font-bold text-md text-right opacity-60">2020</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xs mb-1">Online | Coursera</p>
                        <p className="text-xs opacity-70">License Number: 10402290317 <button className="bg-foreground pt-0 px-2 pb-0.5 text-[10px]  rounded-3xl cursor-pointer font-bold hover:brightness-70 duration-100 text-background">View certificate</button></p>
                        <p className="text-xs opacity-70">Key Focus Areas:</p>
                        <ul className="pl-9 text-xs text-foreground opacity-70">
                            <li>Agile project management, </li>
                            <li>Risk management, </li>
                            <li>Stakeholder communication</li>
                        </ul>
                        <p className="text-xs opacity-70">Credential Validity: Lifetime</p>
                    </div>

                </div>

                {/* Cert 3 */}
                <div className="bg-background brightness-90 p-4 rounded-lg border-1 border-gray-500 shadow-lg flex flex-col items-center">
                    <div className="flex justify-end items-end">
                        <Image src={'/images/educert/awscloud.jpg'} alt="logo" width={80} height={80} className="rounded aspect-square object-contain p-1 bg-white" />
                    </div>
                    <div className="flex gap-2 w-full justify-between mt-2">
                        <h2 className="font-bold text-md">AWS Certified Cloud Practitioner </h2>
                        <p className="font-bold text-md text-right opacity-60">2020</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xs mb-1">Online | Coursera</p>
                        <p className="text-xs opacity-70">License Number: 1832063717 <button className="bg-foreground pt-0 px-2 pb-0.5 text-[10px]  rounded-3xl cursor-pointer font-bold hover:brightness-70 duration-100 text-background">View certificate</button></p>
                        <p className="text-xs opacity-70">Key Focus Areas:</p>
                        <ul className="pl-9 text-xs text-foreground opacity-70">
                            <li>Agile project management, </li>
                            <li>Risk management, </li>
                            <li>Stakeholder communication</li>
                        </ul>
                        <p className="text-xs opacity-70">Credential Validity: Lifetime</p>
                    </div>

                </div>

                {/* Cert 4 */}
                <div className="bg-background brightness-90 p-4 rounded-lg border-1 border-gray-500 shadow-lg flex flex-col items-center">
                    <div className="flex justify-end items-end">
                        <Image src={'/images/educert/awsfun.jpg'} alt="logo" width={80} height={80} className="rounded aspect-square object-contain p-1 bg-white" />
                    </div>
                    <div className="flex gap-2 w-full justify-between mt-2">
                        <h2 className="font-bold text-md">AWS Fundamentals </h2>
                        <p className="font-bold text-md text-right opacity-60">2020</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xs mb-1">Online | Coursera</p>
                        <p className="text-xs opacity-70">License Number: 1832063717 <button className="bg-foreground pt-0 px-2 pb-0.5 text-[10px]  rounded-3xl cursor-pointer font-bold hover:brightness-70 duration-100 text-background">View certificate</button></p>
                        <p className="text-xs opacity-70">Key Focus Areas:</p>
                        <ul className="pl-9 text-xs text-foreground opacity-70">
                            <li>Agile project management, </li>
                            <li>Risk management, </li>
                            <li>Stakeholder communication</li>
                        </ul>
                        <p className="text-xs opacity-70">Credential Validity: Lifetime</p>
                    </div>
                </div>

                {/* Cert 5 */}
                <div className="bg-background brightness-90 p-4 rounded-lg border-1 border-gray-500 shadow-lg flex flex-col items-center">
                    <div className="flex justify-end items-end">
                        <Image src={'/images/educert/awsmigcloud.jpg'} alt="logo" width={80} height={80} className="rounded aspect-square object-contain p-1 bg-white" />
                    </div>
                    <div className="flex gap-2 w-full justify-between mt-2">
                        <h2 className="font-bold text-md">AWS Migrating to Cloud </h2>
                        <p className="font-bold text-md text-right opacity-60">2020</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xs mb-1">Online | Coursera</p>
                        <p className="text-xs opacity-70">License Number: 1184663717 <button className="bg-foreground pt-0 px-2 pb-0.5 text-[10px]  rounded-3xl cursor-pointer font-bold hover:brightness-70 duration-100 text-background">View certificate</button></p>
                        <p className="text-xs opacity-70">Key Focus Areas:</p>
                        <ul className="pl-9 text-xs text-foreground opacity-70">
                            <li>Agile project management, </li>
                            <li>Risk management, </li>
                            <li>Stakeholder communication</li>
                        </ul>
                        <p className="text-xs opacity-70">Credential Validity: Lifetime</p>
                    </div>
                </div>

                {/* Cert 6 */}
                <div className="bg-background brightness-90 p-4 rounded-lg border-1 border-gray-500 shadow-lg flex flex-col items-center">
                    <div className="flex justify-end items-end">
                        <Image src={'/images/educert/awsserver.jpg'} alt="logo" width={80} height={80} className="rounded aspect-square object-contain p-1 bg-white" />
                    </div>
                    <div className="flex gap-2 w-full justify-between mt-2">
                        <h2 className="font-bold text-md">AWS Building Serverless Applications </h2>
                        <p className="font-bold text-md text-right opacity-60">2020</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xs mb-1">Online | Coursera</p>
                        <p className="text-xs opacity-70">License Number: 1827453717 <button className="bg-foreground pt-0 px-2 pb-0.5 text-[10px]  rounded-3xl cursor-pointer font-bold hover:brightness-70 duration-100 text-background">View certificate</button></p>
                        <p className="text-xs opacity-70">Key Focus Areas:</p>
                        <ul className="pl-9 text-xs text-foreground opacity-70">
                            <li>Agile project management, </li>
                            <li>Risk management, </li>
                            <li>Stakeholder communication</li>
                        </ul>
                        <p className="text-xs opacity-70">Credential Validity: Lifetime</p>
                    </div>
                </div>



            </div>
        </section>
    )
}