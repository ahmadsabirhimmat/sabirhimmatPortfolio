import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { LetTalkBtn } from "../UI/LetTalkBtn";

const links = [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if (!isOpen) return undefined;
        const onKeyDown = (event) => {
            if (event.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen]);

    return (
        <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur-xl">
            <div className="site-container flex h-16 items-center gap-3">
                <a href="#top" onClick={closeMenu} className="shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400">
                    <img
                        src="/himmattech-logo.png"
                        alt="Himmat Tech"
                        width={294}
                        height={401}
                        decoding="async"
                        className="h-11 w-auto sm:h-12"
                    />
                </a>

                <nav className="hidden min-[1100px]:flex min-[1100px]:flex-1 min-[1100px]:justify-center" aria-label="Primary">
                    <ul className="flex items-center gap-0.5">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="rounded-md px-2.5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-zinc-300 transition hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 xl:px-3 xl:text-xs"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="ml-auto flex items-center gap-2 min-[1100px]:ml-0">
                    <LetTalkBtn />
                    <button
                        type="button"
                        onClick={() => setIsOpen((open) => !open)}
                        className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-xl text-zinc-100 transition hover:bg-white/10 min-[1100px]:hidden"
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <nav id="mobile-menu" className="border-t border-white/10 bg-neutral-950 min-[1100px]:hidden" aria-label="Mobile">
                    <ul className="site-container grid gap-1 py-3">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-white/5 hover:text-white"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};
