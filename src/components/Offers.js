import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Images from './Images';

export default function Offers() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={3}>
                    <Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src={Images.amazon} />
  <Card.Body>
    <Card.Text>
      <p style={{color: 'rgb(115, 174, 199)'}}>Get an Amazon Pay Gift Card worth Rs 200.</p>
    </Card.Text>
  </Card.Body>
</Card>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={3}>
                    <Card style={{ width: '16rem' }}>
  <Card.Img variant="top" style={{height:'140px'}} src={Images.mmt} />
  <Card.Body>
    <Card.Text>
      <p style={{color: 'rgb(115, 174, 199)'}}>MakeMyTrip Mondays Cashback Offer Use Internet Banking or Cards</p>
    </Card.Text>
  </Card.Body>
</Card>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={3}>
                    <Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src={Images.tataCliq} />
  <Card.Body>
    <Card.Text>
      <p style={{color: 'rgb(115, 174, 199)'}}>Get 10% instant discount at Tata Cliq Luxury Pay using Internet Banking</p>
    </Card.Text>
  </Card.Body>
</Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={3}>
                <Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src={Images.bigbasket} />
  <Card.Body>
    <Card.Text>
      <p style={{color: 'rgb(115, 174, 199)'}}>Get Rs 150 cashback on grocery shopping on Bigbasket Pay using Internet Banking</p>
    </Card.Text>
  </Card.Body>
</Card>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={3}>
                <Card style={{ width: '16rem' }}>
  <Card.Img className="mt-5" variant="top" src={Images.samsung} />
  <Card.Body>
    <Card.Text>
      <p className="mt-3" style={{color: 'rgb(115, 174, 199)'}}>Samsung offer - Get up to 22.5% cashback Pay using Debit Card</p>
    </Card.Text>
  </Card.Body>
</Card>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={3}>
                <Card style={{ width: '16rem' }}>
  <Card.Img variant="top" style={{height:'145px'}} src={Images.domino} />
  <Card.Body>
    <Card.Text>
      <p style={{color: 'rgb(115, 174, 199)'}}>Get upto Rs 399 cashback using PayTm or Google Pay or Bhim Pay.</p>
    </Card.Text>
  </Card.Body>
</Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                <Col xs={3}>
                <Card style={{ width: '16rem' }}>
  <Card.Img className="mt-3" variant="top" style={{height:'145px'}} src={Images.vivo} />
  <Card.Body>
    <Card.Text>
      <p style={{color: 'rgb(115, 174, 199)'}}>VIVO Phones Offer Pay using Credit or Debit Card</p>
    </Card.Text>
  </Card.Body>
</Card>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={3}>
                <Card style={{ width: '16rem' }}>
  <Card.Img variant="top" style={{height:'145px'}} src={Images.swiggy} />
  <Card.Body>
    <Card.Text>
      <p style={{color: 'rgb(115, 174, 199)'}}>Get 15% discount on food order on Swiggy Pay using Net Banking</p>
    </Card.Text>
  </Card.Body>
</Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}