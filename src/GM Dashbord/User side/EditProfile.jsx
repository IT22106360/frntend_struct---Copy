import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from 'reactstrap'

const EditProfile = () => {

    const [name, setName]=useState("")
    const [email,setEmail] = useState('')
    const [contactNo,setContactNo] = useState('')
    const [dob, setDob] = useState('')
    const [error, setError] = useState(null)

    return ( 
        <body>
            <section>
                <Container>
                <div className="leftImage">
                        <img/>{/*Profie Img - add this*/}
                    </div>
                    <div className="title">Edit Profile</div>
                    <form method="POST" className="add-promo">
                        <div className="add-promo-row">
                            <input
                                type="text"
                                id="Name"
                                name="Name"
                                className="promoInput"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                        </div>
                        <div className="add-promo-row">
                            <input
                                type="Email"
                                id="Email"
                                name="Email"
                                className="promoInput"
                                placeholder="Email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                /> {/*add email Icon here*/}
                        </div>
                        <div className="add-promo-row">
                            <input
                                type="number"
                                id="number"
                                name="Number"
                                className="promoInput"
                                placeholder="Contact Number"
                                value={contactNo}
                                onChange={(e)=>setContactNo(e.target.value)}
                                />
                        </div>
                        <div className="add-promo-row">
                            <input
                                type="Date"
                                id="birthday"
                                name="Birthday"
                                DateFormat="dd/MM/yyyy"
                                className="promoInput"
                                placeholder="Birthday"
                                value={dob}
                                onChange={(e)=>setDob(e.target.value)} 
                                />
                        </div>
                        <div class="add-promo-row">
                                    <div className="add-promo-btns">
                                        <div>
                                            <button type='reset' className='secondary__btn' style={{marginRight: '10px'}}>Cancel</button>
                                            {/* <button type='submit' className='primary__btn submit create-btn'>Create</button> */}
                                            <button type='submit' className='primary__btn'>Save</button>
                                        </div>
                                    </div>
                                    {error && <div className="error">{error}</div>}
                                </div>
                    </form>
                </Container>
            </section>
        </body>
     );
}
 
export default EditProfile;