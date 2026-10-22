import { ProjectCont } from "./ProjectCont"

export const ProjectRight = () => {
    return (
        <>
            <ProjectCont
                pImg={"/projectPics/e-comm.png"}
                pName={"E-Comm"}
                pPar={"A static storefront with category browsing, product search, a product page, cart, and contact page."}
                stacks={["HTML", "CSS", "JavaScript"]}
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
