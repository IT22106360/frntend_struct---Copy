import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from 'reactstrap'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import './coachfeedback.css'


const Coachfeedback = () => {

    const [feedbackID, setfeedbackID] = useState('')
    const [custName, setCustName] = useState('')
    const [custEmail, setCustEmail] = useState('')
    const [coachName, setcoachName] = useState('')
    const [coachRating, setcoachRating] = useState(0)
    const [coachFeedback, setcoachFeedback] = useState('')
    const [error, setError] = useState(null)
    // const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const CoachFeedback = { feedbackID, custName, custEmail, coachName, coachRating, coachFeedback, error }

        const response = await fetch('/api/prPackages', {
            method: 'POST',
            body: JSON.stringify(CoachFeedback),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setfeedbackID('')
            setCustName('')
            setCustEmail('')
            setcoachRating(0)
            setcoachFeedback('')
            setError(null)
            console.log('new feedback added', json)
            alert('New feedback added successfully!')
            // navigate('/promoPackages')
        }
    }

    return (
        <body>
            <section className="User-box">
                <Container>
                    <div className="title">Give your feedback</div>
                    <form method="POST" className="add-promo" onSubmit={handleSubmit}>
                        <div className="add-promo-row">
                            <label htmlFor="Name" className="promo-lbl">Full Name :</label>
                            <input
                                type="text"
                                id="Name"
                                name="name"
                                value={custName}
                                onChange={(e) => { setCustName(e.target.value) }}
                                className="promoInput"
                                required />
                        </div>
                        <div className="add-promo-row">
                            <label htmlFor="Email" className="promo-lbl">Email Address :</label>
                            <input
                                type="Email"
                                id="Email"
                                name="Email"
                                value={custEmail}
                                onChange={(e) => setCustEmail(e.target.value)}
                                className="promoInput"
                                required />
                        </div>
                        <div class="add-promo-row" >
                            <label className="promo-lbl">Select Your Instructor :</label>
                            
                            <select className="insSelect" onChange={(e) => setcoachName(e.target.value)} value={coachName} required>
                                <option>  Select</option>
                                <option>Mr. Leanne Graham</option>
                                <option>Mr. Ervin Howell</option>
                                <option>Mr. Kurtis Weissnat</option>
                                <option>Mr. Nicholas Runolfsdottir V</option>
                                <option>Mr. Glenna Reichert</option>
                            </select>
                        
                        </div >
                        {/*Enter rating*/}
                        <div className="add-promo-row">
                            <label className="promo-star">Rate Coaches service :</label>
                            <div className="add-star">
                            {Array(5).fill().map((_, index) =>
                                coachRating >= index + 1 ?
                                    (<AiFillStar key={index} style={{ color: 'orange' }} onClick={() => setcoachRating(index + 1)} className="FillStar" />
                                    ) : (<AiOutlineStar key={index} style={{ color: 'orange' }} onClick={() => setcoachRating(index + 1)} className="OutlineStar" />))}
                        </div>
                        </div>
                        <div className="add-promo-area">
                            <textarea id="inquiry" name="inquiry" placeholder="Enter your opinion here" value={coachFeedback} onChange={(e) => setcoachFeedback(e.target.value)}></textarea>
                            </div>
                            <div className="add-promo-row">
                                <div className="add-promo-btns">
                                    <div>
                                         <button type='submit' className='primary__btn' style={{ marginRight: '80px' }}>Create</button>
                                        <button type='reset' className='secondary__btn' >Cancel</button>
                                        
                                    </div>
                                </div>
                            </div>
                        
                    </form>
                </Container>
            </section>
        </body>
    );
}

export default Coachfeedback;
