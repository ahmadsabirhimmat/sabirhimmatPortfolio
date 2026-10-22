import { useNavigation } from "react-router-dom"
import { Header } from "../components/layout/Header"
import { Loading } from "../components/layout/Loading";
import { About } from "../components/layout/About";
import { Services } from "../components/layout/Services";
import { Experience } from "../components/layout/Experience";
import { Skills } from "../components/layout/Skills";
import { HeroSection } from "../components/layout/HeroSection";
import { Projects } from "../components/layout/Projects";
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
                        <Services />
                    </div>
                </section>

                <section className="py-14 sm:py-20 lg:py-28">
                    <div className="site-container">
                        <Experience />
                    </div>
                </section>

                <section className="py-14 sm:py-20 lg:py-28">
                    <div className="site-container">
                        <Skills />
                    </div>
                </section>

                <section className="projects pt-16 sm:pt-20">
                    <div className="site-container">
                        <SectionTitle id="projects" kicker="05 — Work" title="Latest Projects" center />
                        <Projects />
                    </div>
                </section>

                <Contact />
            </main>
            <Footer />
        </>
    )
}
