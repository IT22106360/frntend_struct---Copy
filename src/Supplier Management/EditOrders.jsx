import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from 'reactstrap'
import Order from  './Components/SupOrder'

const EditOrderSup = () => {

    return ( 
        <body>
            <section>
                <Container>
                <div /*className="title" */ className="text-4xl text-white font-bold align-top mb-8" style={{ WebkitTextStroke: '1px black' }} >Edit Order</div>
                    <Order/>
                </Container>
            </section>
        </body>
     );
}
 
export default EditOrderSup;