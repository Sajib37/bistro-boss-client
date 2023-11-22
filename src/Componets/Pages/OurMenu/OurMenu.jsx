import { Helmet } from "react-helmet-async";

import banner3 from '../../../assets/menu/banner3.jpg'
import menuBg from '../../../assets/menu/menu-bg.png'
import BannerCover from "../../Shared/BannerCover/BannerCover";
import { useEffect, useState } from "react";
import useMenu from "../../../hooks/useMenu";
import ShowItem from "../../Shared/ShowItem/ShowItem";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle"
import HeroPart from "../../Shared/HeroPart/HeroPart";
import desertbg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaBG from "../../../assets/menu/pizza-bg.jpg"
import saladBG from "../../../assets/menu/salad-bg.jpg"
import soupBg from "../../../assets/menu/soup-bg.jpg"

const OurMenu = () => {
    const [offerItem, setOfferItem] = useState([]);
    const [desertitem, setDesertItem] = useState([]);
    const [pizzaItem, setPizzaItem] = useState([]);
    const [saladItem, setSaladItem] = useState([]);
    const [soupItem, setSoupItem] = useState([]);

    const [menu] = useMenu();

    useEffect(() => {
        if (menu) {
            setOfferItem(menu.filter(item=>item.category=='offered'))
            setDesertItem(menu.filter(item=>item.category=='dessert'))
            setPizzaItem(menu.filter(item=>item.category=='pizza'))
            setSaladItem(menu.filter(item=>item.category=='salad'))
            setSoupItem(menu.filter(item=>item.category=='soup'))
        }
    },[menu])

    return (
        <section style={{ backgroundImage: `url(${menuBg})`, backgroundSize: "cover" ,backgroundPosition:'center' ,backgroundRepeat:'no-repeat' }} >
            <Helmet>
                <title>Bistro Boss || Our Menu </title>
            </Helmet>

            <BannerCover image={banner3} heading={'Our Menu'} subHeading={"Would like to try a dish?"}></BannerCover>
            
            {/* offered items */}
            <div className="lg:my-16 md:my-12 my-10 ">
                <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
                <div>
                    <ShowItem items={offerItem} btnText={'Order Your Favourite food'} ></ShowItem>
                </div>
            </div>

            {/* desert Items */}
            <section>
                <HeroPart heading={"Deserts"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} image={desertbg}></HeroPart>
                <div className="my-8 md:my-12 lg:my-16">
                    <ShowItem items={desertitem} btnText={'Order your favourite food'}></ShowItem>
                </div>
            </section>

            {/* Pizza Items */}
            <section>
                <HeroPart heading={"Pizza"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} image={pizzaBG}></HeroPart>
                <div className="my-8 md:my-12 lg:my-16">
                    <ShowItem items={pizzaItem} btnText={'Order your favourite food'}></ShowItem>
                </div>
            </section>

            {/* Salad Items */}
            <section>
                <HeroPart heading={"Salads"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} image={saladBG}></HeroPart>
                <div className="my-8 md:my-12 lg:my-16">
                    <ShowItem items={saladItem} btnText={'Order your favourite food'}></ShowItem>
                </div>
            </section>

            {/* Soup Items */}
            <section>
                <HeroPart heading={"Soups"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} image={soupBg}></HeroPart>
                <div className="mt-8  pb-4 md:mt-12 md:pb-8  lg:mt-16 lg:pb-12 ">
                    <ShowItem items={soupItem} btnText={'Order your favourite food'}></ShowItem>
                </div>
            </section>


        </section>
    );
};

export default OurMenu;