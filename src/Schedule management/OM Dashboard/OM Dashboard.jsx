import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
const OMDashboard = () => {

    return (  
        <section>
            <Container>
            <Container>
                {/*logo*/}
                <p>Welcome Back</p>
                <p>Swimming from Zero to Hero</p>
                <div className="title code">Operation Manager Dashboard</div>
                <Row className='om_btn'>
                    <Col>
                        <Container >
                            <a><p id='ed'>Employee Details</p></a>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <a><p>Instructor Change Requests</p></a>
                        </Container>
                    </Col>
                </Row>
                <br />
                <Row className='om_btn'>
                    <Col>
                        <Container>
                            <a><p>Employee Leave Requests</p></a>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <a> <p>Promo PackageRequests</p></a>
                        </Container>
                    </Col>
                </Row>

            </Container>
            </Container>
        </section>
    );
}
 
export default OMDashboard;