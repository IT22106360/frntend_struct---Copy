import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Container} from 'reactstrap'

const UserTable = () => {

    const[customer,setCustomer] = useState([])

    useEffect(()=>{
        const fetchCustomers = async ()=>{

            try {
                const response =  await axios.get(" http://localhost:8000/customer")
                setCustomer(response.data)
                
            } catch (error) {
                console.error("Failed to fetch Users", error);
            }
        }
        fetchCustomers()
    }, [])

    const handleDelete = (cusID) => {
      const {custID} = cusID
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const response = await axios.delete('http://localhost:8000/customer/${custID}');
    
              if (response.status === 200) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                }).then(() => {
                  // Refresh the page
                  window.location.reload();
                });
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "Failed to customer.",
                  icon: "error",
                });
              }
            } catch (error) {
              console.error("Error deleting Customer:", error);
            }
          }
        });
      };



    return ( 
        <section>
            <Container>
                <div className="w-full">
                    <div className="grid grid-cols-8 bg-cyan-400">
                    <div className="border-2 border-black p-3">NIC</div>
                    <div className="border-2 border-black p-3">Name</div>
                    <div className="border-2 border-black p-3">Package</div>
                    <div className="border-2 border-black p-3">Contact No</div>
                </div>
                <div
                    className="w-full overflow-auto "
                    style={{
                    maxHeight: "450px",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    }}
                >
                {customer &&
                customer.map((customer, index) => (
                    <div
                    className={`grid grid-cols-8 ${
                        index % 2 == 0 ? "bg-cyan-200 " : "bg-cyan-400 "
                    }`}
                    key={customer.id}
                    >
                    <div className="border-2 border-black p-2">
                        {customer.NIC}
                    </div>
                    <div className="border-2 border-black p-2">{customer.Name}</div>
                    <div className="border-2 border-black p-2">{customer.Package}</div>
                    <div className="border-2 border-black p-2">
                        {customer.ContactNo}
                    </div>  
                    <div className="border-2 border-black p-2">
                        <button
                        className="bg-red-500 border-2 border-black rounded-full p-1 px-4 text-white font-bold"
                        onClick={() =>
                            handleDelete({cusID: customer.CustomerID})
                        }
                        >
                        Delete
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </Container>
    </section>
     );
}
 
export default UserTable;