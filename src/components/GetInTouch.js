import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import FloatingLabel from "react-bootstrap-floating-label";
import '../css/getInTouch.css';

export default function GetInTouch() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <p className="text1">We delightedly welcome you to contact us at our contact number <span className="fa fa-phone"></span> +91-7065430330</p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={4} className="text-left">
                        <p className="text2">Any query regarding something?</p>
                        <p className="text-muted text3">Send your query immediately</p>
                    </Col>
                    <Col xs={8} className="mt-3">
                        <span className="fa fa-facebook-official fa-2x" style={{cursor:'pointer', color: 'rgb(115, 174, 199)'}}></span>
                        <span className="fa fa-instagram fa-2x ml-5" style={{cursor:'pointer', color: 'rgb(115, 174, 199)'}}></span>
                        <span className="fa fa-linkedin-square fa-2x ml-5" style={{cursor:'pointer', color: 'rgb(115, 174, 199)'}}></span>
                        <span className="fa fa-whatsapp fa-2x ml-5" style={{cursor:'pointer', color: 'rgb(115, 174, 199)'}}></span>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={3}></Col>
                    <Col xs={6} className="text-left">
                    <Card>
  <Card.Body>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control type="text" placeholder="Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <FloatingLabel controlId="floatingTextarea2" label="Message">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Information is filled by me and I am responsible if any disrespency occurred" />
  </Form.Group>
  <Button variant="outline-info" type="submit">
    Submit
  </Button>
</Form>
  </Card.Body>
</Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}