"use client"

import PageHead from "@/components/uiwidget/pagehead"

const jobs = [
    {
        title: "Job Title Here",
        jobtype: "Full Time",
        year: "2022 – Present",
        current: true,
        company: "Company Name Here",
        location: "Warman, Saskatchewan",
        responsibilities: [
            "Led cross-functional teams to deliver 10+ business objectives",
            "Developed and executed 5+ strategic initiatives for growth",
            "Oversaw budgets, operations, and stakeholder relationships",
            "Provided leadership, mentorship, and guidance to senior staff"
        ],
        achievements: [
            "Successfully launched 8 high-impact projects on time and within budget",
            "Improved operational efficiency and reduced costs",
            "Built 100+ strong client and partner relationships, increasing revenue",
            "Recognized for leadership excellence and organizational impact",
        ],
        skills: [
            "Leadership", "Project Management", "Patience", "Strategic Decision Making", "Empathy", "Crisis Management", "Ethical Judgement", "Adaptibility", "Resilience", "Name of Technical Skill"
        ]
    }, 
    {
        title: "Senior Vice President",
        jobtype: "Full Time",
        year: "2016 – 2022",
        current: false,
        company: "Dutch Bangla Bank",
        location: "Dhaka, Bangladesh",
        responsibilities: [
            "Led cross-functional teams to deliver 10+ business objectives",
            "Developed and executed 5+ strategic initiatives for growth",
            "Oversaw budgets, operations, and stakeholder relationships",
            "Provided leadership, mentorship, and guidance to senior staff"
        ],
        achievements: [
            "Successfully launched 8 high-impact projects on time and within budget",
            "Improved operational efficiency and reduced costs",
            "Built 100+ strong client and partner relationships, increasing revenue",
            "Recognized for leadership excellence and organizational impact",
        ],
        skills: [
            "Leadership", "Project Management", "Patience", "Strategic Decision Making", "Empathy", "Crisis Management", "Ethical Judgement"
        ]
    }, 
    {
        title: "Bank Title Here",
        jobtype: "Full Time",
        year: "2006 – 2016",
        current: false,
        company: "Dhaka Bank",
        location: "Dhaka, Bangladesh",
        responsibilities: [
            "Led cross-functional teams to deliver 10+ business objectives",
            "Developed and executed 5+ strategic initiatives for growth",
            "Oversaw budgets, operations, and stakeholder relationships",
            "Provided leadership, mentorship, and guidance to senior staff"
        ],
        achievements: [
            "Successfully launched 8 high-impact projects on time and within budget",
            "Improved operational efficiency and reduced costs",
            "Built 100+ strong client and partner relationships, increasing revenue",
            "Recognized for leadership excellence and organizational impact",
        ],
        skills: [
            "Backend Logistics", "Oracle", "SQL", "Database", "Empathy", "Data Management", "Ethical Judgement", "Collaboration"
        ]
    }, 
    {
        title: "Job Title Here",
        jobtype: "Full Time",
        year: "1999 – 2006",
        current: false,
        company: "Company Name",
        location: "Dhaka, Bangladesh",
        responsibilities: [
            "Led cross-functional teams to deliver 10+ business objectives",
            "Developed and executed 5+ strategic initiatives for growth",
            "Oversaw budgets, operations, and stakeholder relationships",
            "Provided leadership, mentorship, and guidance to senior staff"
        ],
        achievements: [
            "Successfully launched 8 high-impact projects on time and within budget",
            "Improved operational efficiency and reduced costs",
            "Built 100+ strong client and partner relationships, increasing revenue",
            "Recognized for leadership excellence and organizational impact",
        ],
        skills: [
            "Skills Go", "Here", "Can be as long as it", "Wants Add", "Soft And", "Hard", "Skills"
        ]
    }
]

export default function ExperiencePage() {
    return (
        <div className="min-h-screen ">
            <PageHead text="Experience" />

            <div className="grid grid-cols-1 grid-rows-auto px-16 relative z-10 -translate-y-16">

                {jobs.map((job, i) => (
                    <div key={i} className="grid grid-cols-[auto_1fr]">
                        <div><Timeline current={job.current} /></div>
                        <div className="mt-16 w-3/4">

                            {/* Name, Type, Year */}
                            <span className="w-full flex justify-between">
                                <h2 className="text-2xl font-bold">{job.title} &nbsp; | &nbsp; {job.jobtype}</h2>
                                <h2 className="text-2xl font-bold">{job.year}</h2>
                            </span>
                            <span className="text-foreground/70 ">

                                {/* Location */}
                                <h3 className="text-xl mb-2">{job.company} — {job.location}</h3>

                                {/* Responsibilities */}
                                <h4 className="text-cta font-bold">Responsibilities:</h4>
                                <ul className="pl-10">
                                    {job.responsibilities.map((r, i) => (
                                        <li key={i}>{r}</li>
                                    ))}
                                </ul>

                                {/* Achievements */}
                                <h4 className="text-cta font-bold">Achievements:</h4>
                                <ul className="pl-10">
                                    {job.achievements.map((r, i) => (
                                        <li key={i}>{r}</li>
                                    ))}
                                </ul>

                                {/* Skills */}
                                <SkillBubbles skills={job.skills} />
                            </span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}


const Timeline = ({ current }: { current: boolean }) => {
    return (
        <div className="w-20 h-full relative">
            <div className={`w-10 aspect-square relative z-10 ${current ? 'bg-background' : 'bg-buttons/40'} border-5 mt-16 border-buttons rounded-full`} />
            <div className="w-9 aspect-square rounded-full absolute top-1 left-1 bg-background z-5" />
            <div className={`h-full w-1 bg-buttons absolute top-0 left-4 translate-x-1/2`} />
        </div>
    )
}

const SkillBubbles = ({ skills }: { skills: string[] }) => {
    return (
        <div className="flex flex-wrap gap-2 mt-4 text-sm">
            {skills.map((skill, i) => (
                <div key={i} className="capitalize bg-buttons/30 rounded-xl px-2">
                    {skill}
                </div>
            ))}
        </div>
    )
}