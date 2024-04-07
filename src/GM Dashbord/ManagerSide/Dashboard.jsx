import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap'


const GMDashboard = () => {

    return ( 
        <Container>
                <div className="title code">General Manager Dashboard</div><br/>
                <Row className='om_btn'>
                    <Col>
                        <Container >
                            <a><p id='ed'>Customer Management</p></a>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <a><p id='ed'>Email  Marketing </p></a>
                        </Container>
                    </Col>
                </Row>
            </Container>
     );
}
 
export default GMDashboard;