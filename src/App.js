import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmbedsElement from "./EmbedsElement";

function App() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-sm-6 center">
            <EmbedsElement></EmbedsElement>
          </div>
      </div>
      <div className="row">
          <div className="col-sm-6">
            <div>
                <p>If you're interested, please leave your email here. We will inform you when we release</p>
            </div>
            <form>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control"></input>
              </div> 
              <div className="form-group">
                <label>Feedback</label>
                <textarea className="form-control"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>              
          </div>
      </div>
    </div>
  );
}

export default App;
