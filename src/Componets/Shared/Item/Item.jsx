

const Item = ({ item }) => {
    const { name, recipe, image, price } = item;
    
    return (
        <div className="flex gap-2 mx-auto px-2">
            <img style={{borderRadius:'0px 50% 50% 50%' }} className="md:w-20 md:h-20 w-16 h-16 " src={image} alt="" />
            <div>
                <h1 className="text-xl">{name}------------</h1>
                <p>{ recipe}</p>
            </div>
            <p className="text-[#BB8506] ">${ price}</p>
        </div>
    );
};

export default Item;