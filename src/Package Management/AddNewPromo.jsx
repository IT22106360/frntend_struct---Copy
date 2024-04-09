import { useState } from "react"
import { Container } from 'reactstrap'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import bg from "../Images/package_bg.jpg";
const AddNewPromo = () => {
    //Rk - functions(line 7 - line 56)
    const [prPackageId, setPromoId] = useState('')
    const [prPackageName, setPromoName] = useState('')
    const [prPackagePrice, setPromoPrice] = useState('')
    const [prPackageDescription, setPromoDetails] = useState('')
    const [prPackageValidity, setPromoValidity] = useState('')
    const [error, setError] = useState(null)
    {/*const navigate = useNavigate()*/}
    const handleSubmit = async (e) => {
        e.preventDefault()

        const promo = {prPackageId, prPackageName, prPackagePrice, prPackageDescription, prPackageValidity}

        useEffect(()=>{
            const fetchpromo = async ()=>{

                const response = await fetch('/api/prPackages', {
                    method: 'POST',
                    body: JSON.stringify(promo),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if (!response.ok) {
                    setError(json.error)
                }

                if(response.ok){
                    setPromoId('')
                    setPromoName('')
                    setPromoPrice('')
                    setPromoDetails('')
                    setPromoValidity('')
                    setError(null)
                    console.log('new promo added', json)
                    alert('New promo package created successfully!')
                    {/*navigate('/promoPackages')*/}
            }}

            fetchpromo()
            
        },[])

        
        const json = await response.json()

        if (response.ok) {
            
        }
    } 
    //Rk-functions
    const bgStyle = {
        backgroundImage: `url(${bg})`, 
        backgroundSize: "cover",
        height: "100vh",
    };

    //value, onChange Stuff are my changes  to make the form work with react hooks
    
    return ( 
        <div style={bgStyle}>
            <div className="flex h-full justify-center items-center ">
                <div className="bg-black/45 w-1/2 rounded-[50px] py-12 px-14 flex flex-col gap-y-8">
                    <p className="text-4xl text-white font-bold align-top mb-8" style={{ WebkitTextStroke: '1px black' }} >Add new package</p> {/* Moved "Edit Standard" text above the black box */}
                     <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <label htmlFor="Name" className="text-white rounded-xl flex items-center pl-5 font-bold text-2xl"  style={{ WebkitTextStroke: '1px black' }}>
                                    Package Name:
                                </label>
                                <input
                                    className="w-3/5 bg-white/70 h-14 rounded-xl placeholder:text-black placeholder:font-semibold placeholder:text-lg pl-5 text-xl border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
                                    type="text"
                                    id="Name"
                                    name="name"
                                    value={prPackageName}
                                    onChange={(e)=>setPromoName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="Details" className="text-white flex items-center pl-5 font-bold text-2xl" style={{ WebkitTextStroke: '1px black' }}>
                                    Package Details:
                                </label>
                                <input
                                    type="text"
                                    id="Details"
                                    name="Details"
                                    className="w-3/5 bg-white/70 h-14 rounded-xl placeholder:text-black placeholder:font-semibold placeholder:text-lg pl-5 text-xl border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
                                    value={prPackageDescription}
                                    onChange={(e)=>setPromoDetails(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="Price" className="text-white flex items-center pl-5 font-bold text-2xl" style={{ WebkitTextStroke: '1px black' }}>
                                    Package Price:
                                </label>
                                <input
                                    type="text"
                                    id="Price"
                                    name="Price"
                                    className="w-3/5 bg-white/70 e h-14 rounded-xl placeholder:text-black placeholder:font-semibold placeholder:text-lg pl-5 text-xl border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
                                    value={prPackagePrice}
                                    onChange={(e)=>setPromoPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="Date" className="text-white flex items-center pl-5 font-bold text-2xl font-size" style={{ WebkitTextStroke: '1px black' }}>
                                    Package Validity:
                                </label>
                                <input
                                    type="date"
                                    id="Date"
                                    name="Date"
                                    className="w-3/5 bg-white/70 h-14 rounded-xl placeholder:text-black placeholder:font-semibold placeholder:text-lg pl-5 text-xl border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
                                    value={prPackageValidity}
                                    onChange={(e)=>setPromoValidity}
                                    required
                                />
                            </div>
                            <div className="flex justify-between">
                                <button type="reset" className="bg-blue-500 py-3 px-8 rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-300">
                                    Cancel
                                </button>
                                <button type="submit" className="bg-blue-500 py-3 px-8 rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-300">
                                    Save
                                </button>                 
                            </div>
                            {error && <div className="error">{error}</div>} {/*This is my one*/}
                        </div>
                    </form> 
                </div>
            </div>
        </div>       
     );
}
 
export default AddNewPromo;