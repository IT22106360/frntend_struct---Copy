import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from 'reactstrap'

const ClientProfile = () => {
    return ( 
        <body>
        <section>
            <Container>
            <Container>
                <div className="title code">Good Morning {/*name*/}</div>
                <Row className='om_btn'>
                    <Col>
                        <Container >
                            <p id='ed'>Profile</p>
                            <button>Go</button>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <p id='ed'>Shop</p>
                            <button>Go</button>
                        </Container>
                    </Col>
               
                    <Col>
                        <Container>
                            <p id='ed'>Schedule</p>
                            <button>Go</button>
                        </Container>
                    </Col>
                </Row>
                <Row className='om_btn'>
                    <Col>
                        <Container >
                            <p id='ed'>Feedback</p>
                            <button>Go</button>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <p id='ed'>Payment</p>
                            <button>Go</button>
                        </Container>
                    </Col>
               
                    <Col>
                        <Container>
                            <p>Packages</p>
                            <button>Go</button>
                        </Container>
                    </Col>
                </Row>
            </Container>
            </Container>
        </section>
    </body>
     );
}
 
export default ClientProfile;