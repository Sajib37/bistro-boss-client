

const Item = ({ item }) => {
    const { name, recipe, image, price } = item;
    
    return (
        <div className="flex gap-2 mx-auto px-2">
            <img style={{borderRadius:'0px 50% 50% 50%' }} className="w-20 h-20 " src={image} alt="" />
            <div>
                <h1 className="text-xl">{name}------------</h1>
                <p>{ recipe}</p>
            </div>
            <p className="text-[#BB8506] ">${ price}</p>
        </div>
    );
};

export default Item;