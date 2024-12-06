import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Swal from "sweetalert2";


const MyCampaign = () => {
    const { users } = useContext(AuthContext);
    const campaigns = useLoaderData();
    const [camps, setCamps] = useState([]);
   
    const { _id, title, type, amount, deadline, description, image, name, email } = campaigns || {};

    const handleDelete = _id =>{
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                          
              fetch(`http://localhost:5000/campaign/${_id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your campaign has been deleted.",
                        icon: "success"
                      });
                }
              })
            }
          });
    }
   
    useEffect(() => {
        if (users) {
            const copyCampaigns = [...campaigns];
            const userCamps = copyCampaigns.filter(data => data.email === users.email)
            setCamps(userCamps);
        }
    }, [])

   
    return (
        <div>
            <div><Navbar /></div>
            <div className="py-20">
            <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Image</th>
                        <th className="border border-gray-300 px-4 py-2">Title</th>
                        <th className="border border-gray-300 px-4 py-2">Description</th>
                        <th className="border border-gray-300 px-4 py-2">Minimum Amount</th>
                        <th className="border border-gray-300 px-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {camps.map((campaign) => (
                        <tr key={campaign._id}>
                            <td className="border border-gray-300 px-4 py-2"><img src={campaign.image} className="w-[200px]" /></td>
                            <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
                            <td className="border border-gray-300 px-4 py-2">{campaign.description}</td>
                            <td className="border border-gray-300 px-4 py-2">{campaign.amount}</td>
                            <td className="border border-gray-300">
                                <div className="flex flex-col">
                                <button
                                className="btn btn-ghost">Update</button>
                                <button 
                                onClick={() => handleDelete(campaign._id)}
                                className="btn btn-ghost">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <div><Footer /></div>
        </div>
    );
};

export default MyCampaign;