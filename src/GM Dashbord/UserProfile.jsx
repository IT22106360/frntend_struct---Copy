import React from "react";
import { Container } from "reactstrap";
import './userprofile.css';

const ClientProfile = () => {
    return (
        <div >
            <section>
                
                <Container className="background-container" >
                    
                    
                <div className="User-box">
                <div>
                <div class="leftImage"></div>
                  <div class="h5">WAVESYNC</div>
                    </div>

                    <div className="title">Edit Profile</div>

                    <form method="POST" className="add-promo">

                    <div className="add-promo-row">
                            <input
                                type="username"
                                id="us"
                                name="us"
                                className="promoInput"
                                placeholder="  Username"
                                required
                            />
                        </div>  



                        <div className="add-promo-row">
                            <input
                                type="email"
                                id="Name"
                                name="Email"
                                className="promoInput"
                                placeholder="  Enter Email"
                                required
                            />
                        </div>

                        <div className="add-promo-row">
                            <input
                                type="password"
                                id="Details"
                                name="Details"
                                className="promoInput"
                                placeholder="  Change Password"
                                required
                            />
                        </div>
                        <div className="add-promo-row">
                            <input
                                type="number"
                                id="Name"
                                name="Email"
                                className="promoInput"
                                placeholder="  Contact Number"
                                required
                            />
                        </div>
                        <div className="add-promo-row">
                            <div className="add-promo-btns">
                                
                                    <button
                                        type="reset"
                                        className="secondary__btn"
                                        style={{ marginRight: "10px" }}
                                    >
                                        Update
                                    </button>
                                    {/* <button type='submit' className='primary__btn submit create-btn'>Create</button> */}
                                
                            </div>
                            {/* error - this is for me */}
                        </div>
                    </form>
                </div>
                </Container>
                
            </section>
        </div>
    );
};

export default ClientProfile;
