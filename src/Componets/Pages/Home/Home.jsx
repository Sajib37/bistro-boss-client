import Footer from "../../Shared/Footer/Footer";
import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import ChefRecommend from "./ChefRecommend/ChefRecommend";
import Featured from "./Featured/Featured";
import HeroPart from "./HeroPart/HeroPart";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <HeroPart></HeroPart>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;