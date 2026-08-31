import { NavLink, useRouteError } from "react-router-dom";
import errorVideo from '../assets/error.mp4'
import "../components/UI/talkbtn.css"

export const ErrorPage = () => {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <section className="flex min-h-[100svh] flex-col items-center justify-center px-4 py-10 text-zinc-200">
                <div className="w-full max-w-3xl">
                    <figure className="overflow-hidden rounded-2xl border border-white/10">
                        <video
                            src={errorVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className="aspect-video h-auto max-h-[28rem] w-full object-cover"
                        >
                        </video>
                    </figure>
                    <div className="mt-6 text-center">
                        <p className="text-base sm:text-lg">The page you were looking for could not be found.</p>
                        <p className="mt-2 text-sm text-zinc-400">Go back to the previous page or return home.</p>
                    </div>
                </div>
                <div id="goBackBtn" className="mt-6">
                    <NavLink to="/" className="talk-btn inline-flex">
                        Go Back to Home Page
                    </NavLink>
                </div>
            </section>
        )
    }
    return <h1 className="p-8 text-center text-zinc-200">Something went wrong.</h1>
};
