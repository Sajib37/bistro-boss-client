import { FaFacebook,FaInstagram,FaTwitter  } from "react-icons/fa";
const Footer = () => {
    return (
        <section className="">
            <div className=" flex flex-col md:flex-row text-white text-center">
                <div className="md:w-1/2 w-full py-12  bg-[#1F2937]">
                    <h1 className="text-2xl mb-4">CONTACT US</h1>
                    <p className="text-sm">123 ABS Street, Uni 21, Bangladesh</p>
                    <p className="text-sm">+88 123456789</p>
                    <p className="text-sm">Mon - Fri: 08:00 - 22:00</p>
                    <p className="text-sm">Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="md:w-1/2 w-full py-12  bg-[#111827]">
                    <h1 className="text-2xl mb-4">Follow US</h1>
                    <p>Join us on social media</p>
                    <div className=" text-3xl flex gap-3 justify-center mt-2" >
                        <FaFacebook  />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
            </div>

            <div className="md:py-1 py-1 bg-black text-white">
                <p className="text-center text-xs">Copyright © CulinaryCloud. All rights reserved</p>
            </div>
        </section>
    );
};

export default Footer;