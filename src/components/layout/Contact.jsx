import { FiSend } from "react-icons/fi";
import { SectionTitle } from "../UI/SectionTitle";

export const Contact = () => {
    return (
        <section className="contact py-14 sm:py-20">
            <div className="site-container">
                <SectionTitle id="contact" kicker="06 — Contact" title="Get In Touch" center />
                <div className="grid items-center gap-8 rounded-2xl border border-white/10 bg-zinc-950/60 p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
                    <div className="mx-auto w-full max-w-md lg:max-w-none">
                        <figure className="h-40 sm:h-56 lg:h-[22rem]">
                            <img
                                src="/contact1.png"
                                loading="lazy"
                                alt="Get in touch"
                                className="h-full w-full object-contain"
                            />
                        </figure>
                    </div>
                    <form
                        className="w-full"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="hidden">
                            <label>
                                Don’t fill this out: <input name="bot-field" />
                            </label>
                        </p>
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" id="subject" name="subject" placeholder="Subject" />
                        </div>
                        <div className="form-group">
                            <textarea id="message" rows="5" name="message" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="talk-btn flex w-full items-center justify-center gap-2 sm:w-auto">
                            Send Message <FiSend />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
