import bg from "../../../../assets/home/featured.jpg";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Featured = () => {
    return (
        <section style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="bg-fixed py-12 relative lg:h-[80vh] md:h-[65vh] h-[100vh] my-8 md:my-12 lg:my-16" >
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-70"></div>

            <div className="text-white z-20 absolute w-full h-full top-0 left-0 py-8" >
                <SectionTitle heading='FROM OUR MENU' subHeading='Check it out'></SectionTitle>
                <div className="flex flex-col md:flex-row gap-4 mt-10 items-center max-w-screen-xl mx-auto md:px-4 px-2">
                    <img className="lg:max-w-lg md:max-w-xs max-w-xs" src={bg} alt="" />
                    <div >
                        <h1 className="text-lg font-medium">March 20, 2023</h1>
                        <h1>WHERE CAN I GET SOME?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Error voluptate facere, deserunt dolores maiores quod nobis quas quasi.
                            Eaque repellat recusandae ad laudantium
                            tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="uppercase text-xl mt-6 block font-medium border-black mx-auto border-b-2 px-2 hover:border-2 hover:bg-black hover:text-white hover:rounded-lg rounded-b-lg mb-4">View full menu</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
