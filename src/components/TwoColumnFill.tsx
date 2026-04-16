import { animate } from "animejs";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import ReactiveModal from "./Modal";

/*
<div className="bg-white flex flex-col justify-center items-start p-12 lg:p-24">
    <div className="max-w-md">
        <h1 className="text-6xl lg:text-7xl font-bold font-serif text-[#8B4513]">
            Psycho
            <br />
            Therapy
        </h1>
        <p className="text-3xl text-pink-400 mt-4">
            Personal Support
        </p>
        <a
            href="#"
            className="mt-8 inline-block bg-[#8B4513] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#A0522D] transition duration-300"
        >
            Book a Session
        </a>
    </div>
</div>
*/

// ============================ LEFT SIDE ============================ //
const TitleLeft: React.FC<{
    children: React.ReactNode;
    className?: string | undefined;
}> = ({ children, className }) => {
    const tw_styles = twMerge(
        "font-bold lg:text-8xl md:text-7xl text-5xl font-[--font-secondary]",
        className,
    );
    return <h2 className={tw_styles}>{children}</h2>;
};

const SubTitleLeft: React.FC<{
    children: React.ReactNode;
    className: string;
}> = ({ children, className }) => {
    const tw_styles = twMerge(
        "xl:text-6xl md:text-3xl text-4xl my-4 font-[--font-secondary] pl-20",
        className,
    );
    return <p className={tw_styles}>{children}</p>;
};

const ButtonLeft = (props: any) => {
    const button_ref = useRef<HTMLButtonElement>(null);
    const a_ref = useRef<HTMLAnchorElement>(null);

    const Click = (ref_element: any | null) => {
        if (ref_element.current) {
            animate(ref_element.current, {
                scale: [
                    { to: 0.9, duration: 100, ease: "easeOutQuad" },
                    { to: 1.1, duration: 150, ease: "easeOutQuad" },
                    { to: 1.0, duration: 150, ease: "easeOutBounce" },
                ],
            });
        }
    };

    const tw_styles = twMerge(
        "`mt-8 inline-block text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300",
        props.className,
    );

    return (
        <>
            {props.link1 && props.link2 ? (
                <ReactiveModal link1={props.link1} link2={props.link2}>
                    <button
                        type="button"
                        ref={button_ref}
                        onClick={() => Click(button_ref)}
                        className={tw_styles}
                    >
                        {props.children}
                    </button>
                </ReactiveModal>
            ) : (
                <a
                    href={props.href}
                    ref={a_ref}
                    onClick={() => Click(a_ref)}
                    className={tw_styles}
                >
                    {props.children}
                </a>
            )}
        </>
    );
};

const LeftColumn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col justify-center items-start p-12 lg:p-24">
            {children}
        </div>
    );
};

// ============================ RIGHT SIDE ============================ //

/*
<div
    className="relative bg-cover bg-center"
    // style={{ backgroundImage: `url(${imageUrl})` }}
>
    <div className={`absolute inset-0 bg-(${className}) opacity-70`}></div>
    <div className="relative h-full flex items-center p-12 lg:p-24">
        <p className="text-lg leading-relaxed">
            Meet with our multidisciplinary team of experienced therapists
            who specialize in a wide range of approaches. We offer
            personalized psychotherapy tailored to your unique needs,
            fostering a safe and confidential space for growth and healing.
            <br />
            <br />
            From evidence-based practices like CBT and EMDR to relational,
            psychodynamic, and integrative approaches, our clinicians are
            here to support your path toward clarity, balance, and
            resilience.
        </p>
    </div>
</div>;
*/

const TitleRightContent: React.FC<{
    children: React.ReactNode;
    className?: string | undefined;
}> = ({ children, className }) => {
    // w-4/5 text-white flex items-center justify-center
    const tw_styles = twMerge(
        "text-white flex items-center justify-center lg:text-xl text-center font-bold w-fit",
        className,
    );
    return <div className={tw_styles}>{children}</div>;
};

const TitleRight: React.FC<{
    children: React.ReactNode;
    className?: string | undefined;
}> = ({ children, className }) => {
    // border-t-8 p-4 w-1/5
    const tw_styles = twMerge("border-t-8 p-4 w-full", className);
    return (
        <div className="flex w-full">
            {children}

            <div className={tw_styles}></div>
        </div>
    );
};

const ParagraphContent: React.FC<{
    children: React.ReactNode;
    className?: string | undefined;
}> = ({ children, className }) => {
    const tw_styles = twMerge("text-lg leading-relaxed", className);
    return <p className={tw_styles}>{children}</p>;
};

const RightColumn: React.FC<{
    children: React.ReactNode;
    imageUrl: string;
}> = ({ children, imageUrl }) => {
    return (
        <div
            className="relative bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="relative h-full flex items-center p-6 md:p-12 lg:p-24">
                {children}
            </div>
        </div>
    );
};

const TwoColLayout: React.FC<{
    id: string;
    children: React.ReactNode;
}> = ({ id, children }) => {
    return (
        <section
            id={id}
            className={`min-h-screen grid grid-cols-1 md:grid-cols-2`}
        >
            {children}
        </section>
    );
};

export default TwoColLayout;

export {
    LeftColumn,
    RightColumn,
    TitleLeft,
    SubTitleLeft,
    ButtonLeft,
    ParagraphContent,
    TitleRight,
    TitleRightContent,
};
