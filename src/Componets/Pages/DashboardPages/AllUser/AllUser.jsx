import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { MdDelete, MdAdminPanelSettings } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const AllUser = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const result = await axiosSecure.get(`/get/users`);
            return result.data;
        },
    });

    const handleUserDelet = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You can again this from shop menu.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/user/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                        }
                    })
                    .catch((err) => console.log(err));
            }
        });
    };

    const handleMakeAdmin = (id, role) => {
        const updateRole = role === "user" ? "admin" : "user";

        axiosSecure.patch(`/user/admin/${id}`, {updateRole: updateRole})
            .then((result) => {
                refetch();
                Swal.fire({
                    title: "Updated!",
                    text: `User role convertd into ${updateRole}`,
                    icon: "success",
                });
            })
            .catch(error => console.log(error))
        
    };

    return (
        <section className="pt-10 w-full bg-[#F6F6F6]">
            <Helmet>
                <title>Bistro Boss || All Users</title>
            </Helmet>
            <section className=" px-1">
                <SectionTitle
                    subHeading={"manage All Users"}
                    heading={"How many ??"}
                ></SectionTitle>
                <div className="lg:w-[70%] bg-white py-6 md:py-8 lg:py-10 px-1 md:px-8 lg:px-10  w-full md:w-[90%]  mx-auto ">
                    <h1 className="text-2xl font-bold">
                        Total Users: {users.length}
                    </h1>

                    <table className=" w-full mt-8">
                        <thead>
                            <tr className="bg-[#D1A054] text-white">
                                <th className="py-2">SL</th>
                                <th className="py-2">Name</th>
                                <th className="py-2">Email</th>
                                <th className="py-2">Role</th>
                                <th className="py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, idx) => (
                                <tr
                                    key={idx}
                                    className={
                                        idx % 2 == 0
                                            ? "bg-white"
                                            : "bg-gray-100"
                                    }
                                >
                                    <td className="py-2 text-center">
                                        {idx + 1}
                                    </td>
                                    <td className="py-2 text-center">
                                        {user.name}
                                    </td>
                                    <td className="py-2 text-center">
                                        {user.email}
                                    </td>

                                    <td className="py-2">
                                        {user.role === "user" ? (
                                            <FaUsersCog
                                                onClick={() =>
                                                    handleMakeAdmin(
                                                        user._id,
                                                        user.role
                                                    )
                                                }
                                                className="mx-auto text-2xl text-[#D1A054]"
                                            />
                                        ) : (
                                            <MdAdminPanelSettings
                                                onClick={() =>
                                                    handleMakeAdmin(
                                                        user._id,
                                                        user.role
                                                    )
                                                }
                                                className="mx-auto text-2xl text-green-700"
                                            />
                                        )}
                                    </td>

                                    <td className="py-2 text-center">
                                        <MdDelete
                                            onClick={() =>
                                                handleUserDelet(user._id)
                                            }
                                            className="mx-auto text-xl text-red-700"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </section>
    );
};

export default AllUser;
