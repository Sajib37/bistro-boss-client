import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Item from "../../../Shared/Item/Item";

const PopularMenu = () => {

    const [popularItem, setPopularItem] = useState(null);
    useEffect(() => {
        fetch('./menu.json')
            .then(res => res.json())
            .then(data => {
                const items = data.filter(item => item.category == 'popular')
                setPopularItem(items)
            })
        
    }, [])


    
    return (
        <section className="mt-16">
            <SectionTitle subHeading='Check it Out' heading='FROM OUR MENU'></SectionTitle>
            {
                popularItem &&
                <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4 mt-12 my-8">
                    {
                        popularItem.map((item,idx)=><Item key={idx} item={item}></Item>)
                    }
                </div>
            }
            <button className="uppercase text-xl block font-medium border-black mx-auto border-b-2 px-2 hover:border-2 hover:bg-black hover:text-white hover:rounded-lg rounded-b-lg mb-4">View full menu</button>
        </section>
    );
};

export default PopularMenu;