import { Helmet } from "react-helmet-async";
import bgImage from "../../../assets/reservation/wood-grain-pattern-gray1x.png"
import image1 from '../../../assets/others/authentication2.png'
import { BsGoogle } from "react-icons/bs";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";


const SignIn = () => {
    return (
        <section className=" min-h-screen flex items-center py-12 md:px-10 px-2 lg:px-0" style={{backgroundImage: `url(${bgImage})` ,backgroundSize:'cover'}}>
            <Helmet>
                <title>Bistro Boss || Sign In </title>
            </Helmet>
            <section className="w-full max-w-screen-xl border-2 md:px-4 mx-auto md:py-12 py-6 shadow-2xl flex gap-2" style={{backgroundImage: `url(${bgImage})` , backgroundSize:'cover'}}>
                <img className="w-1/2 hidden lg:block" src={image1} alt="" />

                <section className="max-w-md lg:w-1/2  mx-auto px-2 md:px-4  md:max-w-lg lg:max-w-lg rounded-lg py-10 md:py-12">
                    <h1 className="text-3xl md:text-4xl mb-4 text-center font-semibold">
                        Login to your account
                    </h1>

                    {/* Form starts here */}
                    <form action="" >
                        <div className="mb-3">
                            <div className="mb-1 block">
                                <Label htmlFor="input-gray" color="gray" value="Email:" />
                            </div>
                            <TextInput  name='email' id="input-gray" placeholder="Enter your Email" type='email' required color="gray"/>
                        </div>
                        <div className="mb-3">
                            <div className="mb-1 block">
                                <Label htmlFor="input-gray" color="gray" value="password:" />
                            </div>
                            <TextInput name='password' id="input-gray" type='password' placeholder="Enter your password" required color="gray"/>
                        </div>
                        <button name='submit' className='w-full h-full  text-white bg-[#D1A054] py-2 rounded-lg'>Login</button>
                    </form>

                    <p className="font-ubuntu font-medium mt-4">Don't have an account? Please, <Link className="text-Secondary " to='/signUp'>Register</Link></p>

                </section>
            </section>
            
        </section>
    );
};

export default SignIn;