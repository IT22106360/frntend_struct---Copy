import { useState } from "react";
import { Container} from 'reactstrap'

const UpdateEmail = () => {

    const [title, setTitle] = useState('')
    const [subject,  setSubject] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState(null)
    
    return (
        <section>
            <Container>
                <div className="title">Update Email</div>
                <form action="" className="addpromo">
                <div className="add-promo-row">
                            <input
                                type="email"
                                id="Name"
                                name="Email"
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                className="promoInput"
                                placeholder="Title"
                                required />
                        </div>
                        <div className="add-promo-row">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="promoInput"
                                placeholder="Subject"
                                required />
                        </div>
                        <div className="add-promo-row">
                            <textarea value={content} onChange={setContent} placeholder="Content"></textarea>
                        </div>
                        <div class="add-promo-row">
                                    <div className="add-promo-btns">
                                        <div>
                                            {/* <button type='submit' className='primary__btn submit create-btn'>Create</button> */}
                                            <button type='submit' className='primary__btn'>Save</button>
                                            <button type='' className='secondary__btn' style={{marginRight: '10px'}}>Send</button>
                                        </div>
                                    </div>
                                    {error && <div className="error">{error}</div>}
                                </div>
                </form>
            </Container>
        </section>

      );
}
 
export default UpdateEmail;