"use client"

import CertificationSection from "@/components/educart/certifications"
import EducationSection from "@/components/educart/education"
import Skills from "@/components/educart/skills"
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