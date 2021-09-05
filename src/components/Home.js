import React from 'react';
import { Container, Row, Col, Nav, Image, Card, Button } from 'react-bootstrap';
import NavBar from './Navbar';
import '../css/home.css';
import Images from './Images';
import Investments from './Investments';
import Loan from './Loan';
import '../plugins/home';
import InvestMore from './InvestMore';
import Offers from './Offers';
import Plans from './Plans';
import Advices from './Advices';
import GetInTouch from './GetInTouch';
export default function Home(){
    return (
        <>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col xs={2} className="mt-4">
                    <Image className="image" src={Images.homeImg}/>
                        <hr/>
                    <Nav defaultActiveKey="/home" className="mt-4 flex-column text-left">
                        <Nav.Link id="investment">
                            <span class="fas fa-tasks"> <span className="ml-4">Investments</span></span>
                        </Nav.Link>
                        <Nav.Link id="loans">
                        <span class="fa fa-cubes"> <span className="ml-4">Loans</span></span>
                        </Nav.Link>
                        <Nav.Link id="investMore">
                        <span class="fa fa-line-chart"> <span className="ml-4">Invest More</span></span>
                        </Nav.Link>
                        <Nav.Link id="offers">
                        <span class="fa fa-cart-plus"> <span className="ml-4">Offers</span></span>
                        </Nav.Link>
                        <Nav.Link id="advices">
                        <span class="fa fa-window-restore"> <span className="ml-4">Advices</span></span>
                        </Nav.Link>
                        <Nav.Link id="plans">
                        <span class="fa fa-briefcase"> <span className="ml-4">Plans</span></span>
                        </Nav.Link>
                        <Nav.Link id="inTouch">
                        <span class="fa fa-info-circle"> <span className="ml-4">Get In Touch</span></span>
                        </Nav.Link>
                        </Nav>
                    </Col>
                    <Col xs={10}>
                        <Container className="mt-5">
                            <Row>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fa fa-umbrella " style={{fontSize:'26px', color: 'rgb(115, 174, 199)'}}></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Term Life Insurance</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fa fa-heartbeat " style={{fontSize:'26px',color: 'rgb(115, 174, 199)'}}></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Health Insurance</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fas fa-car-alt" style={{fontSize:'26px',color: 'rgb(115, 174, 199)'}}></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Car Insurance</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fas fa-motorcycle" style={{fontSize:'26px',color: 'rgb(115, 174, 199)'}}></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">2 Wheeler Insurance</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fas fa-globe-asia" style={{fontSize:'26px',color: 'rgb(115, 174, 199)'}}></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Travel Insurance</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={2}>
                                <Card style={{ width: '8rem' }}>
                                    <Card.Body>
                                        <Card.Title><span className="fas fa-hand-holding-usd" style={{fontSize:'26px',color: 'rgb(115, 174, 199)'}}></span></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Saving Plans</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col xs={12}>
                                    <Container>
                                        <Row>
                                            <Col className="text-left">
                                                <p id="back" style={{display:'none'}}><span className="fa fa-arrow-circle-left fa-2x" style={{color: 'rgb(115, 174, 199)'}}></span></p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            <p id="showInvestment" style={{display:'none'}}><Investments/></p>
                                    <p id="showLoan" style={{display:'none'}}><Loan /></p>
                                    <p id="showInvestMore" style={{display:'none'}}><InvestMore /></p>
                                    <p id="showOffers" style={{display:'none'}}><Offers /></p>
                                    <p id="showGetInTouch" style={{display:'none'}}><GetInTouch /></p>
                                    <p id="showAdvices" style={{display:'none'}}><Advices /></p>
                                    <p id="showPlans" style={{display:'none'}}><Plans /></p>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <Container className="mt-4" id="homeCon">
                                        <Row>
                                            <Col xs={5} className="text-left">
                                                <p className="text1">Let's find you <br/>the<b> Best Insurance</b></p>
                                                <p><span className="fa fa-bolt fa-2x mt-2" style={{color: 'rgb(115, 174, 199)'}}></span> <span className="ml-2" style={{color: 'orange'}}>Quick, easy & hassle free</span></p>
                                            </Col>
                                            <Col xs={3} className="text-left" >
                                                <Image className="imageCartoon" src={Images.newCartoon}/>
                                            </Col>
                                            <Col xs={2} className="text-left mt-5">
                                            <Button id="investMoreBtn" variant="outline-info">Start Investing</Button>
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col>
                                                <p>When you buy insurance from us, you get more than just financial safety. You also get: our promise of simplifying complex insurance terms and conditions, quick stress-free claims, instant quotes from top insurers and being present for you in the toughest of times.</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}