import { SkillImages } from "../UI/SkillImages"
import { SectionTitle } from "../UI/SectionTitle"

const SkillBlock = ({ title, children }) => (
    <div className="skill grid items-start gap-4 lg:grid-cols-[minmax(0,200px)_1fr] lg:gap-8">
        <div className="flex items-center justify-center gap-3 lg:justify-start">
            <span className="hidden h-8 w-1 rounded-full bg-purple-500 lg:block" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-200 sm:text-base">
                {title}
            </p>
        </div>
        <div className="skills-collection grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 xl:grid-cols-4">
            {children}
        </div>
    </div>
);

export const Skills = () => {
    return (
        <>
            <SectionTitle id="skills" kicker="02 — Expertise" title="My Stack" />
            <div className="skills-info space-y-10 sm:space-y-14">
                <SkillBlock title="Frontend">
                    <SkillImages img={"/js.png"} name={"JavaScript"} />
                    <SkillImages img={"/ts.png"} name={"TypeScript"} />
                    <SkillImages img={"/react.png"} name={"React"} />
                    <SkillImages img={"/redux.png"} name={"Redux"} />
                    <SkillImages img={"/next.webp"} name={"Next.Js"} />
                    <SkillImages img={"/tailwind.png"} name={"Tailwind"} />
                    <SkillImages img={"/react.png"} name={"ReactNative"} />
                    <SkillImages img={"/sass.webp"} name={"Sass"} />
                    <SkillImages img={"/bootstrap.svg"} name={"Bootstrap"} />
                    <SkillImages img={"/framer-motion.webp"} name={"Motion"} />
                    <SkillImages img={"/gsap.png"} name={"GSAP"} />
                </SkillBlock>

                <SkillBlock title="Backend">
                    <SkillImages img={"/node.png"} name={"Node.Js"} />
                    <SkillImages img={"/express.png"} name={"Express.Js"} />
                </SkillBlock>

                <SkillBlock title="Database">
                    <SkillImages img={"/mysql.svg"} name={"MySQL"} />
                    <SkillImages img={"/mongodb.svg"} name={"MongoDB"} />
                </SkillBlock>

                <SkillBlock title="Tools">
                    <SkillImages img={"/git.png"} name={"Git"} />
                    <SkillImages img={"/docker.svg"} name={"Docker"} />
                    <SkillImages img={"/aws.webp"} name={"AWS"} />
                </SkillBlock>
            </div>
        </>
    )
}
