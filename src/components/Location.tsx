/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { animate } from "animejs";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useIsVisible } from "@/lib/utils";

import STARS from "../assets/location-images/starsforlocation.webp";
import LONDON_TITLE from "../assets/location-images/title_london.svg";
import VAUGHAN_TITLE from "../assets/location-images/title_vaughan.svg";

const SVGLeft = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="40"
            height="40"
            style={{ fill: "rgb(255, 255, 255)" }}
        >
            <title>Carousel Left</title>
            <path
                d="M23.5 11.5 L15.5 19.5 L23.5 27.5"
                stroke-linejoin="round"
                stroke-linecap="round"
                style={{ fill: "none", stroke: "#ffffff", strokeWidth: "3px" }}
            ></path>
        </svg>
    );
};

const SVGRight = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="40"
            height="40"
            style={{ fill: "rgb(255, 255, 255);" }}
        >
            <title>Carousel Right</title>
            <path
                d="M16.5 11.5 L24.5 19.5 L16.5 27.5"
                stroke-linejoin="round"
                stroke-linecap="round"
                style={{ fill: "none", stroke: "#ffffff", strokeWidth: "3px;" }}
            ></path>
        </svg>
    );
};

function Carousel({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-3xl ml-auto">
            {/* Images */}
            <div className="overflow-hidden relative h-full">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((src, idx) => (
                        <img
                            key={src}
                            src={src}
                            alt={`Slide ${idx} of one of Newtrack's location`}
                            className="w-full flex-shrink-0 object-cover"
                        />
                    ))}
                </div>
            </div>

            {/* Left Button */}
            <button
                type="button"
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/30 hover:bg-white/70  text-gray-800 rounded-full p-2 shadow"
            >
                <SVGLeft />
            </button>

            {/* Right Button */}
            <button
                type="button"
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/30 hover:bg-white/70 text-gray-800 rounded-full p-2 shadow"
            >
                <SVGRight />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
                {images.map((_, idx) => (
                    <button
                        type="button"
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full ${
                            idx === currentIndex ? "bg-gray-800" : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

const LocationButton = (props: any) => {
    const anchor_ref = useRef<HTMLAnchorElement>(null);
    const anchorClick = () => {
        if (anchor_ref.current) {
            animate(anchor_ref.current, {
                scale: [
                    { to: 0.9, duration: 100, ease: "easeOutQuad" },
                    { to: 1.1, duration: 150, ease: "easeOutQuad" },
                    { to: 1.0, duration: 150, ease: "easeOutBounce" },
                ],
            });
        }
    };

    const tw_styles = twMerge(
        "`mt-8 inline-block text-lg text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300",
        props.className,
    );

    return (
        <a
            href={props.href}
            ref={anchor_ref}
            onClick={anchorClick}
            className={tw_styles}
        >
            {props.children}
        </a>
    );
};

export function LocationIntro() {
    /// animation fade in on scroll
    // const [phil, setPhil] = useRef<HTML>(null);

    const sectionRef = useRef<HTMLSelectElement>(null);
    const isVisible = useIsVisible(sectionRef);

    const tw_styles_section = twMerge(
        "w-full h-screen bg-cover bg-center",
        `bg-[url(${STARS})]`,
        `transition-opacity  ease-in duration-900 ${
            isVisible ? "opacity-100" : "opacity-0"
        }`,
    );

    const tw_styles_overlay = twMerge("w-full h-full z-100 bg-black/40");

    const tw_styles_text = twMerge(
        "text-center bg-cover bg-center leading-xl p-2",
        "pt-50 sm:text-xl md:text-3xl lg:text-5xl font-bold text-white ",
        "md:leading-20 leading-6",
    );

    return (
        <section
            ref={sectionRef}
            id="locations"
            style={{
                backgroundImage: `url(${STARS})`,
                backgroundRepeat: "no-repeat",
            }}
            className={tw_styles_section}
        >
            <div className={tw_styles_overlay}>
                <div className="md:h-24 hidden md:block"></div>
                <p className={tw_styles_text}>
                    <p>
                        <span>Two locations, double the care—bringing</span>
                    </p>
                    <p>
                        <span>trusted health services closer to every</span>
                    </p>
                    <p>
                        <span>community we serve</span>
                    </p>
                </p>
                <br />
                <div className="cols-2 gap-8 text-center">
                    <LocationButton
                        className="bg-(--police-blue) m-4"
                        href="#vaughan-clinic"
                    >
                        <span>Vaughan, ON</span>
                    </LocationButton>
                    <LocationButton
                        className="bg-(--ebony) m-4"
                        href="#london-clinic"
                    >
                        <span>London, ON</span>
                    </LocationButton>
                </div>
            </div>
        </section>
    );
}

// ================== VaughanClinic ================== //
import VGN_IMG_1 from "../assets/location-images/vaughan_clinic/Vaughan1.webp";
import VGN_IMG_2 from "../assets/location-images/vaughan_clinic/Vaughan2.webp";
import VGN_IMG_3 from "../assets/location-images/vaughan_clinic/Vaughan3.webp";
import VGN_IMG_4 from "../assets/location-images/vaughan_clinic/Vaughan4.webp";
import VGN_IMG_5 from "../assets/location-images/vaughan_clinic/Vaughan5.webp";

export const VaughanClinic = () => (
    <div id="vaughan-clinic" className="md:p-24">
        <div className="h-full grid md:grid-cols-2 grid-cols-1 gap-8 mb-12 w-full py-2">
            <img src={VAUGHAN_TITLE} className="col-span-1" alt="" />
            <div className="h-full w-full"></div>
        </div>

        <div className="h-fit grid md:grid-cols-2 grid-cols-1 gap-8 mb-20">
            <div className="w-full text-[var(--dark-lava)] font-bold pl-1 md:pl-20 md:text-3xl text-lg md:leading-24">
                <p className="leading-8">
                    Unit #316 1600 Steeles Ave W Concord, <br />
                    ON L4K 4M2
                </p>
                <p>
                    <a
                        href="tel:+12893173595"
                        className="hover:text-[var(--police-blue)]"
                    >
                        (289) 317-3595
                    </a>
                </p>
                <p>Fax: TBD</p>
                <p>
                    <a
                        href="mailto:vaughan@newtrackselfcare.com"
                        className="hover:text-[var(--police-blue)]"
                    >
                        vaughan@newtrackselfcare.com
                    </a>
                </p>
            </div>
            <Carousel
                images={[VGN_IMG_1, VGN_IMG_2, VGN_IMG_3, VGN_IMG_4, VGN_IMG_5]}
            />
        </div>
    </div>
);

// ================== LondonClinic ================== //
import LND_IMG_1 from "../assets/location-images/london-clinic/London1.webp";
import LND_IMG_2 from "../assets/location-images/london-clinic/London2.webp";
import LND_IMG_3 from "../assets/location-images/london-clinic/London3.webp";
import LND_IMG_4 from "../assets/location-images/london-clinic/London4.webp";
import LND_IMG_5 from "../assets/location-images/london-clinic/London5.webp";

export const LondonClinic = () => (
    <div id="london-clinic" className="mt-24 md:p-24">
        <div className="h-full grid md:grid-cols-2 grid-cols-1 gap-8 mb-12 w-full py-2">
            <img src={LONDON_TITLE} className="col-span-1" alt="" />
            <div className="h-full w-full"></div>
        </div>

        <div className="h-fit grid md:grid-cols-2 grid-cols-1 gap-8 mb-20">
            <div className="w-full text-[var(--dark-lava)] font-bold pl-5 md:pl-20 md:text-3xl text-lg md:leading-24">
                <p className="leading-8">
                    100 Collip Circle, Suite 105,
                    <br />
                    N6G 4X8
                </p>
                <p>
                    <a
                        href="tel:+12265990477"
                        className="hover:text-[var(--ebony)]"
                    >
                        (226) 599-0477
                    </a>
                </p>
                <p>Fax: TBD</p>
                <p>
                    <a
                        href="mailto:london@newtrackselfcare.com"
                        className="hover:text-[var(--ebony)]"
                    >
                        london@newtrackselfcare.com
                    </a>
                </p>
            </div>
            <Carousel
                images={[LND_IMG_1, LND_IMG_2, LND_IMG_3, LND_IMG_4, LND_IMG_5]}
            />
        </div>
    </div>
);
