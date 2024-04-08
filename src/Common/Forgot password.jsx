import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from 'reactstrap'

const ForgotPassword = () => {

    const [password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)
    
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                    </div>
                    <div className="add-promo-row" id="password">
                        <input 
                            type="password"
                            name="ConfirmPassword"
                            id="confirm_password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                            required/>
                    </div>
                    <div class="add-promo-row">
                                    <div className="add-promo-btns">
                                        <div>
                                            <button type='submit' className='secondary__btn' style={{marginRight: '10px'}}>reset</button>
                                            {/* <button type='submit' className='primary__btn submit create-btn'>Create</button> */}
                                        </div>
                                    </div>
                                    {error && <div className="error">{error}</div>}
                                </div>
                </div>
            </Container>
        </section>
        
      );
}
 
export default ForgotPassword;