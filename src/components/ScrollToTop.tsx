import { useEffect, useState } from "react";

const ArrowIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-6 h-6 ${className}`}
    >
        <title id="upArrowTitle">Scroll To Top</title>
        <path d="M12 4.75a.75.75 0 0 1 .53.22l7 7a.75.75 0 1 1-1.06 1.06L12.75 6.81v11.44a.75.75 0 0 1-1.5 0V6.81L5.53 13.03a.75.75 0 1 1-1.06-1.06l7-7a.75.75 0 0 1 .53-.22z" />
    </svg>
);

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            type="button"
            title="Scroll to top"
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-(--black) text-(--old-lace) shadow-md transition-opacity ${
                visible || "hidden"
            }`}
            aria-label="Scroll to top"
        >
            {/* Up Arrow SVG */}
            <ArrowIcon className="stroke-[--old-lace]" />
        </button>
    );
};

export default ScrollToTop;
