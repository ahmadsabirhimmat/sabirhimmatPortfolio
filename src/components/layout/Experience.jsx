import { easeInOut, motion } from "motion/react"
import { FiBookOpen, FiBriefcase } from "react-icons/fi"
import { SectionTitle } from "../UI/SectionTitle"

const roles = [
    {
        period: "2022 — 2025",
        title: "Full Stack Web Developer",
        place: "LKRO",
        points: [
            "Led frontend development for the organization’s main website as a React SPA, improving engagement and performance.",
            "Built reusable components and custom hooks so the UI stayed consistent as the product grew.",
            "Shipped responsive layouts with modern CSS and Bootstrap across desktop, tablet, and mobile.",
            "Integrated React screens with Node.js and Express REST APIs in a full-stack workflow.",
        ],
    },
]

const schools = [
    {
        period: "2022 — 2025",
        title: "Bachelor of Computer Science",
        place: "Benawa University of Higher Education",
        detail: "Kandahar, Afghanistan. Focused on full-stack web and mobile application development.",
    },
    {
        period: "2021 — 2023",
        title: "Professional English Proficiency Diploma",
        place: "Risha Professional English Center",
        detail: "Kandahar, Afghanistan. Strengthened technical communication for international teams and collaboration.",
    },
    {
        period: "2021",
        title: "High School Diploma",
        place: "Sayed Jamaluddin Afghan High School",
        detail: "Kandahar, Afghanistan. Completed university-preparatory secondary education.",
    },
]

const TimelineCard = ({ period, title, place, children }) => (
    <article className="relative pl-6">
        <span className="absolute left-0 top-2 size-2.5 rounded-full bg-purple-400 ring-4 ring-purple-500/15" />
        <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-amber-400">{period}</p>
        <h4 className="mt-1 text-base font-semibold text-white sm:text-lg">{title}</h4>
        <p className="text-sm text-purple-300">{place}</p>
        <div className="mt-2 text-sm leading-relaxed text-zinc-400">{children}</div>
    </article>
)

export const Experience = () => {
    return (
        <>
            <SectionTitle id="experience" kicker="03 — Journey" title="Experience & Education" />
            <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: easeInOut }}
                    className="glass-card p-5 sm:p-7"
                >
                    <div className="mb-6 flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-300">
                            <FiBriefcase aria-hidden="true" />
                        </span>
                        <h3 className="text-lg font-semibold uppercase tracking-[0.16em] text-zinc-200">
                            Work
                        </h3>
                    </div>
                    <div className="space-y-8 border-l border-white/10">
                        {roles.map((role) => (
                            <TimelineCard
                                key={role.title}
                                period={role.period}
                                title={role.title}
                                place={role.place}
                            >
                                <ul className="list-disc space-y-1.5 pl-4 marker:text-purple-400">
                                    {role.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </TimelineCard>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: easeInOut }}
                    className="glass-card p-5 sm:p-7"
                >
                    <div className="mb-6 flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-300">
                            <FiBookOpen aria-hidden="true" />
                        </span>
                        <h3 className="text-lg font-semibold uppercase tracking-[0.16em] text-zinc-200">
                            Education
                        </h3>
                    </div>
                    <div className="space-y-8 border-l border-white/10">
                        {schools.map((school) => (
                            <TimelineCard
                                key={school.title}
                                period={school.period}
                                title={school.title}
                                place={school.place}
                            >
                                <p>{school.detail}</p>
                            </TimelineCard>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    )
}
