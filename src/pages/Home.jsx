import { useNavigation } from "react-router-dom"
import { Header } from "../components/layout/Header"
import { Loading } from "../components/layout/Loading";
import { About } from "../components/layout/About";
import { Skills } from "../components/layout/Skills";
import { HeroSection } from "../components/layout/HeroSection";
import { ProjectLeft } from "../components/layout/ProjectLeft";
import { ProjectRight } from "../components/layout/ProjectRight";
import { Contact } from "../components/layout/Contact";
import { Footer } from "../components/layout/Footer";
import { SectionTitle } from "../components/UI/SectionTitle";

export const Home = () => {
    const navigation = useNavigation();
    if (navigation.state === "loading") return <Loading />;
    return (
        <>
            <Header />
            <main className="w-full">
                <HeroSection />

                <section className="py-14 sm:py-20 lg:py-28">
                    <div className="site-container">
                        <About />
                    </div>
                </section>

                <section className="py-14 sm:py-20 lg:py-28">
                    <div className="site-container">
                        <Skills />
                    </div>
                </section>

                <section className="projects py-14 sm:py-20 lg:py-28">
                    <div className="site-container">
                        <SectionTitle id="projects" kicker="03 — Work" title="Latest Projects" center />
                        <div className="grid grid-cols-1 items-start gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
                            <ProjectLeft />
                            <ProjectRight />
                        </div>
                    </div>
                </section>

                <Contact />
            </main>
            <Footer />
        </>
    )
}
