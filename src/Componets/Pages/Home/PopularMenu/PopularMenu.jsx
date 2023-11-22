import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Item from "../../../Shared/Item/Item";
import useMenu from "../../../../hooks/useMenu";
import ShowItem from "../../../Shared/ShowItem/ShowItem";

const PopularMenu = () => {
    const [popularItem, setPopularItem] = useState([]);
    const [menu, loading] = useMenu();

    useEffect(() => {
        if (menu) {
        setPopularItem(menu.filter(item=>item.category=='popular'))
    }
    },[menu])
    
    return (
        <section className="mt-16">
            <SectionTitle subHeading='Check it Out' heading='FROM OUR MENU'></SectionTitle>
            <ShowItem items={popularItem} btnText={'View Full menu'}></ShowItem>
        </section>
    );
};

export default PopularMenu;