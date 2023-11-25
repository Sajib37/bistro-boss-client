import { Card } from 'flowbite-react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { useAuth } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import {  useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';



const ItemCard = ({ item }) => {
    const { image, name, recipe,price, _id } = item;

    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    
    const axiosSecure = useAxiosSecure()
    
    const [,refetch]=useCart()

    const handleAddToCart = (item) => {

        if (user && user.email) {
            const cart = { 
                email: user.email,
                itemID: _id,
                name,
                image,
                recipe,
                price
            }
            axiosSecure.post('/post/cart', cart)
                .then(result => {
                    if (result.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })
                .catch(error => {
                console.log(error)
            })
        }
        else {
            Swal.fire({
                title: "You are not Logged in.",
                text: "To add cart firstly you should Login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login !"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signIn', { state: location.pathname })
                }
              });
        }
    }
    return (
        <div className='px-1'>
            <Card
            className="max-w-sm md:max-w-xs lg:max-w-sm bg-[#F3F3F3] mx-auto"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={image}
            >
                <div className='space-y-4 flex flex-col items-center'>
                    <h1 className='text-2xl font-semibold text-center'>{ name}</h1>
                    <div>
                        <p className='text-center'>{recipe.slice(0, 80)}</p>
                        <p className='text-[#D1A054] text-center font-bold'>Price: { price}$</p>
                    </div>
                    <span onClick={()=>handleAddToCart(item)}><AwesomeButton className='w-32' type="facebook">Add to Cart</AwesomeButton></span>
                </div>
            </Card> 
        </div>
    );
};

export default ItemCard;