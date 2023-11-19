import { Card } from 'flowbite-react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

const ItemCard = ({ item }) => {
    const { image,name, recipe} = item;
    return (
        <div>
            <Card
            className="max-w-sm bg-[#F3F3F3] mx-auto"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={image}
            >
                <div className='space-y-4 flex flex-col items-center'>
                    <h1 className='text-2xl font-semibold text-center'>{ name}</h1>
                    <p className='text-center'>{ recipe.slice(0,80)}</p>
                    <AwesomeButton className='w-32 ' type="facebook">Add to Cart</AwesomeButton>
                </div>
            </Card> 
        </div>
    );
};

export default ItemCard;