export const SkillImages = ({ img, name }) => {
    return (
        <div className="h-full min-w-0">
            <div className="flex h-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 py-2.5 transition duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3">
                <img src={img} className="size-7 shrink-0 object-contain sm:size-9" loading="lazy" alt={name} />
                <p className="truncate text-xs font-semibold text-zinc-200 sm:text-sm md:text-base">{name}</p>
            </div>
        </div>
    );
};
