import { easeInOut, motion } from "motion/react"
import { SectionTitle } from "../UI/SectionTitle"

export const About = () => {
    return (
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="about-info">
                <SectionTitle id="about" kicker="01 — Profile" title="About Me" />
                <p className="text-center text-base leading-relaxed text-zinc-300 sm:text-lg lg:text-left lg:text-xl lg:leading-8">
                    Full Stack Web and Mobile Developer with 5+ years of hands-on experience specializing in building scalable applications using the MERN stack. I have a strong track record of delivering modern, high-performance web platforms and cross-platform mobile apps tailored to user needs. My expertise covers both frontend and backend development, API integration, and database design, enabling me to build complete solutions from concept to deployment.
                </p>
                <div className="my-info mt-8 grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 sm:gap-4">
                    <div className="glass-card px-3 py-4 text-center hover:border-purple-500/40">
                        <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-amber-400 sm:text-xs">LOCATION</p>
                        <p className="mt-1 text-sm text-zinc-100 sm:text-base">Afghanistan</p>
                    </div>
                    <div className="glass-card px-3 py-4 text-center hover:border-purple-500/40">
                        <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-amber-400 sm:text-xs">EXPERIENCE</p>
                        <p className="mt-1 text-sm text-zinc-100 sm:text-base">5+ Years</p>
                    </div>
                    <div className="glass-card px-3 py-4 text-center hover:border-purple-500/40">
                        <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-amber-400 sm:text-xs">DATE OF BIRTH</p>
                        <p className="mt-1 text-sm text-zinc-100 sm:text-base">11 Oct 2003</p>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: easeInOut }}
                className="about-img overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl shadow-purple-950/40"
            >
                <img
                    src="coding.jpg"
                    alt="Coding workspace"
                    loading="lazy"
                    className="h-56 w-full object-cover sm:h-72 lg:h-full lg:min-h-[22rem]"
                />
            </motion.div>
        </div>
    )
}
