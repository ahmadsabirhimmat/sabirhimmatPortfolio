import React, { useState, useEffect } from "react";
import "./HeroTitle.css"

export const HeroTitle = () => {
    const roles = [
        "Full Stack Web Developer",
        "Full Stack Mobile Developer",
        "UI/UX Designer",
    ];

    const [index, setIndex] = useState(0);
    const [display, setDisplay] = useState(roles[0]);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = roles[index];
        let typingSpeed = isDeleting ? 50 : 100;

        const typing = setTimeout(() => {
            if (!isDeleting && display.length < currentText.length) {
                setDisplay(currentText.substring(0, display.length + 1));
            } else if (isDeleting && display.length > 0) {
                setDisplay(currentText.substring(0, display.length - 1));
            } else if (!isDeleting && display.length === currentText.length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && display.length === 0) {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % roles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(typing);
    }, [display, isDeleting, index]);

    return (
        <h2 className="min-h-[1.5em] text-[clamp(0.95rem,3.4vw,1.55rem)] font-medium tracking-wide text-zinc-300">
            {display}
            <span className="blinking-cursor">|</span>
        </h2>
    );
}
