/// images
import ONE_PSYCHOTHERAPY from "./assets/1-Psychotherapy.webp";
import TWO_PSYCHEDLIC from "./assets/2-Psychedelic.webp";
import THR_MEDITATION from "./assets/3-Meditation.webp";
import FOR_HOLISTIC from "./assets/4-Holistic.webp";
import FIV_ADVANCED_CLINICAL from "./assets/5-Advancedclinical.webp";
import SIX_SYSTEMIC from "./assets/6-Systemic.webp";
import SVN_GROUP_THERAPY from "./assets/7-Grouptherapy.webp";
import REFERRAL_FORM from "./assets/pdf-forms/Physician-Referral.pdf";
import Footer from "./components/Footer";

/// components
import Hero from "./components/Hero";
import {
    LocationIntro,
    LondonClinic,
    VaughanClinic,
} from "./components/Location";
import Navigation from "./components/Navbar";
import Offerings from "./components/Offerings";
import Philosophy from "./components/Philosophy";
import ScrollToTop from "./components/ScrollToTop";
import TwoColLayout, {
    ButtonLeft,
    LeftColumn,
    ParagraphContent,
    RightColumn,
    SubTitleLeft,
    TitleLeft,
    TitleRight,
    TitleRightContent,
} from "./components/TwoColumnFill";

/* psychotherapy:
	--congo-pink: rgb(243 136 123);
	--middle-red-purple: rgb(159 79 69);
 */
const PsychotherapySection = () => (
    <TwoColLayout id="psychotherapy">
        <LeftColumn>
            <TitleLeft className="text-(--middle-red-purple)">
                <span>Psycho</span>
                <br />
                <span>Therapy</span>
                <br />
            </TitleLeft>
            <SubTitleLeft className="text-(--congo-pink)">
                Personal Support
            </SubTitleLeft>
            <ButtonLeft
                className="bg-(--middle-red-purple) hover:bg-(--congo-pink)"
                // href="#psychotherapy"
                //#1
                link1="https://newtrackselfcare.janeapp.com/locations/general-therapy-vaughan/book"
                //#2
                link2="https://newtrackselfcare.janeapp.com/locations/general-therapy-london/book"
            >
                Book a Session
            </ButtonLeft>
        </LeftColumn>
        <RightColumn imageUrl={ONE_PSYCHOTHERAPY}>
            <ParagraphContent>
                <div className="md:h-70"></div>
                <p>
                    Meet with our multidisciplinary team of experienced
                    therapists who specialize in a wide range of approaches. We
                    offer personalized psychotherapy tailored to your unique
                    needs, fostering a safe and confidential space for growth
                    and healing.
                </p>
                <br />
                <p>
                    From evidence-based practices like CBT and EMDR to
                    relational, psychodynamic, and integrative approaches, our
                    clinicians are here to support your path toward clarity,
                    balance, and resilience.
                </p>
            </ParagraphContent>
        </RightColumn>
    </TwoColLayout>
);

