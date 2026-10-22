import { easeInOut, motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
    {
        name: "Bashper Khidmatuna",
        category: "Web & mobile",
        description:
            "An emergency platform with an admin portal, a provider portal, and a user app for Android and iOS. Operators manage urgent contacts, providers, and service requests in one place, and people can reach the right help from the web or their phone.",
        problem:
            "Urgent contacts and service providers were scattered, so residents and operators had no shared system to find help, verify providers, and handle requests across web and mobile.",
        image: "/projectPics/bashper%20khidmatuna-2.jpeg",
        stacks: ["React", "Tailwind", "Node", "Express", "MongoDB", "React Native", "Expo"],
        links: [
            { label: "Admin portal", href: "https://bashper-khidmatuna-1.onrender.com" },
            { label: "Provider portal", href: "https://bashper-khidmatuna-provider.onrender.com" },
            { label: "Android app", href: "https://play.google.com/store/apps/details?id=af.bashper.khidmatuna" },
        ],
    },
    {
        name: "Bazar",
        category: "E-commerce",
        description:
            "A MERN shop for browsing products, searching and filtering the catalog, building a cart, and checking out. The layout stays usable from a phone through to a desktop screen.",
        problem:
            "The catalog stopped at a list of products. Shoppers could not search, narrow results, keep a cart, or finish a purchase in one flow.",
        image: "/projectPics/Bazar-clear.png",
        stacks: ["React", "Tailwind", "Node", "Express", "MongoDB", "Motion"],
    },
    {
        name: "Portfolio",
        category: "Personal site",
        description:
            "A personal site for projects, skills, and achievements. Visitors move through a responsive layout into project pages without hunting through separate files.",
        problem:
            "Work and skills were spread across chats and files, so there was no single place for someone to review the projects and the stack behind them.",
        image: "/projectPics/portfolio-clear.png",
        stacks: ["HTML", "Tailwind"],
    },
    {
        name: "E-Comm",
        category: "Storefront",
        description:
            "A static storefront with category browsing, product search, a product page, a cart, and a contact page. It gives a shop a complete front end without a heavy application behind it.",
        problem:
            "There was no path from a category to a product, a cart, and a way to get in touch. Visitors could look, but they could not shop.",
        image: "/projectPics/e-comm-clear.png",
        stacks: ["HTML", "CSS", "JavaScript"],
    },
    {
        name: "Himmat Technical",
        category: "Brand site",
        description:
            "A responsive brand site for services, selected work, and contact. The pages share one visual system so the offer is clear on the first visit.",
        problem:
            "The brand had no public site, so services and past work were hard to understand and there was no direct way to start a conversation.",
        image: "/projectPics/himmattechnial-clear.png",
        stacks: ["HTML", "CSS"],
    },
];

const StackList = ({ stacks }) => (
    <ul className="flex flex-wrap gap-1.5 sm:gap-2">
        {stacks.map((item) => (
            <li
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[0.65rem] font-medium tracking-wide text-zinc-300 sm:px-2.5 sm:py-1 sm:text-xs"
            >
                {item}
            </li>
        ))}
    </ul>
);

const ProjectLinks = ({ links }) => (
    <div className="mt-3 flex flex-wrap gap-2 sm:mt-5">
        {links.map((link) => (
            <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-zinc-100 transition hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 sm:px-3 sm:py-2 sm:text-sm"
            >
                {link.label}
                <FiArrowUpRight aria-hidden="true" className="text-purple-300" />
            </a>
        ))}
    </div>
);

const ProjectScreen = ({ project, index }) => {
    const number = String(index + 1).padStart(2, "0");

    return (
        <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: easeInOut }}
            className="project-screen grid items-center gap-5 border-b border-white/10 py-8 sm:gap-6 sm:py-10 lg:h-[calc(100svh-4rem)] lg:grid-cols-2 lg:gap-10 lg:overflow-hidden lg:py-6"
        >
            <figure className="flex items-center justify-center p-3 sm:p-4 lg:h-full lg:min-h-0 lg:p-6">
                <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-auto w-full object-contain [filter:drop-shadow(0_22px_28px_rgba(0,0,0,0.8))_drop-shadow(0_10px_22px_rgba(152,16,250,0.45))] lg:max-h-full"
                />
            </figure>
            <div className="flex min-w-0 flex-col justify-center lg:min-h-0 lg:overflow-hidden lg:py-2">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-purple-300 sm:text-xs sm:tracking-[0.22em]">
                    {number} — {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                    {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {project.description}
                </p>
                <div className="mt-4 border-l-2 border-purple-500/70 pl-3 sm:mt-5">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-purple-300 sm:text-xs">
                        Problem solved
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                        {project.problem}
                    </p>
                </div>
                <div className="mt-4 sm:mt-5">
                    <StackList stacks={project.stacks} />
                </div>
                {project.links && <ProjectLinks links={project.links} />}
            </div>
        </motion.article>
    );
};

export const Projects = () => {
    return (
        <div>
            {projects.map((project, index) => (
                <ProjectScreen key={project.name} project={project} index={index} />
            ))}
        </div>
    );
};
