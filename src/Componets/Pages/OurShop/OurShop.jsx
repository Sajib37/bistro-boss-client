import { Helmet } from "react-helmet-async";
import BannerCover from "../../Shared/BannerCover/BannerCover";
import shopBanner from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import useMenu from "../../../hooks/useMenu";
import ShowCategory from "./ShowCategory/ShowCategory";



const OurShop = () => {

    const [drinksItem, setDrinksItem] = useState([]);
    const [desertitem, setDesertItem] = useState([]);
    const [pizzaItem, setPizzaItem] = useState([]);
    const [saladItem, setSaladItem] = useState([]);
    const [soupItem, setSoupItem] = useState([]);

    const [menu] = useMenu();

    useEffect(() => {
        if (menu) {
            setDrinksItem(menu.filter(item=>item.category=='drinks'))
            setDesertItem(menu.filter(item=>item.category=='dessert'))
            setPizzaItem(menu.filter(item=>item.category=='pizza'))
            setSaladItem(menu.filter(item=>item.category=='salad'))
            setSoupItem(menu.filter(item=>item.category=='soup'))
        }
    }, [menu])
    
    return (
        <section>
            <Helmet>
                <title>Bistro Boss || Our Shop </title>
            </Helmet>
            <BannerCover image={shopBanner} heading={'Our Shop'} subHeading={'Would you like to try a dish?'}></BannerCover>

            {/* Tabs */}
            <section className="my-8 md:my-12 lg:my-16 max-w-screen-xl mx-auto">
                
                <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
                    <TabList>
                    <Tab ><p className="uppercase font-semibold text-sm md:text-base">Salad</p></Tab>
                    <Tab ><p className="uppercase font-semibold text-sm md:text-base">pizza</p></Tab>
                    <Tab ><p className="uppercase font-semibold text-sm md:text-base">soup</p></Tab>
                    <Tab ><p className="uppercase font-semibold text-sm md:text-base">dessert</p></Tab>
                    <Tab ><p className="uppercase font-semibold text-sm md:text-base">drinks</p></Tab>
                    
                    </TabList>

                    <TabPanel>
                        <ShowCategory title='salad' items={saladItem}></ShowCategory>
                    </TabPanel>
                    <TabPanel>
                        <ShowCategory items={pizzaItem}></ShowCategory>
                    </TabPanel>
                    <TabPanel>
                        <ShowCategory items={soupItem}></ShowCategory>
                    </TabPanel>
                    <TabPanel>
                        <ShowCategory items={desertitem}></ShowCategory>
                    </TabPanel>
                    <TabPanel>
                        <ShowCategory items={drinksItem}></ShowCategory>
                    </TabPanel>

                </Tabs>
            </section>
        </section>
    );
};

export default OurShop;