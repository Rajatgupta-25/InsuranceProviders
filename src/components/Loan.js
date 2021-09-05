import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import Images from './Images';
import '../css/loan.css';
import '../plugins/loan';

export default function Loan() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Image className="loanNewImage" src={Images.loanNew}/>
                        <p className="instantLoan mt-3">You can easily get an <b>Instant Loan</b> here</p>
                        <div className="progressBar mt-5">
                        <ul className="step-1">
        <li className="active">
            <span>1</span>
        </li>
        <li>
            <span>2</span>
        </li>
        <li>
            <span>3</span>
        </li>
    </ul>
    <ul className="step-2" style={{display:'none'}}>
        <li className="active">
            <span>1</span>
        </li>
        <li className="active">
            <span>2</span>
        </li>
        <li>
            <span>3</span>
        </li>
    </ul>
    <ul className="step-3" style={{display:'none'}}>
        <li className="active">
            <span>1</span>
        </li>
        <li className="active">
            <span>2</span>
        </li>
        <li className="active">
            <span>3</span>
        </li>
    </ul>
    </div>
                    </Col>    
                </Row>
                <Row>
                    <Col className="text-center">
                    <Form>
                        <Container className="mt-1">
                                <div id="form1">
                                <Row>
                                    <Col xs={5}>
                    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control type="text" placeholder="Name" required/>
  </Form.Group>
  </Col>
  <Col xs={1}></Col>
  <Col xs={5}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Email" required/>
  </Form.Group>
</Col>
</Row>
<Row>
        <Col xs={5}>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" required/>
  </Form.Group>
  </Col>
  <Col xs={1}></Col>
  <Col xs={5}>
  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Control type="text" placeholder="Address" required/>
  </Form.Group>
  </Col>
  </Row>
  <Row>
      <Col xs={5}>
      <Form.Group className="mb-3" controlId="formBasicZip">
    <Form.Control type="number" placeholder="Zip Code" required/>
  </Form.Group>
      </Col>
      <Col xs={1}></Col>
      <Col xs={5}>
      <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Control type="number" placeholder="Phone Number" required/>
  </Form.Group>
      </Col>
  </Row>
  </div>
  <Row id="form2" style={{display:'none'}}>
      <Col xs={12}>
        <Container fluid className="text-left">
            <form>
            <Row>
                <Col xs={5}>
                    <input className="form-control" type="text" placeholder="Aadhar Card Number" required/>
                </Col>
                <Col xs={1}></Col>
                <Col xs={5}>
                    <input className="form-control" type="text" placeholder="Pan Card Number" required/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={5}>
                    <input className="form-control" type="date" placeholder="Date" required/>
                    <small className="text-muted">When you want?</small>
                </Col>
                <Col xs={1}></Col>
                <Col xs={5}>
                <input className="form-control" type="number" placeholder="Amount" required/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <h6>Select the Rating system which you want to apply</h6>
                    <input id="first" type="radio" name="option"/>
                    <label className="ml-2" for="first">4.2% for 5 year</label>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                <input id="second" type="radio" name="option"/>
                    <label className="ml-2" for="second">8% for 10 year</label>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                <input id="third" type="radio" name="option"/>
                    <label className="ml-2" for="third">10.2% for 15 year</label>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                <input id="fourth" type="radio" name="option"/>
                    <label className="ml-2" for="fourth">15.3% for 20 year</label>
                </Col>
            </Row>
            </form>
        </Container>
      </Col>
  </Row>
  <Row id="form3" style={{display:'none'}}>
      <Col xs={12}>
        <form>
            <Container fluid className="text-left">
                <form>
                <Row>
                    <Col xs={6}>
                        <h6>Upload Aadhar Card or Driving License or Voter Id Card or Passport</h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <input className="form-control" type="file" required/>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={6}>
                        <h6>Upload Pen Card</h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <input className="form-control" type="file" required/>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={6}>
                        <h6>Upload Residencial Proof</h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <input className="form-control" type="file" required/>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={6}>
                        <h6>Upload Application written by yourself</h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <input className="form-control" type="file" required/>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={6}>
                        <h6>Upload Passport Size Photo</h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <input className="form-control" type="file" required/>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Information is filled by me and I am responsible if any disrespency occurred" />
  </Form.Group>
                    </Col>
                </Row>
                </form>
            </Container>    
        </form>   
      </Col>
  </Row>
  <Row>
      <Col xs={9}></Col>
      <Col xs={1} id="colPrev1">
      <Button id="prev1" style={{display:'none'}} variant="outline-dark">Prev</Button>
      </Col>
      <Col xs={1} id="colNext1">
      <Button id="next1" variant="outline-info">Next</Button>
      </Col>
      <Col xs={1} id="colNext2">
      <Button id="next2" style={{display:'none'}} variant="outline-info">Next</Button>
      </Col>
      <Col xs={1} id="colPrev2">
      <Button id="prev2" style={{display:'none'}} variant="outline-dark">Prev</Button>
      </Col>
      <Col xs={1} id="colSubmit">
      <Button id="submit" style={{display:'none'}} variant="outline-info">Submit</Button>
      </Col>
  </Row>
  </Container>
</Form>
                    </Col>
                </Row>    
            </Container>            
        </>
    );
}