/* psychedelic
    --laurel-green: rgb(167 191 164);
    --ebony: rgb(83 100 64);
    --pine-tree: rgb(42 56 30);
*/
const PsychedlicSection = () => (
    <TwoColLayout id="psychedelic">
        <LeftColumn>
            <TitleLeft className="text-(--ebony)">
                <span className="text-4xl">Psychedelic</span>
                <br />
                Assisted
                <br />
                Therapy
                <br />
            </TitleLeft>
            <SubTitleLeft className="text-(--laurel-green)">
                A New Path to Healing
            </SubTitleLeft>
            <ButtonLeft
                className={"bg-(--pine-tree) hover:bg-(--laurel-green)"}
                //#3
                href="https://newtrackselfcare.janeapp.com/locations/information-call/book#staff_member/47"
            >
                Book an info call
            </ButtonLeft>
        </LeftColumn>
        <RightColumn imageUrl={TWO_PSYCHEDLIC}>
            <ParagraphContent>
                <div className="md:h-40"></div>
                <TitleRight className="border-(--pine-tree)">
                    <TitleRightContent className="bg-(--pine-tree)">
                        <h5 className="p-2 whitespace-nowrap">
                            Explore Potential
                        </h5>
                    </TitleRightContent>
                </TitleRight>
                <p className="pl-6 text-lg">
                    Discover if psychedelic-assisted therapy could be a
                    transformative option for your mental health journey. We
                    offer a carefully guided and safe environment for this
                    innovative approach.
                </p>
                <br />
                <TitleRight className="border-(--pine-tree)">
                    <TitleRightContent className="bg-(--pine-tree)">
                        <h5 className="p-2 whitespace-nowrap">
                            Personalized Assessment
                        </h5>
                    </TitleRightContent>
                </TitleRight>
                <p className="pl-6 text-lg">
                    Reach out to our team for a comprehensive assessment to
                    determine if this unique therapy is the right fit for your
                    specific needs and goals.
                </p>
                <br />
                <p className="pl-6 text-sm text-center">
                    This therapy is administered under strict medical
                    supervision, following the current Canadian guidelines and
                    emphasizing safety, integration, and a supportive
                    therapeutic framework for profound insights and lasting
                    changes. It is not a first-line treatment.
                </p>

                <div className="flex justify-center content-center mt-5">
                    <ButtonLeft
                        className={
                            "bg-(--pine-tree) hover:bg-(--laurel-green) rounded"
                        }
                        href={REFERRAL_FORM}
                    >
                        Referral Form
                    </ButtonLeft>
                </div>
            </ParagraphContent>
        </RightColumn>
    </TwoColLayout>
);

/* Mindful Meditation:
	--air-superiority-blue: rgba(119, 160, 184, 0.8);
	--police-blue: rgb(64 90 100);
 */
const MindfulMeditationSection = () => (
    <TwoColLayout id="mindful-meditation">
        <LeftColumn>
            <TitleLeft className="text-(--police-blue)">
                <span>Mindful </span>
                <br />
                <span>Movement and</span>
                <br />
                <span>Meditation</span>
                <br />
            </TitleLeft>
            <SubTitleLeft className="text-(--air-superiority-blue)">
                <span>Classes for All</span>
            </SubTitleLeft>
            <ButtonLeft
                className="bg-(--police-blue) hover:bg-(--air-superiority-blue)"
                //#4
                href="https://www.eventbrite.com/o/new-track-selfcare-104780880591"
            >
                <span>Check out our offerings here</span>
            </ButtonLeft>
        </LeftColumn>
        <RightColumn imageUrl={THR_MEDITATION}>
            <ParagraphContent>
                <div className="md:h-60"></div>
                <p>
                    Our in-clinic yoga studio offers a variety of classes
                    designed for all levels of practice, from beginners to
                    advanced practitioners. Embrace mindful movement and
                    meditation to enhance your physical and mental well-being.
                </p>
                <br />
                <p>
                    Classes focus on breathwork, gentle stretches, and guided
                    meditation to reduce stress, improve focus, and cultivate
                    inner calm.
                </p>
            </ParagraphContent>
        </RightColumn>
    </TwoColLayout>
);

/* Holistic Body Work
	--congo-pink: rgb(243 136 123);
	--middle-red-purple: rgb(159 79 69);
 */
