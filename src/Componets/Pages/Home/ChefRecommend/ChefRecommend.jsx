import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

import { useEffect, useState } from 'react';
import ItemCard from '../../../Shared/ItemCard/ItemCard';

const ChefRecommend = () => {

    const [ofeeredItem, setOfferedItem] = useState(null)
    
    useEffect(() => {
        fetch('./menu.json')
            .then(res => res.json())
            .then(data => {
                const items = data.filter(item => item.category == 'offered')
                setOfferedItem(items)
            })
        
    }, [])

    return (
        <section>
            <SectionTitle subHeading='Should Try' heading='CHEF RECOMMENDS'></SectionTitle>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                {
                    ofeeredItem &&
                    ofeeredItem.map((item,idx)=><ItemCard key={idx} item={item}></ItemCard>)
                }
            </div>
        </section>
    );
};

export default ChefRecommend;