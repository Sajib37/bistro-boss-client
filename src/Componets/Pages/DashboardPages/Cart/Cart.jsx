import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useCart from "../../../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {

    const [cart, refetch] = useCart();

    const axiosSecure = useAxiosSecure();
    
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    
    const handleCartDelet = (item) => {
        axiosSecure.delete(`/cart/${item._id}`)
            .then(res => {
                // console.log(res.data.deletedCount)

            })
            .catch(err => console.log(err))

        Swal.fire({
            title: "Are you sure?",
            text: "You can again this from shop menu.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${item._id}`)
                    .then(res => {
                        console.log(res)
                        if (res.data.deletedCount == 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                                  });
                        }
                    })
                    .catch(err => console.log(err))
            }
          });
        
    }

    return (
        <section className="pt-10 w-full bg-[#F6F6F6]">
            <Helmet>
                <title>Bistro Boss || My cart</title>
            </Helmet>
            <section className=" px-1">
                <SectionTitle  subHeading={'My cart'} heading={'Wanna add more?'}></SectionTitle>    
                <div className="lg:w-[70%] bg-white py-6 md:py-8 lg:py-10 px-1 md:px-8 lg:px-10  w-full md:w-[90%]  mx-auto ">
                    <div className="flex justify-between items-center gap-2 flex-col md:flex-row">
                        <h1 className="text-2xl font-bold">Total Orders: { cart.length}</h1>
                        <div className="flex gap-6 items-center">
                            <h1 className="text-2xl font-bold">Total price: { totalPrice}$</h1>
                            <button className="px-3 rounded-lg py-1 bg-[#D1A054]">Pay</button>
                        </div>
                    </div>

                    <table className=" w-full mt-8">
                        <thead>
                            <tr className="bg-[#D1A054] text-white">
                                <th className="py-2">SL</th>
                                <th className="py-2">Image</th>
                                <th className="py-2">Name</th>
                                <th className="py-2">Price</th>
                                <th className="py-2" >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, idx) =>
                                    <tr key={idx} className={idx % 2 == 0 ? "bg-white" : "bg-gray-100"}>
                                        <td className="py-1 text-center">{ idx+1}</td>
                                        <td className="py-1 "><img className="w-10 h-10 mx-auto" src={item.image} alt="" /></td>
                                        <td className="py-1 text-center">{item.name}</td>
                                        <td className="py-1 text-center">{item.price}</td>
                                        <td className="py-1 text-center"><MdDelete onClick={()=>handleCartDelet(item)} className="mx-auto text-xl text-red-700" /></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </section>
        </section>
    );
};

export default Cart;