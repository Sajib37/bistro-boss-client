import { Helmet } from "react-helmet-async";
import BannerCover from "../../Shared/BannerCover/BannerCover";
import conatctBanner from "../../../assets/contact/banner.jpg"
import Location from "./Location/Location";
import Contact from "./Contact/Contact";

const ContactUs = () => {
    return (
        <section>
            <Helmet>
                <title>Bistro Boss || Contact</title>
            </Helmet>
            <BannerCover image={conatctBanner} heading={'Contact Us'} subHeading={'Would you like to try a dish?'}></BannerCover>
            <Location></Location>
            <Contact></Contact>
        </section>
    );
};

export default ContactUs;