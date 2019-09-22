import React from 'react';
import playStoreImg from "./images/playstore.png";
import './App.css';
import EmbedsElement from "./EmbedsElement";
import RegisteredListComponent from "./RegisteredList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/register/list" component={RegisteredList} />
        </div>
     </Router>
  );
}

function Home() {
  return (
      <div className="app-container">
          <div className="row info-container">
              <div className="col-sm info-child-container">
                <div className="app-name-container">
                  <h3>
                      <span className="app-name">TripBFF</span>
                  </h3>
                </div>
              </div>
        </div>
        <div className="app-container__content row">
          <div className="col-sm-12 col-md-6">
            <div className="col-sm-12 headline-section">
              <h1 className="headline-title">Create trip experiences on the fly!</h1>
              <h4>Time saving. Writing skill is not required. Meaningful infographic as a result.</h4>
              <a href="https://play.google.com/store/apps/details?id=com.tripbff.android" target="_blank">
                <img src={playStoreImg} alt="play store link"/>
              </a>
              <br />
              <div className="app-container__content-qr-code d-none d-md-block">
                <a href="https://play.google.com/store/apps/details?id=com.tripbff.android" target="_blank">
                  <img src="http://api.qrserver.com/v1/create-qr-code/?color=333333&amp;bgcolor=FFFFFF&amp;data=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.tripbff.android&amp;qzone=1&amp;margin=0&amp;size=400x400&amp;ecc=L" alt="qr code" />
                </a>
              </div>

            </div>
          </div>
          <div className="col-sm-12 col-md-6 center video-embed-container">
            <EmbedsElement />
          </div>
        </div>
        
     </div>
  );
}

function RegisteredList() {
  return (
    <RegisteredListComponent />
  );
}

export default App;
