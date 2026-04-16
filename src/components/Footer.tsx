import FB_ICON from "../assets/footer-images/Facebook.svg";
import IG_ICON from "../assets/footer-images/Instagram.svg";
import TYPEOGR from "../assets/footer-images/NewTrack Calligraphy White.svg";
import NEWTRACK_ICON from "../assets/footer-images/NewTrack Sun Icon - Dark Green.svg";
import YT_ICON from "../assets/footer-images/YouTube.svg";

// Footer.tsx
function Footer() {
    return (
        <footer>
            <section className="bg-(--pine-tree) text-white pt-32">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div></div>
                    {/* Explore */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2 text-lg">
                            <li>
                                <a
                                    href="#offerings"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#philosophy"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Our Philosophy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#locations"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Locations
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Socials</h3>
                        <ul className="space-y-2 text-lg">
                            <li className="flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <img
                                        src={IG_ICON}
                                        alt="Instagram"
                                        className="w-[3em] md:w-[1em] object-contain"
                                    />
                                </span>
                                <a
                                    href="https://instagram.com/newtrackselfcare"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-400 transition-colors"
                                >
                                    @newtrackselfcare
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <img
                                        src={FB_ICON}
                                        alt="Facebook"
                                        className="w-[3em] md:w-[1em] object-contain"
                                    />
                                </span>
                                <a
                                    href="https://facebook.com/newtrackselfcare"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-500 transition-colors"
                                >
                                    @newtrackselfcare
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <img
                                        src={YT_ICON}
                                        alt="Youtube"
                                        className="w-[3em] md:w-[1em] object-contain"
                                    />
                                </span>
                                <a
                                    href="https://youtube.com/@thetripwithin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-red-500 transition-colors"
                                >
                                    @thetripwithin
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-2 text-lg">
                            <li>
                                <a
                                    href="mailto:info@newtrackselfcare.com"
                                    className="hover:text-green-400 transition-colors"
                                >
                                    info@newtrackselfcare.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Typography Bar */}
                <div className="flex items-end justify-center w-full pt-72">
                    <img
                        src={TYPEOGR}
                        alt="Newtrack Caligraphy"
                        className="w-full"
                    />
                </div>
            </section>

            {/* Bottom Bar */}
            <section className="flex items-center justify-start gap-2">
                <span className="flex-shrink-0 md:pl-24 translate-y-3">
                    <img
                        src={NEWTRACK_ICON}
                        alt="Newtrack Icon"
                        className="w-[5rem] object-contain"
                    />
                </span>
                <div className="mt-10 bg-white pt-4 text-left text-xl font-bold text-(--kombu-green) pb-4">
                    © {new Date().getFullYear()} New Track Self Care. All rights
                    reserved.
                </div>
            </section>
            <div className="h-24"></div>
            <div className="mt-10 bg-white pt-4 text-center text-sm font-bold text-(--kombu-green) pb-4 hover:text-(--pine-tree) hover:cursor-pointer">
                Created by{" "}
                <a
                    href="https://www.linkedin.com/in/daniel-herrera-vazquez/"
                    target="_blank"
                    rel="noopener"
                >
                    Daniel Herrera
                </a>
            </div>
        </footer>
    );
}

export default Footer;
