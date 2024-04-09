import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from 'reactstrap'
import bg from "../Images/bg_main.jpg";

const SupOrder = () => {

    const[orderID, setorderID] = useState('')
    const[supName, setsupName] = useState('')
    const[prName, setprName] = useState('')
    const [quantity, setquantity] = useState(0)
    const[size, setsize] = useState('')

    const bgStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        height: "100%",
      };

    return ( 
        <div style={bgStyle}>
       
        {/* <div className="d1">    
        <div className="d2">
        <div className="d3"> */}
        
        <body>
            <section>
                <Container>
               <div className="flex flex-col justify-center items-center h-screen">
                 <div className="bg-black/45 w-1/2 rounded-[50px] py-12 px-14 gap -inset-y-8">
                    <div /*className="title" */ className="text-4xl text-white font-bold align-top mb-8" style={{ WebkitTextStroke: '1px black' }} >Place Orders</div>
                    <form method="POST" /*className="add-promo" */ className="space-y-4" >
                        <div className="flex flex-col gap-y-4">

                           <div className="flex justify-between items-center">   {/* check this here */}

                            <label for="Name" htmlFor="Name" className="text-white rounded-xl flex items-center pl-5 font-bold text-2xl"  style={{ WebkitTextStroke: '1px black' }}>Supplier Name:</label>
                            <select name="Supname" id="Name" /*className="dropdown"*/ className="w-3/5 bg-white/70 h-14 rounded-xl placeholder:text-black placeholder:font-semibold placeholder:text-lg pl-5 text-xl border-b-2 border-gray-300 focus:outline-none focus:border-green-500">
                                <option value="Senura Nawanjana" selected>Senura Nawanjana</option>
                                <option value="Senura Nawanjana"  selected>Will Smith</option>
                                <option value="Senura Nawanjana"  selected>Johnny Depp</option>
                                {/*Other Options will be build*/}
                            </select>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">                       
                            <label for="Details" className="text-white flex items-center pl-5 font-bold text-2xl" style={{ WebkitTextStroke: '1px black' }}>Product Name:</label>
                            <input
                                type="text"
                                id="Details"
                                name="Details"
                                className="w-3/5 bg-white/70 h-14 rounded-xl placeholder:text-black placeholder:font-semibold placeholder:text-lg pl-5 text-xl border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
                                required />
                        </div>
                        <div className="flex justify-between items-center">
                            <label for="Price" className="text-white flex items-center pl-5 font-bold text-2xl" style={{ WebkitTextStroke: '1px black' }}>Quantity:</label>
                            <input
                                type="number"
                                id="Price"
                                name="Price"
                                className="w-3/5 bg-white/70 e h-14 rounded-xl placeholder:text-black placeholder:font-semibold placeholder:text-lg pl-5 text-xl border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
                                required />
                                </div>
                        <div className="flex justify-between items-center">  
                            <label for="Size" className="text-white flex items-center pl-5 font-bold text-2xl font-size" style={{ WebkitTextStroke: '1px black' }}>Size:</label>
                            <select name="Supname" id="Name" className="w-3/5 bg-white/70 h-14 rounded-xl placeholder:text-black placeholder:font-semibold placeholder:text-lg pl-5 text-xl border-b-2 border-gray-300 focus:outline-none focus:border-green-500">
                                <option value="Senura Nawanjana" selected>Small</option>                 
                                <option value="Senura Nawanjana" selected>Medium</option>
                                <option value="Senura Nawanjana" selected>Large</option>
                                {/*Other Options will be build*/}
                                
                            </select>
                            </div>
                        <div class="add-promo-row">
                                    
                                    {/*error - this is for me*/}
                                </div>
                        
                        <div className="add-promo-btns">
                                       
                                        <div className="flex justify-center mt-9">
                                            <button type='reset' className="bg-blue-500 py-3 px-8 rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-300 mr-20">Cancel</button>
                                            {/* <button type='submit' className='primary__btn submit create-btn'>Create</button> */}
                                            <button type='submit' className="bg-blue-500 py-3 px-8 rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-300">Submit</button>
                                        </div>
                                        
                                    </div>
                    </form>
                    </div>
                    </div>
                </Container>
            </section>
        </body>
        
        </div>
     );
}
 
export default SupOrder;