const HolisticBodyWorkSection = () => (
    <TwoColLayout id="holistic-body-work">
        <LeftColumn>
            <TitleLeft className="text-(--middle-red-purple)">
                <span>Holistic</span>
                <br />
                <span>Body Work</span>
                <br />
            </TitleLeft>
            <SubTitleLeft className="text-(--congo-pink)">
                <span>Restore Your Balance</span>
            </SubTitleLeft>
            <ButtonLeft
                className={"bg-(--middle-red-purple) hover:bg-(--congo-pink)"}
                // href="."
                //#5
                link1="https://newtrackselfcare.janeapp.com/locations/integrative-health-vaughan/book"
                //#6
                link2="https://newtrackselfcare.janeapp.com/locations/integrative-health-london/book"
                // href="."
            >
                <span>Book a Session</span>
            </ButtonLeft>
        </LeftColumn>
        <RightColumn imageUrl={FOR_HOLISTIC}>
            <ParagraphContent>
                <div className="md:h-40"></div>
                <TitleRight className="border-(--middle-red-purple)">
                    <TitleRightContent className="bg-(--middle-red-purple)">
                        <h5 className="p-2 whitespace-nowrap">
                            Massage Therapy
                        </h5>
                    </TitleRightContent>
                </TitleRight>
                <p className="pl-6 text-lg">
                    Release tension and improve circulation with therapeutic
                    touch.
                </p>
                <br />
                <TitleRight className="border-(--bole)">
                    <TitleRightContent className="bg-(--bole)">
                        <h5 className="p-2">Acupuncture</h5>
                    </TitleRightContent>
                </TitleRight>
                <p className="pl-6 text-lg">
                    Balance your energy and address deep-rooted imbalances.
                </p>
                <br />
                <TitleRight className="border-(--middle-red-purple)">
                    <TitleRightContent className="bg-(--middle-red-purple)">
                        <h5 className="p-2 whitespace-nowrap">Sound Healing</h5>
                    </TitleRightContent>
                </TitleRight>
                <p className="pl-6 text-lg">
                    Restore harmony through vibrations and resonance.
                </p>
                <br />
                <p className="pl-6 text-sm text-right font-bold">
                    Our body work services complement your mental wellness
                    journey, promoting holistic healing and well-being.
                </p>
            </ParagraphContent>
        </RightColumn>
    </TwoColLayout>
);

/* Advanced Clinical Services
	--laurel-green: rgb(167 191 164);
	--ebony: rgb(83 100 64);
	--pine-tree: rgb(42 56 30);
 */
const AdvancedClinicalServicesSection = () => (
    <TwoColLayout id="advanced-clinical-services">
        <LeftColumn>
            <TitleLeft className="text-(--ebony)">
                <span>Advanced</span>
                <br />
                <span>Clinical</span>
                <br />
                <span>Services</span>
                <br />
            </TitleLeft>
            <SubTitleLeft className="text-(--laurel-green)"> </SubTitleLeft>
            <ButtonLeft
                className={"bg-(--pine-tree) hover:bg-(--laurel-green)"}
                //#7
                href="https://newtrackselfcare.janeapp.com/locations/information-call/book#staff_member/47"
            >
                Book a Call
            </ButtonLeft>
        </LeftColumn>
        <RightColumn imageUrl={FIV_ADVANCED_CLINICAL}>
            <ParagraphContent>
                <div className="md:h-40"></div>
                <TitleRight className="border-(--ebony)">
                    <TitleRightContent className="bg-(--ebony)">
                        <h5 className="p-2 whitespace-nowrap">rTMS Therapy</h5>
                    </TitleRightContent>
                </TitleRight>
                <p className="pl-6 text-lg">
                    Experience a safe, non-invasive, and medication-free
                    approach to mental wellness. TMS uses targeted magnetic
                    pulses to activate key areas of the brain and has been
                    clinically shown to significantly reduce symptoms of
                    depression, anxiety, and OCD—often within just a few weeks,
                    and with minimal side effects.{" "}
                </p>
                <br />
                <TitleRight className="border-(--pine-tree)">
                    <TitleRightContent className="bg-(--pine-tree)">
                        <h5 className="p-2 whitespace-nowrap">IV Therapy</h5>
                    </TitleRightContent>
                </TitleRight>
                <p className="pl-6 text-lg">
                    Nutrients and injections to support your physical and mental
                    health at a cellular level.
                </p>
                <br />
                <TitleRight className="border-(--ebony)">
                    <TitleRightContent className="bg-(--ebony)">
                        <h5 className="p-2 whitespace-nowrap">
                            Holistic Nutrition
                        </h5>
                    </TitleRightContent>
                </TitleRight>
                <p className="pl-6 text-lg">
                    Personalized dietary guidance to optimize brain function and
                    overall well-being.
                </p>
                <br />
            </ParagraphContent>
        </RightColumn>
    </TwoColLayout>
);

