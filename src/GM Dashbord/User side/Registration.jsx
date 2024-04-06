import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { Container} from 'reactstrap'

const SignUp = () => {

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Confirmpasswrd, setConfirmpasswrd] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [error, setError]  = useState(null)


    return (
      <section>
        <Container>
        <div className="title">Sign Up</div>
        <form method="POST" className="add-promo">
          <div className="add-promo-row">
              <input
                type="text"
                id="Name"
                name="name"
                placeholder="Name"
                value={Name}
                onChange={(e)=>setName(e.target.value)}
                className="promoInput"
                required />
          </div>
          <div className="add-promo-row">
              <input
                type="text"
                id="Email"
                name="Email"
                placeholder="Email"
                value={Email}
                onChange={(e)=>setEmail(e.target.value)}
                className="promoInput"
                required />
          </div>
          <div className="add-promo-row">
              <input
                type="text"
                id="password"
                name="password"
                placeholder="password"
                value={Password}
                onChange={(e)=>setPassword(e.target.value)}
                className="promoInput"
                required />
          </div>
          <div className="add-promo-row">
              <input
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirmPassword"
                value={isChecked}
                onChange={(e)=>setConfirmpasswrd(e.target.value)}
                className="promoInput"
                required />
          </div>
          <div className="add-promo-row">
              <input
                type="checkbox"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirmPassword"
                value={isChecked}
                onChange={setIsChecked(!isChecked)} 
                className="promoInput"
                required />
          </div>
          
          <div class="add-promo-row">
            <div className="add-promo-btns">
                                      <div>
                                            <button type='reset' className='secondary__btn' style={{marginRight: '10px'}}>Cancel</button>
                                            {/* <button type='submit' className='primary__btn submit create-btn'>Create</button> */}
                                            <button type='submit' className='primary__btn'>Submit</button>
                                        </div>
                                    </div>
                                    {error && <div className="error">{error}</div>}
                                </div>                        
        </form>

        </Container>
      </section>
        
      );
}
 
export default SignUp;