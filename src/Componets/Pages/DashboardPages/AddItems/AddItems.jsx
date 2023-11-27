import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { FileInput, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const axiosPublic = useAxiosPublic()
    const axiosSecure =useAxiosSecure()

    const onSubmit = async (data) => {
        console.log(data)
        // upload image on imageBB and then get the url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })
        // console.log(res.data.data.display_url)
        if (res.data.success) {
            const newItem = {
                name: data.name,
                price: data.price,
                recipe: data.recipe,
                category: data.category,
                image: res.data.data.display_url
            }

            // send to the database
            await axiosSecure.post('/post/single/menu', newItem)
                .then(res => {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name} added to the menu`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    return (
        <section className="pt-10 w-full ">
            <Helmet>
                <title>Bistro Boss || Add Items</title>
            </Helmet>
            <section className=" px-1">
                <SectionTitle
                    subHeading={"Whats New?"}
                    heading={"Add an item"}
                ></SectionTitle>

                <div className="lg:w-[80%] bg-[#F6F6F6] py-6 md:py-8 lg:py-10 px-3 md:px-8 lg:px-10  w-full md:w-[90%]  mx-auto ">
                    <form
                        className="flex flex-col gap-2"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <div className="mb-1 block">
                                <Label htmlFor="base" value="Recipe Name*" />
                            </div>
                            <TextInput {...register('name')}  id="base" type="text" sizing="md" required/>
                        </div>

                        <div className="flex flex-col md:flex-row gap-2">
                            
                            <div className="w-full md:w-1/2">
                            <div className="mb-1 block">
                                <Label htmlFor="countries" value="Select category" />
                            </div>
                            <Select defaultValue='default' {...register('category')}  id="countries" required>
                                <option value="default" disabled>Category</option>
                                <option value="pizza">Pizza</option>
                                <option value="salad">Salad</option>
                                <option value="drinks">Drinks</option>
                                <option value="soup">Soup</option>
                            </Select>
                            </div>

                            <div className="w-full md:w-1/2">
                                <div className="mb-1 block">
                                    <Label htmlFor="base" value="Price*" />
                                </div>
                                <TextInput {...register('price')}  id="base" type="number" sizing="md" required/>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="mb-1 block">
                                <Label htmlFor="comment" value="Recipe details" />
                            </div>
                            <Textarea {...register('recipe')}  id="comment" placeholder="Enter recipe Details here" required rows={4} />
                        </div>

                        <div className="w-full">
                            <div className="mb-1 block">
                                <Label htmlFor="file-upload" value="Upload Image" />
                            </div>
                            <FileInput {...register('image')}  id="file-upload" required/>
                        </div>

                        <button className="uppercase text-white bg-[#D1A054] flex gap-2 items-center p-2 rounded-md mt-4 w-32" style={{background: 'linear-gradient(to right, #7a5620, #f7c06d)'}}> Add item <ImSpoonKnife /></button>
                    </form>
                </div>
            </section>
        </section>
    );
};

export default AddItems;
