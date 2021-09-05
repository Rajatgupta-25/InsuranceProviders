import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/investMore.css';

export default function InvestMore() {
    return (
        <>
            <Container fluid className="text-left mt-3">
                <Row>
                    <Col>
                        <h2 className="heading">Best Investments Options In India</h2>
                        <p className="heading">Regardless of your risk appetite, it is important to choose the right instruments to grow yur savings. To help you plan where to invest, here's a look at the top investment instruments choosen by investors in India.</p>
                        <p className="heading mt-2"><b>1. Stocks : </b> As equity investments that represent a share of ownership in a company or entity, stocks are one of the best investment avanues for long-term investors. These can be traded in a marketplace called the 'Stock Market', where ll the traders are done ellectronically.</p>
                        <p className="heading mt-2"><b>2. Fixed Deposit : </b> For investors looking for lucrative returns with lowest risk, Fixed Deposite (or FD) is one of the best investment avanues. By investing in Fixed Deposite, you can get assured returns a fixed intervals of time. This investment avenues is one of the most preffered options in India, due to the convenience and flexibility it offers. Even investors with high risk appetite choose to invest in FD to diversify their investments and stabilize their portfolio.</p>
                        <p className="heading mt-2"><b>3. Mutual Funds : </b> These are the collective investment vehicles managed by a fund manager which pools people's money and invests in stocks and bonds of various companies and create a return. With the convience of low initial investments, mutual funds are volatile investment avenues, that are best suited for medium-risk investors.</p>
                        <p className="heading mt-2"><b>4. Senior Citizen Saving Scheme : </b> As a government-sponsered scheme for individuals above 60 years of age, <i>Senior Citizen Saving Scheme</i> is a great long-term saving option for retirees. It is a great option to get steady and secure income, and senior citizens can get a high and steady rate of interest, as prescribed by the government from time to time.</p>
                        <p className="heading mt-2"><b>5. Public Provident Fund : </b> Public Providient Fund is one of the most common and trusted investment plans in India. It pays interest rate annually and requires a minimum investment amount of Rs 500 per annum. It has a life of 15 years with partial withdrawals allowed of the corpus at various points. This options also pays a high and steady rate of interest as prescribed the government from time to time.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}