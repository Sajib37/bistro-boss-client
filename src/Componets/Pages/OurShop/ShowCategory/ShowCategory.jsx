import ItemCard from "../../../Shared/ItemCard/ItemCard";

const ShowCategory = ({items}) => {
    return (
        <section className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 py-2 md:py-4">
            {items.map((item, idx) => (
                <ItemCard item={item} key={idx}></ItemCard>
            ))}
        </section>
    );
};

export default ShowCategory;
