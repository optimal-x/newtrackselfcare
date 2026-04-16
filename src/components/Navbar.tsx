/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> */
import { animate } from "animejs";
import { useEffect, useRef, useState } from "react";
import GREEN_LOGO from "../assets/newtrack-logo-green-01.svg";
import REFERRAL_FORM from "../assets/pdf-forms/Physician-Referral.pdf";

/**
 XIcon svg with html element id="burger". The id is important for
 animejs.
 */
const XIcon: React.FC<{ className?: string | undefined }> = ({ className }) => (
    <svg
        className={`${className}`}
        id="xIcon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>Close</title>
        <g stroke-width="5"></g>
        <g>
            <path
                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                fill="#000000"
            ></path>
        </g>
    </svg>
);

/**
 Burger svg with html element id="burger". The id is important for
 animejs.
 */
function Burger(props?: any | undefined) {
    return (
        <svg
            id="burger"
            className={`${props.className}`}
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Menu</title>
            <g stroke-width="5"></g>
            <g>
                <path d="M4 18L20 18" stroke="#000000" stroke-width="2"></path>
                <path d="M4 12L20 12" stroke="#000000" stroke-width="2"></path>
                <path d="M4 6L20 6" stroke="#000000" stroke-width="2"></path>
            </g>
        </svg>
    );
}

/**
 Handles the burger toggling and turning into the XIcon
 Displays:
     burger[180] -> XIcon [180]
     burger[-180] -> XIcon [-180]

 Side Effects:
     changes Parent state when clicked
 */
function BurgerToggle(props?: any | undefined) {
    const [isOpen, setIsOpen] = useState(false);

    // This effect runs once on mount to initialize the animation timeline
    useEffect(() => {
        setIsOpen(props.isNav);
        if (isOpen && props.isNav) {
            // if burger is on top
            animate("#burger", {
                opacity: 0,
                scale: 0.95,
                duration: 400,
                rotate: "1turn",
                easing: "easeOutQuad",
            });
            animate("#xIcon", {
                opacity: 1,
                scale: 1,
                duration: 400,
                rotate: "1turn",
                easing: "easeInQuad",
            });
        } else {
            // if x is on top
            animate("#xIcon", {
                opacity: 0,
                scale: 0.95,
                duration: 400,
                rotate: "-1turn",
                easing: "easeOutQuad",
            });
            animate("#burger", {
                opacity: 1,
                scale: 1,
                duration: 400,
                rotate: "-1turn",
                easing: "easeInQuad",
            });
        }
    }, [isOpen, props.isNav]);

    const handleClick = () => {
        // changes child callback
        props.setOpen(!isOpen);
        // changes current state
        setIsOpen(!isOpen);
    };

    return (
        <button
            className={`${props.className}`}
            type="button"
            onClick={handleClick}
            aria-label="Menu"
            style={{
                width: "40px",
                height: "40px",
                background: "none",
                border: "none",
                cursor: "pointer",
            }}
        >
            {isOpen && props.isNav ? <XIcon /> : <Burger />}
        </button>
    );
}

// const scrollToPosition = (
//     targetPosition: React.RefObject<HTMLElement> | null,
//     duration = 400,
//     ease = "easeInOutQuad",
// ) => {
//     if (targetPosition) {
//         animate(targetPosition.current, {
//             duration,
//             ease,
//         });
//     }
// };

/**
 Unordered list component with slide out left animation that contains the
 aforementions list of all possible sub-nagivations to headers within the
 document 
 */
function NavigationList(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        // changes child callback
        props.onClick(!isOpen);
        // changes current state
        setIsOpen(!isOpen);
    };
    return (
        <section
            id="nav_list"
            className={`sticky bg-(--cultured) h-screen z-1000 ${props.className}`}
        >
            <ul className="text-4xl md:text-8xl text-center font-bold">
                <li className="text-(--pine-tree) hover:text-(--laurel-green)">
                    <a onClick={handleClick} href="#offerings">
                        OFFERINGS
                    </a>
                </li>
                <li className="text-(--middle-red-purple) hover:text-(--light-salmon)">
                    <a onClick={handleClick} href="#our-approach">
                        OUR APPROACH
                    </a>
                </li>
                <li className="text-(--police-blue) hover:text-(--air-superiority-blue)">
                    <a onClick={handleClick} href="#locations">
                        LOCATIONS
                    </a>
                </li>
                <li className="text-(--gold-metallic) hover:text-(--banana-mania)">
                    <a onClick={handleClick} href={REFERRAL_FORM}>
                        REFERRAL
                    </a>
                </li>
            </ul>
        </section>
    );
}

/**
 custom hook for getting the screen width of the current viewport 
*/
function useScreenWidth() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenWidth;
}

/**
 The final Navbar construction
 */
function Navigation(props: any) {
    const [navOpen, setNavOpen] = useState(false);
    const screenWidth = useScreenWidth();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const linkRef = useRef<HTMLButtonElement>(null);

    const click = (ref: React.RefObject<any>) => {
        if (ref.current) {
            animate(ref.current, {
                scale: [
                    { to: 0.9, duration: 100, ease: "easeOutQuad" },
                    { to: 1.1, duration: 150, ease: "easeOutQuad" },
                    { to: 1.0, duration: 150, ease: "easeOutBounce" },
                ],
            });
        }
    };
    const buttonClick = () => click(buttonRef);
    const linkClick = (navOpen: boolean) => {
        setNavOpen(!navOpen);
        click(linkRef);
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        if (navOpen) {
            animate("#nav_list", {
                translateX: [`${screenWidth}px`, "0px"], // from off-screen to final position
                opacity: [1, 1],
                duration: 300,
                easing: "linear",
            });
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            //TODO animation for slide out
            document.body.style.overflow = "visible"; // Re-enable it
        }
    }, [navOpen]);

    // * Only 3 elements in the sticky nav. Logo, `Lets Talk` Pill, and Burger
    return (
        <header className={`sticky top-0 z-1000 ${props.className}`}>
            <nav className="sticky top-0 w-full bg-white h-20 md:h-35 py-2 md:py-3">
                <div className="flex justify-between items-center w-full">
                    {/* Logo */} {/* Logo - far left */}
                    <div className="order-1 md:order-1 px-4">
                        {/* Add scroll to top when pressing newtrack logo */}
                        <a href="#">
                            <img
                                src={GREEN_LOGO}
                                alt="Logo"
                                className="h-15 md:h-30 px-2"
                                fetchPriority="high"
                            />
                        </a>
                    </div>
                    <div className="order-2 md:order-2">
                        <a href="tel:289-255-6200">
                            <button
                                type="button"
                                className="bg-(--pine-tree) absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white font-bold text-sm px-2 py-1 md:text-xl md:px-6 md:py-4 rounded-full hover:bg-(--ebony)"
                                ref={buttonRef}
                                onClick={buttonClick}
                            >
                                <span className="inline-block">Let's Talk</span>
                            </button>
                        </a>
                    </div>
                    <div className="order-3 px-4">
                        <BurgerToggle
                            setOpen={setNavOpen}
                            className="h-20 md:h-35"
                            isNav={navOpen}
                        />
                    </div>
                </div>
            </nav>
            {!navOpen || (
                <NavigationList
                    ref={linkRef}
                    onClick={linkClick}
                    className="w-full h-full p-10"
                />
            )}
        </header>
    );
}

export default Navigation;
