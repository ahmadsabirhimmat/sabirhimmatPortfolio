export const SectionTitle = ({ kicker, title, center = false, id }) => {
    return (
        <div
            id={id}
            className={`mb-8 sm:mb-12 ${center ? "text-center" : "text-center lg:text-left"}`}
        >
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-purple-400 sm:text-xs">
                {kicker}
            </p>
            <div className={`mt-2 flex items-center gap-4 ${center ? "justify-center" : "justify-center lg:justify-start"}`}>
                <h2 className="section-heading">{title}</h2>
                {!center && (
                    <span className="hidden h-px min-w-16 flex-1 bg-gradient-to-r from-purple-500 to-transparent lg:block" />
                )}
            </div>
        </div>
    );
};
