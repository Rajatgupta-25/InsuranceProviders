import React from 'react';
import Navbar from './Navbar';
import Images from './Images';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import '../css/Insurance.css';

export default function Insurance(){
    return (
        <>
            <Navbar />
            <Container className="mt-5">
            <Row>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fa fa-umbrella blue" ></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-font">Term Life Insurance</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fa fa-heartbeat light-red" ></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-font">Health Insurance</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fas fa-car-alt blue" ></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-font">Car Insurance</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fas fa-motorcycle light-red" ></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-font">2 Wheeler Insurance</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fas fa-globe-asia blue" ></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-font">Travel Insurance</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fas fa-hand-holding-usd yellow" ></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-font">Saving Plans</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="far fa-sun fa-spin " ></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-font">Investment Plans</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fa fa-group light-blue" ></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-font-new">Family Health Insurance</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fa fa-recycle green" ></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-font">Guaranteed Return Plan</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fas fa-dollar-sign dollar" ></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-font" >Maximum Investment</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fas fa-user-md doc" ></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-font">Medical Insurance</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fas fa-shuttle-van blue" ></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted card-font">Commercial Vechicle</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                            </Container>
            <div className="container-fluid">
                <div className="row mt-5">
                <div className="col-2">
                        <Image className="imageCartoon_insurance" src={Images.newCartoon}/>
                    </div>
                    <div className="col-2 mt-5 ml-5 text-left">
                    <Button id="investMoreBtn" variant="outline-info">Start Investing</Button>
                    </div>
                    <div className="col-4">
                        <img src={Images.insurance_types} width="150%" height="320px"/>
                    </div>
                </div>
            </div>
         </>
    );
}