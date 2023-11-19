import chef from "../../../../assets/home/chef-service.jpg";
const HeroPart = () => {
    return (
        <div
            style={{ backgroundImage: `url(${chef})`, backgroundSize: "cover" ,backgroundPosition:'center' ,backgroundRepeat:'no-repeat' }}
            className=" mt-16 max-w-screen-xl mx-auto h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center"
        >
            <div className="w-4/5 h-1/2 bg-white flex flex-col justify-center items-center space-y-2">
                <h1 className="md:text-3xl text-2xl text-center font-bold">Bistro Boss</h1>
                <p className="text-center max-w-xl text-xs md:text-base px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, libero accusamus laborum deserunt ratione
                    dolor officiis praesentium! Deserunt magni aperiam dolor
                    eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                </p>
            </div>
        </div>
    );
};

export default HeroPart;
