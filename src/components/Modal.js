import React, { useEffect, useState, useRef }  from 'react';
import '../plugins/modal';

export default function Modal(props) {
    const videoRef = useRef(null);
    useEffect(() => {
    getVideo();
  });
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 420, height: 420 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };
    return (
        <>
            <div className="container mt-3" style={{border: '1px solid black', boxShadow: '4px 5px 4px grey', backgroundColor: 'silver'}}>
      	<div className="row" style={{padding:'6%'}}>
      		<div className="col-5 ml-4" style={{backgroundImage: 'url(https://www.coverdrive.co.in/india/wp-content/uploads/2019/04/Importance-of-Insurance-Agents1200x628.jpg)', opacity:'0.6', backgroundPosition:'center', backgroundSize:'cover', width:'100%', height:'420px', border: '1px solid black', boxShadow: '3px 4px 4px grey'}}>
  				<p style={{position:'absolute', top:'100px', left:'140px', fontWeight:'bold'}}><span className="fas fa-sync fa-2x fa-spin"></span> Connecting</p>	
      		</div>
              <div className="col-1"></div>
      		<div className="col-5">
      				<div className="text-center pt-4" id="loaderRaj" style={{display:'none'}}>
  						<span className="fa fa-refresh fa-spin fa-2x "></span><br/>
  						<h5>Connecting</h5>
  					</div>
      				<div className="video-wrap" id="camera">
					  <video style={{border: '1px solid black', boxShadow: '3px 4px 4px grey'}} ref={videoRef} id="videoWithRaj" playsinline autoplay/>
      					<img id="unavailableRaj" style={{display:'none'}} src="https://images.drivereasy.com/wp-content/uploads/2017/04/1-14.jpg" width="420px" height="420px"/>
      				</div>
      		</div>
      	</div>
      	<div className="row" style={{paddingBottom:'4%'}}>
      		<div className="col-4 ml-4"></div>
      		<div className="col-3" style={{border: '1px solid black', boxShadow: '3px 4px 4px grey', backgroundColor: 'rgb(222, 220, 220)', borderRadius: '50px'}}>
      			<div className="container">
                    <div className="row ml-2 mt-3">
                        <div className="col-1">
                            <p id="micOnRaj"><span className="fas fa-microphone-alt fa-2x"  style={{cursor:'pointer', color:'steelblue'}}></span></p>
      			            <p id="micOffRaj" style={{display: 'none'}}><span className="fas fa-microphone-alt-slash fa-2x"  style={{cursor:'pointer', color:'steelblue'}}></span></p>
                        </div>
                        <div className="col-1 ml-5">
                            <a href="/agent"><span className="fas fa-phone fa-2x"  style={{cursor:'pointer', color:'rgb(207, 19, 19)'}}></span></a>
                        </div>
                        <div className="col-1 ml-5">
                            <p id="videoOnRaj"><span className="fas fa-video fa-2x"  style={{cursor:'pointer', color:'steelblue'}}></span></p>
      			            <p id="videoOffRaj" style={{display: 'none'}}><span className="fas fa-video-slash fa-2x"  style={{cursor:'pointer', color:'steelblue'}}></span></p>
                        </div>
                    </div>
                </div>
            </div>
      	</div>
      </div>
        </>
    );
}