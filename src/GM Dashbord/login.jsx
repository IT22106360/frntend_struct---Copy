import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { Container} from 'reactstrap'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return ( 
        <body>
            <section>
                <Container>
                    <div className="title">Sign In</div>
                    <form method="POST" className="add-promo">
                        <div className="add-promo-row">
                            <input
                                type="email"
                                id="Name"
                                name="Email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                className="promoInput"
                                placeholder="Enter Email"
                                required />
                        </div>
                        <div className="add-promo-row">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="promoInput"
                                placeholder="Password"
                                required />
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
                    </form>
                </Container>
            </section>
        </body>

     );
}
 
export default Login;