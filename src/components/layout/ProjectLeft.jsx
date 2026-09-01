import { ProjectCont } from "./ProjectCont"

export const ProjectLeft = () => {
    return (
        <>
            <ProjectCont
                pName={"Bashper Khidmatuna"}
                pPar={"Emergency contacts platform with an admin web portal, a provider web portal, and a user app for Android and iOS. Built to manage urgent contacts, providers, and service requests across web and mobile."}
                stacks={["React", "Tailwind", "Node", "Express", "MongoDB", "React Native", "Expo"]}
                links={[
                    { label: "Admin Portal", href: "https://bashper-khidmatuna-1.onrender.com" },
                    { label: "Provider Portal", href: "https://bashper-khidmatuna-provider.onrender.com" },
                ]}
            />
            <ProjectCont
                pImg={"/projectPics/Bazar.png"}
                pName={"Bazar"}
                pPar={"E-Commerce Website (MERN Stack) – A responsive online shopping platform with product browsing, search & filters, cart, and secure checkout."}
                stacks={["React", "Tailwind", "node", "EXPRESS", "MONGODB", "MOTION"]}
            />
            <ProjectCont
                pImg={"/projectPics/portfolio.png"}
                pName={"Portfolio"}
                pPar={"A personal portfolio built with modern web technologies to showcase projects, skills, and achievements. Features responsive design, smooth navigation, and project detail pages"}
                stacks={["HTML", "Tailwind"]}
            />
        </>
    )
}
