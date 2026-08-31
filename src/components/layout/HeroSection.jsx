import { LetTalkBtn } from "../UI/LetTalkBtn"
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HeroTitle } from "../UI/HeroTitle";
import { MdOutlineEmail } from "react-icons/md";
import { easeInOut, motion } from "motion/react"

export const HeroSection = () => {
    return (
        <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:flex lg:min-h-[100svh] lg:items-center lg:pt-20 lg:pb-16">
            <div className="site-container">
                <div className="grid grid-cols-1 items-center gap-8 min-[640px]:grid-cols-2 min-[640px]:gap-8 lg:grid-cols-[1fr_auto_auto] xl:gap-14">
                    <div className="info-section order-1 w-full max-w-xl justify-self-center text-center min-[640px]:justify-self-start min-[640px]:text-left">
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-500/10 px-3 py-1 text-xs font-medium text-zinc-200">
                            <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                            Available for work
                        </span>
                        <motion.h3
                            initial={{ opacity: 0, x: -32 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.15, ease: easeInOut }}
                            className="text-[clamp(1.2rem,4.2vw,2.6rem)] leading-tight text-purple-300"
                        >
                            AHMAD SABIR
                        </motion.h3>
                        <h1 className="mt-1 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-[clamp(2.1rem,9vw,4.4rem)] leading-[0.95] text-transparent">
                            HIMMAT
                        </h1>
                        <div className="mt-4 min-h-[2.25rem] text-zinc-300">
                            <HeroTitle />
                        </div>
                        <div className="buttons mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4 min-[640px]:justify-start">
                            <a
                                href="/Ahmad_Sabir_Himmat_Resume.pdf"
                                className="button type1"
                                title="Download resume"
                                download="Ahmad_Sabir_Himmat_Resume.pdf"
                                type="application/pdf"
                            >
                                Download CV
                            </a>
                            <LetTalkBtn />
                        </div>
                    </div>

                    <div className="sabir-image relative order-2 mt-4 justify-self-center pt-6 sm:mt-0 sm:pt-8">
                        <figure className="flex h-64 w-52 justify-center rounded-2xl bg-neutral-950 shadow-2xl shadow-slate-800 sm:h-80 sm:w-64 lg:h-[26.25rem] lg:w-80">
                            <img
                                src="sabir.png"
                                loading="lazy"
                                alt="Ahmad Sabir Himmat"
                                className="relative -top-6 h-[16.5rem] max-w-[12.5rem] rounded-2xl object-cover object-top shadow-2xl shadow-slate-800 transition-all duration-700 hover:translate-y-6 sm:-top-7 sm:h-[21rem] sm:max-w-[16rem] lg:h-[25rem] lg:max-w-[17.5rem] lg:hover:translate-y-9"
                            />
                        </figure>
                    </div>

                    <div className="box order-3 w-full min-[640px]:col-span-2 lg:col-span-1 lg:w-auto">
                        <div className="wrapper flex flex-row items-center justify-center gap-1 lg:flex-col lg:gap-3">
                            <a href="https://www.facebook.com/share/1Cm5ugSNk6/" target="_blank" rel="noopener noreferrer" className="icon facebook" aria-label="Facebook">
                                <div className="tooltip">Facebook</div>
                                <span>
                                    <i><FaFacebookF /></i>
                                </span>
                            </a>
                            <a href="https://wa.me/93700784854" target="_blank" rel="noopener noreferrer" className="icon whatapp" aria-label="WhatsApp">
                                <div className="tooltip">Whatsapp</div>
                                <span>
                                    <i><FaWhatsapp /></i>
                                </span>
                            </a>
                            <a href="https://www.instagram.com/sabirhimmat?igsh=cmYybjNpa2F4NXcz" target="_blank" rel="noopener noreferrer" className="icon instagram" aria-label="Instagram">
                                <div className="tooltip">Instagram</div>
                                <span>
                                    <i><FaInstagram /></i>
                                </span>
                            </a>
                            <a href="https://github.com/ahmadsabirhimmat" target="_blank" rel="noopener noreferrer" className="icon github" aria-label="GitHub">
                                <div className="tooltip">Github</div>
                                <span>
                                    <i><FaGithub /></i>
                                </span>
                            </a>
                            <a
                                href="mailto:sabirkhanhimmat33@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Sabir,"
                                className="icon email"
                                aria-label="Email"
                            >
                                <div className="tooltip">Email</div>
                                <span>
                                    <i><MdOutlineEmail /></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
