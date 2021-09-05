import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../css/investment.css';

export default function Investments() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="mr-5">
                        <p className="text_investment">You can see your investments after login.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}></Col>
                    <Col xs={4} className="text-left">
                    <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="outline-info" type="submit">
    Login
  </Button>
</Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4}></Col>
                </Row>
            </Container>
        </>
    );
}