import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from 'reactstrap'
const ApplyLeave = () => {
    const [datefrom, setDateFrom] = useState('')
    const [dateto, setDateTo] = useState('')
    const [reason, setReason] = useState('')
    const [error, setError] = useState(null)
    return ( 
        <body>
        <section>
            <Container>
            <div className="leftImage">
                    <img/>{/*Logo Img - add this*/}
                </div>
                <div className="title">Apply leave</div>
                <form method="POST" className="add-promo">
                    <div className="add-promo-row">
                        <input
                            type="date"
                            id="Date-from"
                            name="Date-from"
                            DateFormat="DD/MM/YYYY"
                            value={datefrom}
                            onChange={(e)=>setDateFrom(e.target.value)}
                            className="promoInput"
                            placeholder="Date-From:"
                            required />
                    </div>
                    <div className="add-promo-row">
                    <input
                            type="date"
                            id="Name"
                            name="Email"
                            DateFormat="DD/MM/YYYY"
                            value={dateto}
                            onChange={e=>setDateTo(e.target.value)}
                            className="promoInput"
                            placeholder="Date-To:"
                            required />
                    </div>
                    <div className="add-promo-row">
                    <select name="Supname" id="Name" className="dropdown" value={reason} onChange={(e)=>setReason(e.target.value)}>
                                <option value="reason 1" selected disabled>Reason</option>
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
                                {error && <div className="error">{error}</div>}
                            </div>
                </form>
            </Container>
        </section>
    </body>
     );
}
 
export default ApplyLeave;