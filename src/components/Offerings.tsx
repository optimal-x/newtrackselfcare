/// libs
import { twMerge } from "tailwind-merge";

/// images
import ADVANCEDCLINICAL_SQUARE from "../assets/services-squares/advancedclinical-square.webp";
import GROUPTHERAPY_SQUARE from "../assets/services-squares/Grouptherapy-square.webp";
import HOLISTIC_SQUARE from "../assets/services-squares/holistic-square.webp";
import MEDITATION_SQUARE from "../assets/services-squares/meditation-square.webp";
import OFFERINGS_HEADING from "../assets/services-squares/NT-services-heading.svg";
import PSYCHEDELIC_SQUARE from "../assets/services-squares/Psychedelic-square.webp";
import PSYCHOTHERAPY_SQUARE from "../assets/services-squares/Psychotherapy-square.webp";
import SYSTEMIC_SQUARE from "../assets/services-squares/systemic-square.webp";

const SquareImg = (props: any) => {
    const twstyles_img = twMerge(
        "bg-cover bg-center transition-transform duration-500 group-hover:scale-125",
        props.className,
    );

    return <img src={props.src} className={twstyles_img} alt={props.alt} />;
};

const OfferingsContaienr = (props: any) => {
    const twstyles_container = twMerge("md:flex mt-6", props.className);
    return (
        <div id={props.id} className={twstyles_container}>
            {props.children}
        </div>
    );
};

const ServiceName = (props: any) => {
    const twstyles_parent = twMerge(
        "absolute inset-0 bg-black/40 flex items-end justify-start p-4 hover:bg-white/20",
        props.className,
    );
    const twstyles_h3 = twMerge(
        "text-white text-xl font-bold text-left leading-tight",
        props.className,
    );

    return (
        <div className={twstyles_parent}>
            <h3 className={twstyles_h3}>{props.children}</h3>
        </div>
    );
};

const ServiceBox = (props: any) => {
    const tw_styles = twMerge(
        "bg-cover bg-center transition-transform duration-500 group-hover:scale-125",
        "relative aspect-square overflow-hidden group object-fill h-fit w-full",
        props.className,
    );

    return (
        <div className={tw_styles}>
            {props.children && <a href={props.href}>{props.children}</a>}
        </div>
    );
};

const Offerings = () => {
    return (
        <OfferingsContaienr
            className="mb-10 flex justify-center"
            id="offerings"
        >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                <div
                    className="w-full md:basis-1/2 content-center z-2 md:flex-row"
                    style={{ backgroundImage: OFFERINGS_HEADING }}
                >
                    <img
                        src={OFFERINGS_HEADING}
                        alt="NewTrack Offerings Typography"
                    />
                </div>
                <div className="flex w-full flex-row md:basis-1/2">
                    <div className="grid grid-cols-1 w-fill h-fill sm:grid-cols-2 lg:grid-cols-4 md:gap-8 z-2 grow">
                        {
                            // Subtitle
                        }
                        <div></div>

                        {
                            /// all 7 Services
                        }
                        <ServiceBox href="#psychotherapy">
                            <SquareImg
                                src={PSYCHOTHERAPY_SQUARE}
                                alt="Person meditating in a yoga pose"
                            />
                            <ServiceName href="#psychotherapy">
                                Psycho
                                <br />
                                Therapy
                            </ServiceName>
                        </ServiceBox>

                        <ServiceBox href="#psychedelic">
                            <SquareImg
                                src={PSYCHEDELIC_SQUARE}
                                alt="Person wearing an eye mask and headphones"
                            />
                            <ServiceName href="#psychedelic">
                                Psychedelic
                                <br />
                                Assisted Therapy
                            </ServiceName>
                        </ServiceBox>

                        <ServiceBox href="#mindful-meditation">
                            <SquareImg
                                src={MEDITATION_SQUARE}
                                alt="Person meditating in a yoga pose"
                            />
                            <ServiceName>
                                Mindful
                                <br />
                                Movement &<br />
                                Meditation
                            </ServiceName>
                        </ServiceBox>

                        <ServiceBox href="#holistic-body-work">
                            <SquareImg
                                src={HOLISTIC_SQUARE}
                                alt="Acupuncture needles in a person's hand"
                            />
                            <ServiceName href="#holistic-body-work">
                                Holistic
                                <br />
                                Body Work
                            </ServiceName>
                        </ServiceBox>

                        <ServiceBox href="#advanced-clinical-services">
                            <SquareImg
                                src={ADVANCEDCLINICAL_SQUARE}
                                alt="Man receiving a clinical treatment on his head"
                            />
                            <ServiceName href="">
                                Advanced
                                <br />
                                Clinical Services
                            </ServiceName>
                        </ServiceBox>

                        <ServiceBox href="#systemic-change-therapy">
                            <SquareImg
                                src={SYSTEMIC_SQUARE}
                                alt="Person sitting next to a singing bowl"
                            />
                            <ServiceName href="">
                                <span>Systemic</span>
                                <br />
                                <span>Change Therapies</span>
                            </ServiceName>
                        </ServiceBox>

                        <ServiceBox href="#workshops-and-group-therapy">
                            <SquareImg
                                src={GROUPTHERAPY_SQUARE}
                                alt="Group of people in a workshop setting"
                            />
                            <ServiceName href="">
                                <span>Workshops</span>
                                <br />
                                <span>& Group Therapy</span>
                            </ServiceName>
                        </ServiceBox>
                    </div>
                </div>
            </div>
        </OfferingsContaienr>
    );
};

export default Offerings;
