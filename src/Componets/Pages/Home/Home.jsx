import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import ChefRecommend from "./ChefRecommend/ChefRecommend";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";
import HeroPart from "../../Shared/HeroPart/HeroPart";
import chef from "../../../assets/home/chef-service.jpg";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="mt-8 md:mt-12">
                <Category></Category>
            </div>

            <div className="max-w-screen-xl mx-auto mt-12 md:mt-20">
                <HeroPart
                    image={chef}
                    heading={"Bistro Boss"}
                    subHeading={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
                    }
                ></HeroPart>
            </div>
            
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
