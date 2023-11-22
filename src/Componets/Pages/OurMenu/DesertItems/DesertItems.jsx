import desertbg from '../../../../assets/menu/dessert-bg.jpeg'
import HeroPart from '../../../Shared/HeroPart/HeroPart';
import ShowItem from '../../../Shared/ShowItem/ShowItem';

const DesertItems = ({items}) => {
    return (
        <section>
            <HeroPart heading={"Deserts"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} image={desertbg}></HeroPart>
            <ShowItem items={items} btnText={'Order your favourite food'}></ShowItem>
        </section>
    );
};

export default DesertItems;