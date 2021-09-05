import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Plans() {
    return (
        <>
            <Container fluid className="text-left">
                <Row>
                    <Col>
                        <h3>Best Saving Plans in India</h3>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <p>There are some saving scheme offered by the government, financial companies, and banks to encourage investors to invest more and earn high retrns.
                            It goes without saying that before investing, you need to look at both the pros and cons of your investment options and plan accordingly.
                            If you are planning on investing in a savings plan, here are the top 10 saving plans that can help you to save for your future financial needs.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col className="text-muted" style={{cursor:'pointer'}}>
                            <h6>1. National Saving Certificate</h6>
                            <h6>2. Senior Citizen Saving Scheme</h6>
                            <h6>3. Recurring Deposits</h6>
                            <h6>4. Post Office Monthly Income Scheme (MIS)</h6>
                            <h6>5. Public Provident Fund (PPF)</h6>
                            <h6>6. Kisan Vikas Patra (KVP)</h6>
                            <h6>7. Sukanya Samriddhi Yojana (SSY)</h6>
                            <h6>8. Atal Pension Yojna</h6>
                            <h6>9. Employee Provident Fund (EPF)</h6>
                            <h6>10. Pradhan Mantri Jan Dhan Yojana</h6>
                        
                    </Col>
                </Row>
            </Container>
        </>
    );
}