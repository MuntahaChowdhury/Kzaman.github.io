"use client"

import CertificationSection from "@/components/educert/certifications"
import EducationSection from "@/components/educert/education"
import Skills from "@/components/educert/skills"
import PageHead from "@/components/uiwidget/pagehead"


export default function EduCertPage() {
    return (
        <div className="pb-10 min-h-screen">
            <PageHead text="Education & Certifications" />
            <EducationSection />
            <CertificationSection />
            <Skills />

        </div>
    )
}