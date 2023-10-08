import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import { MdOutlinePhonelinkRing } from "react-icons/md";

const Info = () => {
    return (
        <section id="info">
            <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row md:space-x-4">
                <div className="flex flex-col space-y-6 min-w-min self-center md:self-start">
                    {/* Social Media */}
                    <div className="flex flex-row space-x-6 self-center md:self-start">
                        <BiLogoFacebook size="32" className="social-media-icon" />
                        <BiLogoInstagramAlt size="32" className="social-media-icon" />
                        <BiLogoTwitter size="32" className="social-media-icon" />
                        <BiLogoYoutube size="32" className="social-media-icon" />
                    </div>
                    {/* Address */}
                    <p className="max-w-xs text-center md:text-left">Hunters Point Blvd & Hawes St, 950 Galvez Ave, San Francisco, CA 94124</p>
                </div>
                {/* Phone */}
                <div className="flex space-x-1 items-center mx-auto md:mx-0">
                    <MdOutlinePhonelinkRing size="48" />
                    <div className="flex flex-col">
                        <strong>More infomation call us</strong>
                        <span className="text-emerald-500 font-bold text-xl">+91-878787-12345</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;