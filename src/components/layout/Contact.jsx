import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { SectionTitle } from "../UI/SectionTitle";
import "../UI/talkbtn.css";

export const Contact = () => {
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setStatus("sending");

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(new FormData(form)).toString(),
            });
            if (!response.ok) {
                throw new Error("Form submission failed");
            }
            form.reset();
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

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
                        action="/"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="hidden">
                            <label>
                                Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                            </label>
                        </p>
                        <div className="form-group">
                            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-200">Name</label>
                            <input type="text" id="name" name="name" autoComplete="name" placeholder="Your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-200">Email</label>
                            <input type="email" id="email" name="email" autoComplete="email" placeholder="you@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-zinc-200">Subject</label>
                            <input type="text" id="subject" name="subject" autoComplete="off" placeholder="What is this about?" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-200">Message</label>
                            <textarea id="message" rows={5} name="message" placeholder="Tell me about the project" required></textarea>
                        </div>
                        <div aria-live="polite" className="mb-3 min-h-5 text-sm">
                            {status === "success" && (
                                <p className="text-emerald-300" role="status">Message sent. I will get back to you soon.</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-300" role="alert">The message could not be sent. Email me at sabirkhanhimmat33@gmail.com instead.</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="talk-btn flex w-full items-center justify-center gap-2 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                            disabled={status === "sending"}
                        >
                            {status === "sending" ? "Sending..." : "Send Message"} <FiSend />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
