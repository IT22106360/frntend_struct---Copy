import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from 'reactstrap'
import './applyleave.css';

const ApplyLeave = () => {
    return ( 
        <body>
        <section className="User-box">
            <Container>
            <div>
                <div class="leftImage"></div>
                  <div class="h5">WAVESYNC</div>
                    </div>
                <div className="title">Apply Leave</div>
                <form method="POST" className="add-promo">
                    <div className="add-promo-row">
                        <input
                            type="Date"
                            id="Name"
                            name="Email"
                            DateFormat=" DD/MM/YYYY"
                            className="promoInput"
                            placeholder="Date-From:"
                            required />
                    </div>
                    <div className="add-promo-row">
                    <input
                            type="Date"
                            id="Name"
                            name="Email"
                            DateFormat="  DD/MM/YYYY"
                            className="promoInput"
                            placeholder="Date-To:"
                            required />
                    </div>
                    <div className="add-promo-row">
                        <select name="Supname" id="Name" className="dropdown" >
                            <option value="  Senura Nawanjana" selected>Senura Nawanjana</option>
                            {/*Other Options will be build*/}
                        </select> 
                    </div>
                    <div class="add-promo-row">
                                <div className="add-promo-btns">
                                    <div>
                                        <button type='reset' className='secondary__btn' style={{marginRight: '10px'}}>Apply</button>
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
 
export default ApplyLeave;