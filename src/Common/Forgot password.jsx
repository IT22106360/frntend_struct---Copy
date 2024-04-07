import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from 'reactstrap'

const ForgotPassword = () => {

    return (
        <section>
            <Container className="">
                <div id='forgot-password'>
                    <h1>Forgot Password</h1>
                    <div className="add-promo-row" id="password">
                        <input 
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            id="password"
                            required/>
                    </div>
                    <div className="add-promo-row" id="password">
                        <input 
                            type="password"
                            name="password"
                            placeholder="Confirm your password"
                            id="password"
                            required/>
                    </div>
                    <div class="add-promo-row">
                                    <div className="add-promo-btns">
                                        <div>
                                            <button type='reset' className='secondary__btn' style={{marginRight: '10px'}}>Sign in</button>
                                            {/* <button type='submit' className='primary__btn submit create-btn'>Create</button> */}
                                        </div>
                                    </div>
                                    {/*error - this is for me*/}
                                </div>
                </div>
            </Container>
        </section>
        
      );
}
 
export default ForgotPassword;