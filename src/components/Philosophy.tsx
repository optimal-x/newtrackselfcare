import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useIsVisible } from "@/lib/utils";
import PHILOSOPHY_IMG from "../assets/location-images/vaughan_clinic/Vaughan1.webp";

const Philosophy: React.FC = () => {
    const sectionRef = useRef<HTMLSelectElement>(null);
    const isVisible = useIsVisible(sectionRef);

    const tw_styles_section = twMerge(
        "w-full h-screen bg-cover bg-center",
        `bg-[url(${PHILOSOPHY_IMG})]`,
        `transition-opacity  ease-in duration-900 ${
            isVisible ? "opacity-100" : "opacity-0"
        }`,
    );

    const tw_styles_overlay = twMerge(
        "w-full h-full z-100 bg-white/50 flex items-center justify-center",
    );

    const tw_styles_text = twMerge(
        "text-center bg-cover bg-center md:leading-xl p-2",
        "text-[1.25rem] md:text-5xl font-bold text-(--pine-tree)",
    );

    return (
        <section
            ref={sectionRef}
            id="our-approach"
            style={{
                backgroundImage: `url(${PHILOSOPHY_IMG})`,
                backgroundRepeat: "no-repeat",
            }}
            className={tw_styles_section}
        >
            <div className={tw_styles_overlay}>
                <p className={tw_styles_text}>
                    <span>Discover a holistic approach</span>
                    <br />
                    <span>to mental health.</span>
                    <br />
                    <span>We're here to help</span>
                    <br />
                    <span>you achieve your goals and</span>
                    <br />
                    <span>find balance.</span>
                    <br />
                </p>
            </div>
        </section>
    );
};

export default Philosophy;
