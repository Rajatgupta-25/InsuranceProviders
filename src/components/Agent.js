import React, { useEffect, useState, useRef }  from 'react';
import NavBar from './Navbar';
import '../css/agent.css';
import Images from './Images';

export default function Agent(){
	return (<>
        <NavBar />
        <div className="container-fluid" style={{background:'rgb(250, 250, 250)'}}>
	<div className="row">
		<div className="col-12">
			<div className="container-fluid">
				<div className="row">
					<div className="col-4">
						<img src={Images.insurance_top} width="480px" height="410px"/>
					</div>
					<div className="col-1"></div>
					<div className="col-7 ml- mt-5">
						<div className="typewriter">
  							<p style={{paddingLeft: '8%'}}>We provide you the way to save and earn.</p>
						</div>
						<p style={{paddingRight: '12%', paddingTop: '8%',fontFamily: 'Times, Times New Roman, serif', fontSize:'18px', fontWeight:'bold', color:'rgb(150, 149, 149)'}}>A General Insurance includes all non-life insurance policies such as car insurance, bike insurance, travel insurance, SFSP insurance, and <br/>health insurance among others.</p>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<div className="container " style={{padding:'8% 0%'}}>
	<div className="row">
		
		<div className="col-3 ml-3 animated fadeInLeft">
			<div className="card mx-auto" style={{width: '20rem',background:'rgb(245, 245, 242)',  display: 'flex', flexWrap: 'wrap'}}>
  				<img className="card-img-top" src={Images.praveen_jha} alt="Card image cap"/>
  				<div className="card-body text-center">
    				<h5>Mr. Praveen Jha</h5>
    				
    				<div className="share">
    					 <a href="#" className="fab fa-whatsapp"></a>
                <a href="#" className="fab fa-facebook-f"></a>
				<a href="/call" className="fas fa-video"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
    				</div>
  					<p><b className="text-muted">Available Time Slot: 07:00 - 15:00</b></p>
  				</div>
			</div>
		</div>
		<div className="col-1"></div>
		<div className="col-3 animated fadeInDown">
			<div className="card mx-auto" style={{width: '20rem',background:'rgb(245, 245, 242)'}}>
  				<img style={{height: '200px'}} className="card-img-top" src={Images.insurance_girl} alt="Card image cap"/>
  				<div className="card-body text-center">
    				<h5 >Miss Mahira Sharma</h5>
    				
  					<div className="share">
    					 <a href="#" className="fab fa-whatsapp"></a>
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="/call" className="fas fa-video"></a>
				<a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
    				</div>
					<p><b className="text-muted">Available Time Slot: 14:00 - 20:00</b></p>
  				</div>
			</div>
		</div>
		<div className="col-1"></div>
		<div className="col-3 animated fadeInRight">
			<div className="card mx-auto" style={{width: '20rem',background:'rgb(245, 245, 242)'}}>
  				<img className="card-img-top" src={Images.rahul_tripathi} alt="Card image cap"/>
  				<div className="card-body text-center">
    				<h5 >Mr. Rahul Tripathi</h5>
    				
  					<div className="share">
    					 <a href="#" className="fab fa-whatsapp"></a>
                <a href="#" className="fab fa-facebook-f"></a>
				<a href="/call" className="fas fa-video"></a>
				<a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
    				</div>
					<p><b className="text-muted">Available Time Slot: 18:00 - 22:00</b></p>
  				</div>
			</div>
		</div>
	</div>
</div>
       </>
    );
}