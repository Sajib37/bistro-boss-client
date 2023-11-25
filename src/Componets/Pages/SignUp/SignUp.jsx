import { Helmet } from "react-helmet-async";
import bgImage from "../../../assets/reservation/wood-grain-pattern-gray1x.png"
import image1 from '../../../assets/others/authentication2.png'
import { BsGoogle } from "react-icons/bs";
import { FaFacebook ,FaGithub } from "react-icons/fa";
import {  Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../AuthProvider/AuthProvider";


const SignUp = () => {

    const { googleLogin, createUser } = useAuth();

    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                toast.success('Login Successfully !')
                navigate('/')
            })
            .catch(error => {
            toast.error('Login Failed.!')
        })
    }
    
    const handleRegisterForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            toast.error(`Passwords do not match.`);
            return;
        } else if (password.length < 6) {
            toast.error("password must be at least six character");
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error("password must be contain Upper Case");
            return;
        } else if (!/[a-z]/.test(password)) {
            toast.error("password must be contain Lower Case");
            return;
        } else if (!/\d/.test(password)) {
            toast.error("password must be contain a number");
            return;
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            toast.error("password must be contain a special Character");
            return;
        } else {
            createUser(email, password)
                .then(async (result) => {
                    toast.success("Account created successfully");
                    form.reset();
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    navigate("/signIn");
                })
                .catch((error) => {
                    if (
                        error ==
                        `FirebaseError: Firebase: Error (auth/email-already-in-use).`
                    ) {
                        toast.error("Your Email already in use.");
                    } else {
                        toast.error("Account created Failed!");
                    }
                });
        }
    }

    return (
        <section className=" min-h-screen flex items-center py-12 md:px-10 px-2 lg:px-0" style={{backgroundImage: `url(${bgImage})` ,backgroundSize:'cover'}}>
        <Helmet>
            <title>Bistro Boss || Sign Out </title>
        </Helmet>
        <Toaster/>
        <section className="w-full max-w-screen-xl border-2 px-2 md:px-4 mx-auto py-12 flex flex-row-reverse gap-2" style={{backgroundImage: `url(${bgImage})` , backgroundSize:'cover' ,boxShadow:'2px 2px 5px 5px #BBBCBD'}}>
            <img className="w-1/2 hidden lg:block" src={image1} alt="" />

            <section className="w-full lg:w-1/2  mx-auto px-2 md:px-4  md:w-2/3 lg:max-w-lg rounded-lg py-10 md:py-12">
                <h1 className="text-3xl md:text-4xl mb-4 text-center font-semibold">
                    Create an account
                </h1>

                {/* Form starts here */}
                <form action="" onSubmit={handleRegisterForm}>
                    <div className="mb-3">
                        <div className="mb-1 block">
                            <Label htmlFor="input-gray" color="gray" value="Name:" />
                        </div>
                        <TextInput  name='name' id="input-gray" placeholder="Enter your name" type='text' required color="gray"/>
                    </div>   
                    <div className="mb-3">
                        <div className="mb-1 block">
                            <Label htmlFor="input-gray" color="gray" value="Email:" />
                        </div>
                        <TextInput  name='email' id="input-gray" placeholder="Enter your Email" type='email' required color="gray"/>
                    </div>   
                    <div className="mb-3">
                        <div className="mb-1 block">
                            <Label htmlFor="input-gray" color="gray" value="Password:" />
                        </div>
                        <TextInput  name='password' id="input-gray" placeholder="Enter your password" type='password' required color="gray"/>
                    </div>   
                    <div className="mb-3">
                        <div className="mb-1 block">
                            <Label htmlFor="input-gray" color="gray" value="Confirm Password:" />
                        </div>
                        <TextInput  name='confirmPassword' id="input-gray" placeholder="repeat your password" type='password' required color="gray"/>
                    </div>   
                    <button name='submit' className="text-white bg-[#D1A054] py-2 w-full rounded-lg">Register</button>
                </form>

                <p className="font-ubuntu font-medium mt-4">Already have an account? Please, <Link className="text-[#D1A054] " to='/signIn'>Login</Link></p>
                    <p className="text-center mt-2 font-semibold">Or sign up with</p>
                    <div className="flex justify-center gap-4 mt-2 text-2xl md:text-3xl">
                        <button onClick={handleGoogleLogin}><BsGoogle></BsGoogle></button>
                        <button><FaFacebook /></button>
                        <button><FaGithub /></button>
                    </div>
                    
            </section>
        </section>
        
    </section>
    );
};

export default SignUp;