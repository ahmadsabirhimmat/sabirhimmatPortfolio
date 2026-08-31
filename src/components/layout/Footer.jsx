import { FaFacebookF, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-neutral-950/80">
            <div className="site-container flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
                <p className="text-sm text-zinc-400">
                    © {year} Ahmad Sabir Himmat. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-lg text-zinc-300">
                    <a href="https://www.facebook.com/share/1Cm5ugSNk6/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition hover:text-purple-400">
                        <FaFacebookF />
                    </a>
                    <a href="https://wa.me/93700784854" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="transition hover:text-purple-400">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/sabirhimmat?igsh=cmYybjNpa2F4NXcz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition hover:text-purple-400">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/ahmadsabirhimmat" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-purple-400">
                        <FaGithub />
                    </a>
                    <a href="mailto:sabirkhanhimmat33@gmail.com" aria-label="Email" className="transition hover:text-purple-400">
                        <MdOutlineEmail />
                    </a>
                </div>
            </div>
        </footer>
    )
}
