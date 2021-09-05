import React from 'react';
import NavBar from './Navbar';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Images from './Images';
import '../css/contact.css';

export default function ContactUs(){
    return (
        <>
        <NavBar />
        
        <div class="jumbotron jumbotron-fluid imageBack">
  <div class="container text-white">
    <h1 class="display-4">Get In Touch</h1>
    <h5 className="text-muted" style={{fontSize: '18px'}}>If you have questions or just want to get in touch, use the form below.<br/>We look forward to hearing from you!</h5>
  </div>
</div>
            <div className="container">
                <div className="row card-contact">
                    <div className="col-12">
                        <Card border="light" style={{ width: '68rem' }}>
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col xs={6}>
                                            <img src={Images.contact_us} width="380px" height="480px"/>
                                        </Col>
                                        <Col xs={6} className="formBackground">
                                            <Container fluid>
                                                <form action="">
                                                <Row>
                                                    <Col xs={8} className="mt-5 text-left">
                                                        <input type="text" required placeholder="Name" className="form-control control"/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={8} className="mt-4 text-left">
                                                        <input type="email" required placeholder="Email" className="form-control control"/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={8} className="mt-4 text-left">
                                                        <textarea required placeholder="Message" className="form-control control" rows="5" cols="8"></textarea>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={2}></Col>
                                                    <Col xs={3} className="mt-4">
                                                        <button className="form-control button">Submit</button>
                                                    </Col>
                                                </Row>
                                                </form>
                                            </Container>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6}>
                                            <a><span className="fab fa-facebook fa-2x" style={{color: 'steelblue'}}></span></a>
                                            <a><span className="fab fa-instagram fa-2x ml-4" style={{color: 'peru'}}></span></a>
                                            <a><span className="fab fa-linkedin fa-2x ml-4" style={{color: 'steelblue'}}></span></a>
                                            <a><span className="fab fa-twitter fa-2x ml-4" style={{color: 'skyblue'}}></span></a>
                                            <a><span className="fab fa-whatsapp fa-2x ml-4" style={{color: 'lightgreen'}}></span></a>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}