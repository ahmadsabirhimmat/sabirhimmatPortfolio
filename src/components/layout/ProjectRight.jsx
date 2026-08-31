import { ProjectCont } from "./ProjectCont"

export const ProjectRight = () => {
    return (
        <>
            <ProjectCont
                pImg={"/projectPics/e-comm.png"}
                pName={"E-Comm"}
                pPar={"E-Comm A full-stack marketplace where users can browse products across categories, add items to cart, and securely checkout. Features include user authentication, advanced product search with filters, order history, and an admin dashboard."}
                stacks={["HTML", "CSS", "JS"]}
            />
            <ProjectCont
                pImg={"/projectPics/himmattechnial.png"}
                pName={"Himmat Technical"}
                pPar={"Portfolio Website – A modern, responsive portfolio designed to highlight my journey, skills, and projects. featuring smooth animations, an interactive UI, and a clean minimalist design that reflects my personal brand."}
                stacks={["HTML", "CSS"]}
            />
        </>
    )
}