/* Systemic Change Therapy:
	--air-superiority-blue: rgba(119, 160, 184, 0.8);
	--police-blue: rgb(64 90 100);
*/
const SystemicChangeSection = () => (
    <TwoColLayout id="systemic-change-therapy">
        <LeftColumn>
            <TitleLeft className="text-(--police-blue)">
                <span>Systemic </span>
                <br />
                <span>Change</span>
                <br />
                <span>Therapies</span>
                <br />
            </TitleLeft>
            <SubTitleLeft className="text-(--air-superiority-blue)">
                {""}
            </SubTitleLeft>
            <ButtonLeft
                className="bg-(--police-blue) hover:bg-(--air-superiority-blue)"
                //#8
                // href="#systemic-change-therapy"
            >
                {/*<span>Join the waitlist</span>*/}
                <span>Coming Soon</span>
            </ButtonLeft>
        </LeftColumn>
        <RightColumn imageUrl={SIX_SYSTEMIC}>
            <ParagraphContent>
                <div className="md:h-40"></div>
                <TitleRight className="border-(--police-blue)">
                    <TitleRightContent className="bg-(--police-blue)">
                        <h5 className="p-2 whitespace-nowrap">Light Therapy</h5>
                    </TitleRightContent>
                </TitleRight>
                <p className="pl-6 text-lg">
                    Utilizing specific light wavelengths to regulate mood, sleep
                    patterns, and energy levels.
                </p>
                <br />
                <TitleRight className="border-(--police-blue)">
                    <TitleRightContent className="bg-(--police-blue)">
                        <h5 className="p-2 whitespace-nowrap">Sound Therapy</h5>
                    </TitleRightContent>
                </TitleRight>
                <p className="pl-6 text-lg">
                    Harnessing therapeutic sounds and frequencies to promote
                    deep relaxation and mental clarity.
                </p>
                <br />
                <p className="pl-6 text-sm text-center font-bold">
                    These innovative therapies aim to create profound, lasting
                    changes at a systemic level, enhancing your mental state.
                </p>
                <br />
            </ParagraphContent>
        </RightColumn>
    </TwoColLayout>
);

/* Workshops And Group Therapy:
	--congo-pink: rgb(243 136 123);
	--middle-red-purple: rgb(159 79 69);
 */
const WorkshopSection = () => (
    <TwoColLayout id="workshops-and-group-therapy">
        <LeftColumn>
            <TitleLeft className="text-(--middle-red-purple)">
                <span>Workshops</span>
                <br />
                <span>& Group</span>
                <br />
                <span> Therapy</span>
                <br />
            </TitleLeft>
            <SubTitleLeft className="text-(--congo-pink)">
                Build Community
            </SubTitleLeft>
            <ButtonLeft
                className="bg-(--middle-red-purple) hover:bg-(--congo-pink)"
                // href="#workshops-and-group-therapy" // TODO: change to bookings later
            >
                {/*<span>Join our Newsletter</span>*/}
                <span>Newsletter: Coming Soon</span>
            </ButtonLeft>
        </LeftColumn>
        <RightColumn imageUrl={SVN_GROUP_THERAPY}>
            <ParagraphContent>
                <div className="md:h-70"></div>
                <p>
                    Join our workshops and group therapy sessions to connect
                    with others who share similar experiences. These sessions
                    foster a supportive community built around what truly
                    matters: <span className="font-bold">your well-being.</span>
                </p>
                <br />
                <p>
                    Explore topics from stress management and life transitions
                    to grief support in an inclusive, empathetic space that
                    encourages shared learning and lasting growth.
                </p>
            </ParagraphContent>
        </RightColumn>
    </TwoColLayout>
);

const App = () => {
    return (
        <main>
            <Navigation className="focus" />
            <Hero />
            <Philosophy />
            <Offerings />
            <article>
                <PsychotherapySection />
                <PsychedlicSection />
                <MindfulMeditationSection />
                <HolisticBodyWorkSection />
                <AdvancedClinicalServicesSection />
                <SystemicChangeSection />
                <WorkshopSection />
            </article>
            <LocationIntro />
            <LondonClinic />
            <VaughanClinic />
            <ScrollToTop />
            <Footer />
        </main>
    );
};

export default App;
