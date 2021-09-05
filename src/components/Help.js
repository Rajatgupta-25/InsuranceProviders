import React from 'react';
import NavBar from './Navbar';
import '../css/help.css';

export default function Help(){
    return (
        <>
        <NavBar />
        <div class="jumbotron jumbotron-fluid imageBackHelp">
            <div class="container text-white">
                <h1 class="display-4">We're here to help you</h1>
                <div class="sb-example-1">
         <div class="search">
            <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
           </button>
         </div>
      </div>
            </div>
        </div>
        <div className="container" style={{paddingBottom: '55px'}}>
            <div className="row">
                <div className="col-6 text-left">
                    <h4 className="text-muted">Common Issues</h4>
                </div>
            </div>
            <hr/>
            <div className="row mt-4">
                <div className="col-2 border" style={{boxShadow: '4px 5px 5px grey'}}>
                    <span className="fa fa-envelope-o fa-2x mt-3" style={{color: 'steelblue'}}></span>
                    <p style={{color: 'steelblue'}} className="mt-2">I forgot my email address.</p>
                </div>
                <div className="col-2 border ml-4" style={{boxShadow: '4px 5px 5px grey'}}>
                    <span className="fa fa-key fa-2x mt-3" style={{color: 'steelblue'}}></span>
                    <p style={{color: 'steelblue'}} className="mt-2">I forgot my password.</p>
                </div>
                <div className="col-2 border ml-4" style={{boxShadow: '4px 5px 5px grey'}}>
                    <span className="fa fa-refresh mt-3" style={{color: 'steelblue', fontSize: '22px'}}></span>
                    <span className="fa fa-envelope-o mt-3 ml-2" style={{color: 'steelblue'}}></span>
                    <p style={{color: 'steelblue'}} className="mt-2">How do I change my email address?</p>
                </div>
                <div className="col-2 border ml-4" style={{boxShadow: '4px 5px 5px grey'}}>
                    <span className="fas fa-user-lock fa-2x mt-3" style={{color: 'steelblue'}}></span>
                    <p style={{color: 'steelblue'}} className="mt-2">Change my account password.</p>
                </div>
                <div className="col-2 border ml-4" style={{boxShadow: '4px 5px 5px grey'}}>
                    <span className="fas fa-user-check fa-2x mt-3" style={{color: 'steelblue'}}></span>
                    <p style={{color: 'steelblue'}} className="mt-2">I need help to register my account.</p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-6 text-left">
                    <h4 className="text-muted">Logical Queries</h4>
                </div>
            </div>
            <hr/>
            <div className="row mt-4">
                <div className="col-2 border" style={{boxShadow: '4px 5px 5px grey'}}>
                    <span className="fas fa-user-shield fa-2x mt-3" style={{color: 'steelblue'}}></span>
                    <p style={{color: 'steelblue'}} className="mt-2">I want to authorize my account.</p>
                </div>
                <div className="col-2 border ml-4" style={{boxShadow: '4px 5px 5px grey'}}>
                    <span className="far fa-file-alt fa-2x mt-3" style={{color: 'steelblue'}}></span>
                    <p style={{color: 'steelblue'}} className="mt-2">Get instant investment report.</p>
                </div>
                <div className="col-2 border ml-4" style={{boxShadow: '4px 5px 5px grey'}}>
                    <span className="fas fa-users fa-2x mt-3" style={{color: 'steelblue'}}></span>
                    <p style={{color: 'steelblue'}} className="mt-2">Connect with more secure clients.</p>
                </div>
                <div className="col-2 border ml-4" style={{boxShadow: '4px 5px 5px grey'}}>
                    <span className="fas fa-poll fa-2x mt-3" style={{color: 'steelblue'}}></span>
                    <p style={{color: 'steelblue'}} className="mt-2">Check feedback report of all clients.</p>
                </div>
                <div className="col-2 border ml-4" style={{boxShadow: '4px 5px 5px grey'}}>
                    <span className="fas fa-file-contract fa-2x mt-3" style={{color: 'steelblue'}}></span>
                    <p style={{color: 'steelblue'}} className="mt-2">Report your queries here.</p>
                </div>
            </div>
        </div>
        </>
    );

}