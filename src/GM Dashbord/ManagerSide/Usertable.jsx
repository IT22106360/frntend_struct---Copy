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
                const response =  await axios.get(" ")
                .then((res) => setCustomer(response.data))
                
            } catch (error) {
                console.error("Failed to fetch Users", error);
            }
        }

        fetchCustomers()
    }, [])



    return ( 
        <section>
            <Container>
                <div className="1">
                    <div className="grid grid-cols-8 bg-cyan-400">
                        <div className="border-2 border-black p-3">Name</div>
                        <div className="border-2 border-black p-3">Package</div>
                        <div className="border-2 border-black p-3">NIC</div>
                        <div className="border-2 border-black p-3">Contact No</div>
                    </div>
                    

                </div>
            </Container>

        </section>
     );
}
 
export default UserTable;