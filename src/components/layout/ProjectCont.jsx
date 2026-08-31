import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export const ProjectCont = ({ pImg, pName, pPar, stacks, repo, links = [] }) => {
    const allLinks = [
        ...links,
        ...(repo ? [{ label: "Repository", href: repo, github: true }] : []),
    ];

    const media = pImg ? (
        <img
            src={pImg}
            className="aspect-video w-full object-cover transition duration-500 ease-out group-hover:scale-105"
            alt={pName}
            loading="lazy"
        />
    ) : (
        <div className="flex aspect-video w-full flex-col items-center justify-center bg-gradient-to-br from-red-950/80 via-zinc-950 to-purple-950/60 px-4 text-center">
            <span className="rounded-full border border-red-400/40 bg-red-500/15 px-3 py-1 text-xs font-semibold tracking-widest text-red-300">
                SOS
            </span>
            <p className="mt-3 text-lg font-semibold text-white sm:text-xl">{pName}</p>
            <p className="mt-1 text-xs text-zinc-400">Admin · Provider · iOS · Android</p>
        </div>
    );

    const primaryHref = links[0]?.href || repo;

    return (
        <article className="glass-card group flex flex-col overflow-hidden hover:border-purple-500/40 hover:shadow-[0_20px_50px_-20px_rgba(152,16,250,0.45)]">
            <figure className="overflow-hidden border-b border-white/10">
                {primaryHref ? (
                    <a href={primaryHref} target="_blank" rel="noopener noreferrer" aria-label={`${pName} live site`}>
                        {media}
                    </a>
                ) : (
                    media
                )}
            </figure>
            <div className="flex flex-col p-4 sm:p-5">
                <h2 className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">{pName}</h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {pPar}
                </p>
                <div className="uses-techs mt-4 flex flex-wrap items-center gap-2">
                    {stacks.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
                {allLinks.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {allLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-purple-400/50 hover:text-purple-200 sm:text-sm"
                            >
                                {link.github ? <FaGithub /> : <FiExternalLink />}
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </article>
    )
}
