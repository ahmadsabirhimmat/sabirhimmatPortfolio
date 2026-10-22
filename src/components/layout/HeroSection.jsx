import { FaFacebookF, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { easeInOut, motion } from "motion/react";
import { HeroTitle } from "../UI/HeroTitle";
import { LetTalkBtn } from "../UI/LetTalkBtn";

const socials = [
    { href: "https://www.facebook.com/share/1Cm5ugSNk6/", label: "Facebook", icon: FaFacebookF, external: true },
    { href: "https://wa.me/93700784854", label: "WhatsApp", icon: FaWhatsapp, external: true },
    { href: "https://www.instagram.com/sabirhimmat?igsh=cmYybjNpa2F4NXcz", label: "Instagram", icon: FaInstagram, external: true },
    { href: "https://github.com/ahmadsabirhimmat", label: "GitHub", icon: FaGithub, external: true },
    { href: "mailto:sabirkhanhimmat33@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Sabir,", label: "Email", icon: MdOutlineEmail },
];

const facts = [
    { value: "5+ years", label: "Experience" },
    { value: "MERN", label: "Web and mobile" },
    { value: "Kandahar", label: "Afghanistan" },
];

export const HeroSection = () => {
    return (
        <section id="top" className="relative overflow-hidden pt-24 pb-14 sm:pt-28 lg:pt-32 lg:pb-20">
            <div className="site-container">
                <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,22rem)] lg:gap-16 xl:grid-cols-[minmax(0,1.2fr)_24rem]">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: easeInOut }}
                        className="min-w-0 text-center lg:text-left"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-500/10 px-3 py-1 text-xs font-medium text-zinc-200">
                            <span className="size-1.5 rounded-full bg-emerald-400" />
                            Available for work
                        </span>
                        <h1 className="mt-5">
                            <span className="block text-sm font-semibold tracking-[0.28em] text-purple-300 sm:text-base">
                                AHMAD SABIR
                            </span>
                            <span className="holtwood-one-sc-regular mt-2 block text-[clamp(2.7rem,8vw,4.6rem)] leading-none text-white">
                                HIMMAT
                            </span>
                        </h1>
                        <div className="mt-4 text-zinc-300">
                            <HeroTitle />
                        </div>
                        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:mx-0">
                            I build scalable web and mobile products with the MERN stack, from the interface through APIs, data, and deployment.
                        </p>
                        <div className="hero-ctas mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                            <a
                                href="/Ahmad_Sabir_Himmat_Resume.pdf"
                                className="button type1"
                                title="Download resume"
                                download="Ahmad_Sabir_Himmat_Resume.pdf"
                            >
                                Download CV
                            </a>
                            <LetTalkBtn />
                            <a href="#projects" className="px-1 text-sm font-semibold text-purple-300 underline-offset-4 hover:underline">
                                View projects
                            </a>
                        </div>
                        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                            {socials.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            aria-label={item.label}
                                            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                            className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-base text-zinc-200 transition hover:border-purple-400/60 hover:text-white"
                                        >
                                            <Icon aria-hidden="true" />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                        <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-left">
                            {facts.map((fact) => (
                                <div key={fact.value}>
                                    <dt className="text-sm font-semibold text-white sm:text-base">{fact.value}</dt>
                                    <dd className="mt-1 text-xs leading-snug text-zinc-400 sm:text-sm">{fact.label}</dd>
                                </div>
                            ))}
                        </dl>
                    </motion.div>

                    <motion.figure
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.08, ease: easeInOut }}
                        className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none"
                    >
                        <div className="absolute inset-x-8 top-10 -z-10 h-3/4 rounded-full bg-purple-500/25 blur-3xl" aria-hidden="true" />
                        <img
                            src="/sabir.webp"
                            alt="Ahmad Sabir Himmat"
                            width={840}
                            height={1260}
                            fetchPriority="high"
                            decoding="async"
                            className="aspect-[4/5] w-full rounded-[1.75rem] object-cover object-top shadow-2xl shadow-black/50 ring-1 ring-white/10"
                        />
                    </motion.figure>
                </div>
            </div>
        </section>
    );
};
