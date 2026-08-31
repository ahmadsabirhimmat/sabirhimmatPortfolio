import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LetTalkBtn } from "../UI/LetTalkBtn";

const links = [
    { href: "/", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#skills", label: "SKILLS" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#contact", label: "CONTACT" },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 overflow-visible border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
            <section className="site-container flex h-14 items-center justify-between gap-3 sm:h-16">
                <div className="relative z-20 h-14 w-44 shrink-0 sm:h-16 sm:w-56 lg:w-72">
                    <NavLink to="/" onClick={closeMenu} className="absolute left-0 top-1/2 block -translate-y-1/2">
                        <img
                            src="/Himmat Technical Logo Design.png"
                            alt="Himmat Technical logo"
                            className="h-[4.75rem] w-auto max-w-none object-contain sm:h-24 lg:h-[6.75rem]"
                            loading="lazy"
                        />
                    </NavLink>
                </div>

                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-7 text-gray-300 xl:gap-10">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden lg:block">
                    <LetTalkBtn />
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-gray-200 transition hover:bg-white/10 lg:hidden"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </section>

            <nav
                className={`overflow-hidden border-t border-white/10 bg-neutral-950/97 transition-all duration-500 ease-in-out lg:hidden ${
                    isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col gap-1 px-4 py-4 text-gray-300">
                    {links.map((link) => (
                        <li key={link.href} className="rounded-lg px-2 py-2.5 hover:bg-white/5">
                            <a href={link.href} onClick={closeMenu} className="block">
                                {link.label === "ABOUT" ? "ABOUT ME" : link.label}
                            </a>
                        </li>
                    ))}
                    <li className="pt-2">
                        <LetTalkBtn />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
