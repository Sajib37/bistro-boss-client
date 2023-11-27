import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu();

    // delet operation
    const handleDeletItem = (item) => {
        console.log(item)
    }
    
    // update Operation 
    const handleUpdateItem = (item) => {
        console.log(item)
    }

    return (
        <section className="pt-10 w-full bg-[#F6F6F6]">
            <Helmet>
                <title>Bistro Boss || Manage Items</title>
            </Helmet>
            <section className=" px-1">
                <SectionTitle  subHeading={'manage all items'} heading={'hurry up !'}></SectionTitle>    
                <div className="lg:w-[70%] bg-white py-6 md:py-8 lg:py-10 px-1 md:px-8 lg:px-10  w-full md:w-[90%]  mx-auto ">
 
                        <h1 className="text-2xl font-bold">Total Items: { menu.length}</h1>

                    <table className=" w-full mt-8">
                        <thead>
                            <tr className="bg-[#D1A054] text-white">
                                <th className="py-2">SL</th>
                                <th className="py-2">Image</th>
                                <th className="py-2">Name</th>
                                <th className="py-2">Price</th>
                                <th className="py-2">Edit</th>                                
                                <th className="py-2" >Delet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, idx) =>
                                    <tr key={idx} className={idx % 2 == 0 ? "bg-white" : "bg-gray-100"}>
                                        <td className="py-1 text-center">{ idx+1}</td>
                                        <td className="py-1 "><img className="w-10 h-10 mx-auto" src={item.image} alt="" /></td>
                                        <td className="py-1 text-center">{item.name}</td>
                                        <td className="py-1 text-center">{item.price}</td>
                                        <td className="py-1 text-center"><FaRegEdit onClick={()=>handleUpdateItem(item)} className="mx-auto text-xl text-green-600" /></td>
                                        <td className="py-1 text-center"><MdDelete onClick={()=>handleDeletItem(item)} className="mx-auto text-xl text-red-700" /></td>
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

export default ManageItems;