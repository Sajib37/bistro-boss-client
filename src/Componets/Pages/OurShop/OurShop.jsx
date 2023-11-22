import { Helmet } from "react-helmet-async";
import BannerCover from "../../Shared/BannerCover/BannerCover";
import shopBanner from "../../../assets/shop/banner2.jpg"


const OurShop = () => {
    return (
        <section>
            <Helmet>
                <title>Bistro Boss || Our Shop </title>
            </Helmet>
            <BannerCover image={shopBanner} heading={'Our Shop'} subHeading={'Would you like to try a dish?'}></BannerCover>
        </section>
    );
};

export default OurShop;