import Item from "../../../Componets/Shared/Item/Item";
const ShowItem = ({ items , btnText}) => {
    return (
        <section>
            <section className="max-w-screen-xl mx-auto grid lg:grid-cols-2 grid-cols-1 px-2 gap-4 md:gap-6">
                {
                    items.slice(0,6).map((item,idx)=><Item key={idx} item={item}></Item>)
                }  
            </section>
            <button className="uppercase text-xl block font-medium border-black mx-auto border-b-2 px-2  py-1 mt-4 md:mt-6 hover:bg-black hover:text-white hover:rounded-lg rounded-b-lg mb-16 lg:mb-20">{ btnText}</button>
        </section>
    );
};

export default ShowItem;
