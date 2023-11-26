import { Helmet } from "react-helmet-async";
import bgImage from "../../../assets/reservation/wood-grain-pattern-gray1x.png"
import image1 from '../../../assets/others/authentication2.png'
import { BsGoogle } from "react-icons/bs";
import { Button, Label, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaFacebook ,FaGithub } from "react-icons/fa";
import { useAuth } from "../../AuthProvider/AuthProvider";
import SocilLogin from "../../Shared/SocilLogin/SocilLogin";


const SignIn = () => {


    const location = useLocation();
    const navigate= useNavigate()

    const [disabled, setDisabled] = useState(true)
    const captchaRef = useRef(null)

    const emailRef = useRef(null);

    const {googleLogin,emailLogin ,resetPassword}=useAuth()
    
    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])

    const handleValidate = (event) => {
        event.preventDefault();
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
            toast.success("Captcha vaidated")
            setDisabled(false)
        }
   
        else {
            toast.error('Captcha validation Failed!')
            setDisabled(true)
        }
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        emailLogin(email, password)
            .then(async result => {
                toast.success('Login SuccessFully !')
                form.reset();
                await new Promise((resolve) => setTimeout(resolve, 1000));
                navigate(location?.state ? location.state : '/');
            })
            .catch(error =>{
            toast.error('Login Failed !!')
        })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(async result => {
                toast.success('Login Successfully !')
                await new Promise((resolve) => setTimeout(resolve, 1000));
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
            toast.error('Login Failed !')
        })
    }

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        resetPassword(email)
            .then(result => {
            toast.success('Check your email for new password')
            })
            .catch(error => {
                toast.error('pasweord reset Failed !')
        })
    }

    return (
        <section className=" min-h-screen flex items-center py-12 md:px-10 px-4 lg:px-0" style={{backgroundImage: `url(${bgImage})` ,backgroundSize:'cover'}}>
            <Helmet>
                <title>Bistro Boss || Sign In </title>
            </Helmet>
            <Toaster/>
            <section className="w-full max-w-screen-xl border-2 px-2 md:px-4 mx-auto md:py-4 py-6  flex items-center gap-2" style={{backgroundImage: `url(${bgImage})` , backgroundSize:'cover' ,boxShadow:'2px 2px 5px 5px #BBBCBD'}}>
                <img className="w-1/2 h-fit hidden lg:block" src={image1} alt="" />

                <section className="w-full lg:w-1/2  mx-auto md:px-4  md:w-2/3 lg:max-w-lg rounded-lg py-10 md:py-12">
                    <h1 className="text-3xl md:text-4xl mb-4 text-center font-semibold">
                        Login to your account
                    </h1>

                    {/* Form starts here */}
                    <form action="" onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <div className="mb-1 block">
                                <Label htmlFor="input-gray" color="gray" value="Email:" />
                            </div>
                            <TextInput  name='email' id="input-gray" ref={emailRef} placeholder="Enter your Email" type='email' required color="gray"/>
                        </div>
                        <div className="mb-3">
                            <div className="mb-1 block">
                                <Label htmlFor="input-gray" color="gray" value="password:" />
                            </div>
                            <TextInput name='password' id="input-gray" type='password' placeholder="Enter your password" required color="gray"/>
                        </div>
                        {/* captcha */}
                            <LoadCanvasTemplate/>
                        <div className="mb-1">
                            <TextInput name='capctha' ref={captchaRef} id="input-gray" type='text' placeholder="Enter the text above" required color="gray"/>
                        </div>
                        <button onClick={handleValidate} className={`px-2 py-1 mb-2  text-white ${disabled? 'bg-[#D1A054]' : 'bg-green-600'}  rounded-lg`}>validate </button>

                        <p onClick={handleResetPassword} className="mb-2 text-sm font-semibold hover:cursor-pointer text-[#D1A054]">Forgot password ?</p>
                        <button name='submit' disabled={disabled} className={`w-full   py-2 rounded-lg ${disabled ? ' text-gray-400 bg-gray-200' :'text-white bg-[#D1A054]'}`}>Login</button>
                    </form>  
                    
                    <p className="font-ubuntu font-medium mt-4">Don't have an account? Please, <Link className="text-[#D1A054]" to='/signUp'>Register</Link></p>
                    
                    <p className="text-center mt-2 font-semibold">Or sign up with</p>
                    <SocilLogin></SocilLogin>
                </section>
            </section>
            
        </section>
    );
};

export default SignIn;