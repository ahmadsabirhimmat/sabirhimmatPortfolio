import { easeInOut, motion } from "motion/react"
import { FiDatabase, FiMonitor, FiPenTool, FiSmartphone } from "react-icons/fi"
import { SectionTitle } from "../UI/SectionTitle"

const services = [
    {
        icon: FiMonitor,
        title: "Full Stack Web Apps",
        text: "MERN platforms from reusable React interfaces to Node/Express APIs and MongoDB. I ship responsive SPAs that stay fast on desktop and mobile.",
    },
    {
        icon: FiSmartphone,
        title: "Mobile Applications",
        text: "Cross-platform Android and iOS apps with React Native and Expo, including the admin and provider portals that sit behind them.",
    },
    {
        icon: FiPenTool,
        title: "UI/UX Implementation",
        text: "Design-to-code work with Tailwind, Bootstrap, and motion. I focus on clear layouts, consistent components, and interfaces people can actually use.",
    },
    {
        icon: FiDatabase,
        title: "APIs & Data Systems",
        text: "REST APIs, auth flows, and data-heavy screens such as dashboards, forms, and internal tools—built to stay maintainable after launch.",
    },
]

export const Services = () => {
    return (
        <>
            <SectionTitle id="services" kicker="02 — Offer" title="What I Do" />
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
                {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                        <motion.article
                            key={service.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.45, delay: index * 0.08, ease: easeInOut }}
                            className="glass-card flex h-full flex-col p-5 hover:border-purple-500/40 sm:p-6"
                        >
                            <span className="flex size-11 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-lg text-purple-300">
                                <Icon aria-hidden="true" />
                            </span>
                            <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-[0.95rem]">
                                {service.text}
                            </p>
                        </motion.article>
                    )
                })}
            </div>
        </>
    )
}
