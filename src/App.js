import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmbedsElement from "./EmbedsElement";
import RegisterNotify from "./RegisterNotify";

function App() {
  return (
    <div className="app-container">
        <div className="row info-container">
            <div className="col-sm info-child-container">
              <div>
                <h3>
                    <span className="app-name">TripBFF</span> is coming soon.
                </h3>
              </div>
              <div className="col-sm-7 headline-section">
                <h1 className="headline-title">Create trip experiences on the fly!</h1>
                <h4>Time saving. Writing skill is not required. Meaningful infographic as a result.</h4>
              </div>
              <div className="request-notify">
                  <p>Wanted to be notified when we launch the amazing application?</p>
              </div>
              <RegisterNotify />         
            </div>
      </div>
      <div className="col-sm-6 center video-embed-container">
        <EmbedsElement />
      </div>
    </div>
  );
}

export default App;
