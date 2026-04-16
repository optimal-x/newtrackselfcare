import LANDING_VIDEO from "../assets/hero-video.webm";
import HERO_SVG_MOBILE from "../assets/mobilelanding.webp";

const DesktopHero: React.FC = () => (
    <section className="w-full h-full hidden md:block">
        <div className="h-full w-full object-cover flex justify-center">
            <video
                typeof="video/webm"
                src={LANDING_VIDEO}
                className=""
                autoPlay
                muted
                loop
            ></video>
        </div>
    </section>
);

const MobileHero: React.FC = () => (
    <section className="block md:hidden flex justify-center mb-2">
        <img src={HERO_SVG_MOBILE} alt="Newtrack Logo Cutout" />
        <br />
    </section>
);

const Hero = () => {
    return (
        <section>
            {/*active on desktop viewport only*/}
            <DesktopHero />
            {/*active on mobile only*/}
            <MobileHero />
        </section>
    );
};

export default Hero;
